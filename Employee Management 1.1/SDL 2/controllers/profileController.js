const express = require('express');
const router = express.Router();
const db = require('../db'); // assuming you have a database connection setup

router.get('/profile', async (req, res) => {
    console.log('Profile endpoint hit'); 
    try {
      const employeeId = req.session.employee.id; 
      const result = await db.query(`SELECT * FROM employees WHERE id = ?`, [employeeId]);
      
      if (result && result.length > 0) {
        const employeeProfile = result[0]; 
        res.json(employeeProfile);
      } else {
        res.status(404).json({ message: 'Employee profile not found' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error fetching employee profile' });
    }
  });

  router.updateProfile = async (req, res) => {
    try {
        const { first_name, last_name, email, phone, address, department, position } = req.body;
        const employeeId = req.session.employee.id; // Get employee ID from session

        const query = `UPDATE employees SET first_name = ?, last_name = ?, email = ?, phone = ?, address = ?, department = ?, position = ? WHERE id = ?`;
        const [results] = await db.execute(query, [first_name, last_name, email, phone, address, department, position, employeeId]);

        if (results.affectedRows === 0) {
            res.status(404).send({ message: 'User  not found' });
        } else {
            res.send({ message: 'Profile updated successfully' });
        }
    } catch (err) {
        console.error('Error updating the profile information:', err);
        res.status(500).send({ message: 'Error updating the profile information' });
    }
};

module.exports = router;