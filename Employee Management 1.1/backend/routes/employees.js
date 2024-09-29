const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');
const Counter = require('../models/Counter');

// Create a new employee
router.post('/', async (req, res) => {
  try {
    // Find and update the counter
    const counter = await Counter.findOneAndUpdate(
      { id: 'employee_id' },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );

    // Create a new employee with the custom ID
    const newEmployee = new Employee({
      _id: counter.seq, // Use the incremented sequence value
      name: req.body.name,
      department: req.body.department,
      status: req.body.status,
      // Add more fields as needed
    });

    await newEmployee.save();
    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(500).json({ message: 'Error creating employee', error });
  }
});

// Add more routes as needed

module.exports = router;

/*
const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');

// Get all employees
router.get('/', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new employee
router.post('/', async (req, res) => {
  const employee = new Employee({
    name: req.body.name,
    department: req.body.department,
    status: req.body.status,
  });

  try {
    const newEmployee = await employee.save();
    res.status(201).json(newEmployee);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;

*/