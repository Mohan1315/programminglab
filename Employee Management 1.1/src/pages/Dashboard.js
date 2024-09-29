import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import AddEmployeeForm from '../components/AddEmployeeForm';
import EmployeeList from '../components/EmployeeList';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const Dashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [open, setOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    // Fetch employees from backend
    axios.get('http://localhost:5000/api/employees')
      .then(response => {
        setEmployees(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the employees!', error);
      });
  }, []);

  const handleAddEmployee = (employee) => {
    axios.post('http://localhost:5000/api/employees', employee)
      .then(response => {
        setEmployees([...employees, response.data]);
        setAlertMessage('Employee added successfully!');
        setOpen(true);  // Show the success message
      })
      .catch(error => {
        console.error('There was an error adding the employee!', error);
      });
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Grid container spacing={3} sx={{ padding: 3 }}>
        <Grid item xs={12} md={4}>
          <AddEmployeeForm onAddEmployee={handleAddEmployee} />
        </Grid>
        <Grid item xs={12} md={8}>
          <EmployeeList employees={employees} />
        </Grid>
      </Grid>

      {/* Success Message Snackbar */}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          {alertMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Dashboard;



// import React, { useState, useEffect } from 'react';
// import Grid from '@mui/material/Grid';
// import AddEmployeeForm from '../components/AddEmployeeForm';
// import EmployeeList from '../components/EmployeeList';
// import axios from 'axios';
// import Snackbar from '@mui/material/Snackbar';
// import Alert from '@mui/material/Alert';

// const Dashboard = () => {
//   const [employees, setEmployees] = useState([]);
//   const [open, setOpen] = useState(false);
//   const [alertMessage, setAlertMessage] = useState('');

//   useEffect(() => {
//     // Fetch employees from the backend
//     axios.get('http://localhost:5000/api/employees')
//       .then(response => {
//         setEmployees(response.data);
//       })
//       .catch(error => {
//         console.error('There was an error fetching the employees!', error);
//       });
//   }, []);

//   const handleAddEmployee = (employee) => {
//     axios.post('http://localhost:5000/api/employees', employee)
//       .then(response => {
//         setEmployees([...employees, response.data]);
//         setAlertMessage('Employee added successfully!');
//         setOpen(true);  // Show the success message
//       })
//       .catch(error => {
//         console.error('There was an error adding the employee!', error);
//       });
//   };

//   const handleClose = (event, reason) => {
//     if (reason === 'clickaway') {
//       return;
//     }
//     setOpen(false);
//   };

//   return (
//     <>
//       <Grid container spacing={3} sx={{ padding: 3 }}>
//         <Grid item xs={12} md={4}>
//           <AddEmployeeForm onAddEmployee={handleAddEmployee} />
//         </Grid>
//         <Grid item xs={12} md={8}>
//           <EmployeeList employees={employees} />
//         </Grid>
//       </Grid>

//       {/* Success Message Snackbar */}
//       <Snackbar
//         open={open}
//         autoHideDuration={6000}
//         onClose={handleClose}
//       >
//         <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
//           {alertMessage}
//         </Alert>
//       </Snackbar>
//     </>
//   );
// };

// export default Dashboard;

/*
import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import AddEmployeeForm from '../components/AddEmployeeForm';
import EmployeeList from '../components/EmployeeList';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const Dashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [open, setOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    // Fetch employees from backend
    axios.get('http://localhost:5000/api/employees')
      .then(response => {
        setEmployees(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the employees!', error);
      });
  }, []);

  const handleAddEmployee = (employee) => {
    axios.post('http://localhost:5000/api/employees', employee)
      .then(response => {
        setEmployees([...employees, response.data]);
        setAlertMessage('Employee added successfully!');
        setOpen(true);  // Show the success message
      })
      .catch(error => {
        console.error('There was an error adding the employee!', error);
      });
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Grid container spacing={3} sx={{ padding: 3 }}>
        <Grid item xs={12} md={4}>
          <AddEmployeeForm onAddEmployee={handleAddEmployee} />
        </Grid>
        <Grid item xs={12} md={8}>
          <EmployeeList employees={employees} />
        </Grid>
      </Grid>

      //Success Message Snackbar 
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          {alertMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Dashboard;

/*
import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import AddEmployeeForm from '../components/AddEmployeeForm';
import EmployeeList from '../components/EmployeeList';
import axios from 'axios';


const Dashboard = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Fetch employees from backend
    axios.get('http://localhost:5000/api/employees')
      .then(response => {
        setEmployees(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the employees!', error);
      });
  }, []);

  const handleAddEmployee = (employee) => {
    axios.post('http://localhost:5000/api/employees', employee)
      .then(response => {
        setEmployees([...employees, response.data]);
      })
      .catch(error => {
        console.error('There was an error adding the employee!', error);
      });
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

*/