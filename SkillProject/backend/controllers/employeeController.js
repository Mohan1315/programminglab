const bcrypt = require('bcrypt');
const Employee = require('../models/employeeModel'); // Assuming Employee is your Mongoose model

// Add new employee by Admin
exports.addEmployee = async (req, res) => {
    try {
        const { firstName, lastName, email, position, department, salary } = req.body;

        // Check if the email already exists
        const existingEmployee = await Employee.findOne({ email });
        if (existingEmployee) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        // Generate default password and hash it
        const defaultPassword = 'employee'; 
        const hashedPassword = await bcrypt.hash(defaultPassword, 10);

        // Generate unique employee ID
        const employeeId = `EMP${Date.now()}`;

        // Create a new employee
        const newEmployee = new Employee({
            firstName,
            lastName,
            email,
            position,
            department,
            salary,
            employeeId,
            password: hashedPassword, // Save hashed password
            status: 'active', // Set status as active
        });

        await newEmployee.save();
        res.status(201).json({ message: 'Employee added successfully', employee: newEmployee });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
