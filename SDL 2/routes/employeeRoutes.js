const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../db');

// Render the employee list using EJS
router.get('/employees', (req, res) => {
    db.query('SELECT * FROM employees', (err, results) => {
        if (err) throw err;
        res.render('index', { employees: results });
    });
});

// Route to add an employee
router.post('/add', async (req, res) => {
    const { first_name, last_name, email, position, department, salary } = req.body;

    try {
        // Check if required fields are provided
        if (!first_name || !last_name || !email || !position || !department || !salary) {
            return res.status(400).send({ message: 'All fields are required!' });
        }

        // Insert the new employee into the database
        const result = await db.query(
            'INSERT INTO employees (first_name, last_name, email, position, department, salary) VALUES (?, ?, ?, ?, ?, ?)', 
            [first_name, last_name, email, position, department, salary]
        );
        
        res.status(201).send({ message: 'Employee added successfully!', id: result[0].insertId });
    } catch (error) {
        console.error('Database error:', error); // Log the error for debugging
        res.status(500).send({ message: error.message || 'An error occurred while adding the employee.' });
    }
});




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



module.exports = router;
