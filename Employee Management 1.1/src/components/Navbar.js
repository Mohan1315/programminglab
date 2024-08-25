import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar({ userRole, setUserRole }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUserRole(null); // Clear the user role
    navigate('/'); // Redirect to login page
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Login</Link>
        </li>
        {userRole === 'admin' && (
          <>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/employees">Employee List</Link>
            </li>
          </>
        )}
        {userRole && (
          <>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;

/*

import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ userRole }) {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Login</Link>
        </li>
        {userRole === 'admin' && (
          <>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/employees">Employee List</Link>
            </li>
          </>
        )}
        {userRole && (
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;

/*

import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Login</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/employees">Employee List</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
*/