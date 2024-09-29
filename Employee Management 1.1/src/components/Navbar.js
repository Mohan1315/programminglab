import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function Navbar({ userRole, setUserRole }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUserRole(null); // Clear the user role
    navigate('/'); // Redirect to login page
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Employee Management
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {!userRole && (
            <Button color="inherit" component={Link} to="/">
              Login
            </Button>
          )}
          {userRole === 'admin' && (
            <>
              <Button color="inherit" component={Link} to="/dashboard">
                Dashboard
              </Button>
              <Button color="inherit" component={Link} to="/employees">
                Employee List
              </Button>
            </>
          )}
          {userRole && (
            <>
              <Button color="inherit" component={Link} to="/profile">
                Profile
              </Button>
              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;



/*
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function Navbar({ userRole, setUserRole }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUserRole(null); // Clear the user role
    navigate('/'); // Redirect to login page
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Employee Management
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          //how login button only if userRole is null 
          {!userRole && (
            <Button color="inherit" component={Link} to="/">
              Login
            </Button>
          )}
          {userRole === 'admin' && (
            <>
              <Button color="inherit" component={Link} to="/dashboard">
                Dashboard
              </Button>
              <Button color="inherit" component={Link} to="/employees">
                Employee List
              </Button>
            </>
          )}
          {userRole && (
            <>
              <Button color="inherit" component={Link} to="/profile">
                Profile
              </Button>
              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
*/