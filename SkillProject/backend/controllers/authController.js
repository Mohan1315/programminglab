const Employee = require('../models/employeeModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Login for admin/employee
exports.login = async (req, res) => {
    const { email, password } = req.body;
    const user = await Employee.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ msg: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, role: user.role });
};

// Update password
exports.updatePassword = async (req, res) => {
    const { oldPassword, newPassword } = req.body;
    const user = await Employee.findById(req.user.id);

    if (!user || !(await bcrypt.compare(oldPassword, user.password))) {
        return res.status(401).json({ msg: 'Incorrect current password' });
    }

    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();
    res.json({ msg: 'Password updated successfully' });
};
