import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import AddEmployeeForm from '../components/AddEmployeeForm';
import EmployeeList from '../components/EmployeeList';

const Dashboard = () => {
  const [employees, setEmployees] = useState([]);

  const handleAddEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  return (
    <Grid container spacing={3} sx={{ padding: 3 }}>
      <Grid item xs={12} md={4}>
        <AddEmployeeForm onAddEmployee={handleAddEmployee} />
      </Grid>
      <Grid item xs={12} md={8}>
        <EmployeeList employees={employees} />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
