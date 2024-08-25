import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './index.css'
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import EmployeeList from './pages/EmployeeList';
import EmployeeProfile from './pages/EmployeeProfile';

function App() {
  const [userRole, setUserRole] = useState(null);

  // Dummy employee data
  const employeeData = {
    id: 1,
    name: 'John Doe',
    department: 'Engineering',
    status: 'Active',
    skills: ['JavaScript', 'React', 'Node.js'],
  };

  return (
    <Router>
      <div>
      <Navbar userRole={userRole} setUserRole={setUserRole} />

        <Routes>
          <Route path="/" element={<LoginPage setUserRole={setUserRole} />} />
          <Route path="/dashboard" element={userRole === 'admin' ? <Dashboard /> : <Navigate to="/" />} />
          <Route path="/employees" element={userRole === 'admin' ? <EmployeeList /> : <Navigate to="/" />} />
          <Route
            path="/profile"
            element={<EmployeeProfile userRole={userRole} employeeData={employeeData} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;





/*
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import EmployeeList from './pages/EmployeeList';

function App() {
  const [userRole, setUserRole] = useState(null); // Track the user's role

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<LoginPage setUserRole={setUserRole} />} />
          <Route path="/dashboard" element={userRole === 'admin' ? <Dashboard /> : <Navigate to="/" />} />
          <Route path="/employees" element={userRole === 'admin' ? <EmployeeList /> : <Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


/*

code version 1.1
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import EmployeeList from './pages/EmployeeList';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employees" element={<EmployeeList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

code version 1.0
import React, { useState } from 'react';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement login logic here (e.g., check credentials)
    if (username === 'admin' && password === 'admin') {
      window.location.href = '/dashboard'; // Redirect to the dashboard
    } else if (username === 'employee' && password === 'employee') {
      window.location.href = '/employees'; // Redirect to employee profile (to be implemented later)
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
*/