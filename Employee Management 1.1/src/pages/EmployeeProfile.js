import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const EmployeeProfile = ({ userRole, employeeData }) => {
  // Default values if employeeData is undefined
  const {
    name = '',
    department = '',
    status = '',
    skills = []
  } = employeeData || {};

  const handleUpdateProfile = () => {
    // Logic to handle profile update
  };

  return (
    <Grid container spacing={3} sx={{ padding: 3 }}>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={name}
          disabled
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Department"
          variant="outlined"
          fullWidth
          margin="normal"
          value={department}
          disabled
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Status"
          variant="outlined"
          fullWidth
          margin="normal"
          value={status}
          disabled
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleUpdateProfile}>
          Update Profile
        </Button>
      </Grid>
    </Grid>
  );
};

export default EmployeeProfile;
