import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage({ setUserRole }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulated credentials
    const credentials = {
      admin: { username: 'admin', password: 'admin' },
      employee: { username: 'employee', password: 'employee' },
    };

    // Check credentials and set user role
    if (username === credentials.admin.username && password === credentials.admin.password) {
      setUserRole('admin');
      navigate('/dashboard'); // Redirect admin to the dashboard
    } else if (username === credentials.employee.username && password === credentials.employee.password) {
      setUserRole('employee');
      navigate('/profile'); // Redirect employee to their profile
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


/*import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage({ setUserRole }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Check credentials (simple simulation)
    if (username === 'admin' && password === 'admin') {
      setUserRole('admin'); // Set role as admin
      navigate('/employees'); // Redirect to employee list
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