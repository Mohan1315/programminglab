import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import EmployeeList from './components/EmployeeList';
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

  const handleLogin = (username, password) => {
    if (username === 'admin' && password === 'admin') {
      setUserRole('admin');
    } else if (username === 'employee' && password === 'employee') {
      setUserRole('employee');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <Router>
      <div>
        <Navbar userRole={userRole} setUserRole={setUserRole} />
        <Routes>
          <Route path="/" element={<LoginPage onLogin={handleLogin} userRole={userRole} />} />
          <Route path="/dashboard" element={userRole === 'admin' ? <Dashboard /> : <Navigate to="/" />} />
          <Route path="/employees" element={userRole === 'admin' ? <EmployeeList /> : <Navigate to="/" />} />
          <Route path="/profile" element={<EmployeeProfile userRole={userRole} employeeData={employeeData} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;