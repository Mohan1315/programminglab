import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const AddEmployeeForm = ({ onAddEmployee }) => {
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddEmployee({ name, department, status });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', maxWidth: 300, margin: 'auto', marginTop: 2 }}
    >
      <TextField
        label="Name"
        variant="outlined"
        margin="normal"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <TextField
        label="Department"
        variant="outlined"
        margin="normal"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        required
      />
      <TextField
        label="Status"
        variant="outlined"
        margin="normal"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        required
      />
      <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 2 }}>
        Add Employee
      </Button>
    </Box>
  );
};

export default AddEmployeeForm;
