const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../db');
const saltRounds = 10;

// Render the employee list using EJS
router.get('/employees', (req, res) => {
    db.query('SELECT * FROM employees', (err, results) => {
        if (err) throw err;
        res.render('index', { employees: results });
    });
});

// Middleware to protect routes that require login
function isAuthenticated(req, res, next) {
    if (req.session.employee) {
        next(); // Proceed if the user is authenticated
    } else {
        res.redirect('/emp-login'); // Redirect to login if not authenticated
    }
}

// Add a new employee
router.post('/add', async (req, res) => {
    console.log('Request body:', req.body); // Log incoming request body for debugging
    const { first_name, last_name, email, position, department, salary } = req.body;

    // Validate required fields
    if (!first_name || !last_name || !email || !position || !department || !salary) {
        console.error('Missing required fields', req.body); // Log which fields are missing
        return res.status(400).send({ message: 'All fields are required!' });
    }

    // Set a default password (you can customize this as needed)
    const defaultPassword = 'default123'; // This is the default password that will be set

    try {
        // Hash the default password before saving it to the database
        const hashedPassword = await bcrypt.hash(defaultPassword, saltRounds);

        // Insert into database, including the hashed password
        const result = await db.query(
            'INSERT INTO employees (first_name, last_name, email, position, department, salary, password) VALUES (?, ?, ?, ?, ?, ?, ?)', 
            [first_name, last_name, email, position, department, salary, hashedPassword] // Insert hashed password
        );

        console.log('Employee added with ID:', result[0].insertId); // Log success
        res.status(201).send({ message: 'Employee added successfully!', id: result[0].insertId });
        
    } catch (error) {
        console.error('Database error:', error); // Log database error
        res.status(500).send({ message: error.message || 'An error occurred while adding the employee.' });
    }
});

// Change employee password
router.post('/change-password', async (req, res) => {
    const { email, newPassword } = req.body;
    const hashedPassword = await bcrypt.hash(newPassword, 10); // Hash the new password

    const sql = 'UPDATE employees SET password = ? WHERE email = ?';
    db.query(sql, [hashedPassword, email], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error changing password' });
        }
        res.status(200).json({ message: 'Password changed successfully' });
    });
});

// Employee login route
router.post('/emp-login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    try {
        // Check if employee exists
        const [employee] = await db.query('SELECT * FROM employees WHERE email = ?', [email]);

        if (employee.length === 0) {
            return res.status(404).json({ message: 'Employee not found' });
        }

        // Compare password
        const validPassword = await bcrypt.compare(password, employee[0].password);

        if (!validPassword) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        // Store employee details in session
        req.session.employee = {
            id: employee[0].id,
            name: employee[0].first_name,
            email: employee[0].email
        };

        res.redirect('/emp-dashboard'); // Redirect to the employee dashboard after successful login
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Logout route
router.get('/admin-logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error('Error destroying session:', err);
            return res.status(500).json({ message: 'Error logging out' });
        }
        res.redirect('/admin-login'); // Redirect to login page after logout
    });
});

module.exports = router;
