import React from 'react';
import './EmployeeList.css';

function EmployeeList({ employees }) {
  // Filtered employees based on the selected filter
  return (
    <div>
      <h1>Employee List</h1>

      {/* Employee Table */}
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee._id}>
              <td>{employee._id}</td> {/* Display the custom ID */}
              <td>{employee.name}</td>
              <td>{employee.department}</td>
              <td>{employee.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;


/*
import React, { useState } from 'react';
import './EmployeeList.css';

function EmployeeList({ employees }) {
  const [filter, setFilter] = useState('All');

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredEmployees = employees.filter(employee => 
    filter === 'All' || employee.status === filter
  );

  return (
    <div>
      <h1>Employee List</h1>

      <div>
        <label>Filter by Status: </label>
        <select value={filter} onChange={handleFilterChange}>
          <option value="All">All</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map(employee => (
            <tr key={employee._id}>
              <td>{employee._id}</td>
              <td>{employee.name}</td>
              <td>{employee.department}</td>
              <td>{employee.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;


/*
import React, { useState } from 'react';
import './EmployeeList.css';

// ... (rest of the code remains the same)


function EmployeeList() {
  // Dummy data for employees
  const [employees, setEmployees] = useState([
    { id: 1, name: 'Alice', department: 'HR', status: 'Active' },
    { id: 2, name: 'Bob', department: 'Engineering', status: 'Inactive' },
    { id: 3, name: 'Charlie', department: 'Sales', status: 'Active' },
    { id: 4, name: 'Diana', department: 'Marketing', status: 'Inactive' },
  ]);

  // State for filtering employees
  const [filter, setFilter] = useState('All');

  // Function to handle filtering
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  // Filtered employees based on the selected filter
  const filteredEmployees = employees.filter(employee => 
    filter === 'All' || employee.status === filter
  );

  return (
    <div>
      <h1>Employee List</h1>

      // Filter Dropdown
      <div>
        <label>Filter by Status: </label>
        <select value={filter} onChange={handleFilterChange}>
          <option value="All">All</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      // Employee Table
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map(employee => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.department}</td>
              <td>{employee.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;

*/
