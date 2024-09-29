const jwt = require('jsonwebtoken');
const Employee = require('../models/employeeModel');

exports.protect = async (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await Employee.findById(decoded.id);
        next();
    } catch (err) {
        return res.status(401).json({ msg: 'Not authorized' });
    }
};

exports.protectAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ msg: 'Admin only route' });
    }
    next();
};
