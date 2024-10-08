const express = require('express');
const session = require('express-session'); 
const cors = require('cors');
const employeeRoutes = require('./routes/employeeRoutes');
const adminRoutes = require('./routes/adminRoutes');

const app = express();
const PORT = 5000;

// Set view engine to EJS
app.set('view engine', 'ejs');

// Middleware
app.use(cors());
app.use(express.json());  // Parse JSON data
app.use(express.urlencoded({ extended: true }));  // Parse URL-encoded data

// Logging middleware (this is where you add it)
app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error stack
    res.status(500).send('Something went wrong!'); // Send a generic error response
})

// Serve static files (like CSS, images)
app.use(express.static('public'));

// Session setup
app.use(session({
    secret: 'yourSecretKey', // Use a secure key
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true if using HTTPS
}));

// Home route rendering the EJS template
app.get('/', (req, res) => {
    res.render('index');
});

// Employee routes
app.use('/api/employees', employeeRoutes);

app.use('/', employeeRoutes);

// Admin routes (important)
app.use('/admin', adminRoutes);  // Change from `/api/admin` to `/admin`

// Admin login route (GET)
app.get('/admin-login', (req, res) => {
    const error = req.query.error || ''; 
    res.render('admin-login', { error });
});

// Admin dashboard route (GET)
app.get('/admin-dashboard', (req, res) => {
    if (!req.session.admin) {
        return res.redirect('/admin-login');
    }
    res.render('admin-dashboard', { admin: req.session.admin });
});

// Employee login route (GET)
app.get('/emp-login', (req, res) => {
    res.render('emp-login');
});

// Employee dashboard route (GET)
app.get('/emp-dashboard', (req, res) => {
    res.render('employeeDashboard');
});

// Admin registration route (GET)
app.get('/admin-register', (req, res) => {
    res.render('admin-register');
});

// Employee dashboard route (GET)
app.get('/emp-dashboard', (req, res) => {
    if (!req.session.employee) {
        return res.redirect('/emp-login'); // Redirect to login if employee is not authenticated
    }
    res.render('employeeDashboard', { employee: req.session.employee });
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
