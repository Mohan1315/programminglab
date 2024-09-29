const express = require('express');
const bcrypt = require('bcryptjs');  // Assuming you're using bcryptjs
const Admin = require('../models/adminModel');  // Assuming you have an admin model
const path = require('path');  // Required for serving files
const router = express.Router();
const checkAdminSession = require('../middleware/checkAdminSession');

// Route to serve admin dashboard
router.get('/admin-dashboard.html', checkAdminSession, (req, res) => {
    // Fixing the sendFile path issue by providing an absolute path
    res.sendFile(path.join(__dirname, '../views/admin-dashboard.html'));
});

router.get('/admin-logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).send('Failed to logout');
        }
        res.redirect('/admin-login.html'); // Redirect to login page after logout
    });
});

// Route for checking if admin is logged in, then redirect to dashboard or login page
router.get('/admin', (req, res) => {
    if (req.session.isAdminLoggedIn) {
        return res.redirect('/admin-dashboard.html');
    }
    return res.redirect('/admin-login.html');
});

// Admin login route
router.post('/admin-login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const admin = await Admin.findOne({ email });

        if (!admin) {
            return res.status(401).send('Invalid email or password');
        }

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(401).send('Invalid email or password');
        }

        // Store session data
        req.session.isAdminLoggedIn = true;
        req.session.adminId = admin._id;

        return res.redirect('/admin-dashboard.html');
    } catch (error) {
        return res.status(500).send('Server error');
    }
});

module.exports = router;
