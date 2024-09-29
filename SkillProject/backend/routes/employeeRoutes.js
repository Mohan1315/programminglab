const express = require('express');
const { addEmployee, getEmployees, loginEmployee } = require('../controllers/employeeController');
const { protectAdmin } = require('../middleware/authMiddleware');
const router = express.Router();

// Admin-only routes
router.post('/add', protectAdmin, addEmployee);  
router.get('/', protectAdmin, getEmployees);     

// Login route (No need for admin protection)
router.post('/login', loginEmployee);

module.exports = router;
