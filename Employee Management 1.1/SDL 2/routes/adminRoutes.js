const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../db');
const router = express.Router();

// Admin registration route
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Hash password before storing it
        const hashedPassword = await bcrypt.hash(password, 10);

        // Await the database query to ensure it completes
        const [result] = await db.query(`INSERT INTO admins (name, email, password) VALUES (?, ?, ?)`, [name, email, hashedPassword]);

        res.status(201).send('Admin registered successfully.');
    } catch (err) {
        if (err.code === 'ER_DUP_ENTRY') {
            return res.status(400).send('Email already exists.');
        }
        return res.status(500).send('Server error');
    }
});

// Admin login route
router.post('/admin-login', async (req, res) => {
    const { email, password } = req.body;

    try {
        console.log('Query started...');
        const startTime = Date.now();

        // Await the query
        const [results] = await db.query('SELECT * FROM admins WHERE email = ?', [email]);

        const endTime = Date.now();
        console.log(`Query finished in ${endTime - startTime}ms`);

        if (results.length === 0) {
            return res.render('admin-login', { error: 'Invalid email or password' });
        }

        const admin = results[0];

        // Compare passwords
        const isMatch = await bcrypt.compare(password, admin.password);

        if (!isMatch) {
            return res.render('admin-login', { error: 'Invalid email or password' });
        }

        // Create a session
        req.session.admin = {
            id: admin.id,
            name: admin.name,
            email: admin.email
        };

        return res.redirect('/admin-dashboard');
    } catch (err) {
        console.error('Error during query execution:', err.message);
        return res.status(500).send('Server error');
    }
});



module.exports = router;
