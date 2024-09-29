const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  _id: {
    type: Number, // Custom ID field
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  // Add more fields as needed
});

const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;


/*
const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  department: { type: String, required: true },
  status: { type: String, required: true },
});

module.exports = mongoose.model('Employee', EmployeeSchema);
*/