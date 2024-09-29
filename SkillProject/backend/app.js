const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const adminRoutes = require('./routes/adminRoutes');
const session = require('express-session');

const app = express();

// Middleware to parse JSON and form data
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Session middleware
app.use(session({
    secret: 'yourSecretKey', // Change to a strong secret
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set 'true' if using HTTPS
}));

// Serve static files (for HTML, CSS, JS, etc.)
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB Connection
mongoose.connect("mongodb+srv://MohanManjhi:Mohan%40121@cluster0.1khns.mongodb.net/Company?retryWrites=true&w=majority")
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));

// Admin login route
app.get('/admin-login', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'admin-login.html')); // Serve admin login page
});

// Home Route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html')); // Serve home page
});

// Admin Route: Checks if admin is logged in and redirects accordingly
app.get('/admin', (req, res) => {
    if (req.session.isAdminLoggedIn) {
        return res.redirect('/admin-dashboard');
    }
    return res.redirect('/admin-login');
});

// Admin logout route
app.get('/admin-logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error("Failed to destroy session:", err);
            return res.status(500).send('Error logging out');
        }
        res.redirect('/admin-login'); // Redirect to admin login page after logout
    });
});

// Middleware to check if admin is authenticated
function isAuthenticated(req, res, next) {
    if (req.session.isAdminLoggedIn) {
        return next();
    }
    return res.redirect('/admin-login');
}

// Admin dashboard route (protected)
app.get('/admin-dashboard', isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'admin-dashboard.html')); // Serve admin dashboard
});

// Admin routes
app.use('/admin', adminRoutes);

// Start Server
app.listen(3000, () => console.log('Server running on port 3000'));

// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const path = require('path');
// const adminRoutes = require('./routes/adminRoutes');
// const session = require('express-session');

// const app = express();

// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true })); // Add this line to parse form data
// app.use(session({
//     secret: 'yourSecretKey', // Change to a strong secret
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: false } // Set 'true' if using HTTPS
// }));


// app.use('/admin', adminRoutes);

// app.get('/admin', (req, res) => {
//     if (req.session.isAdminLoggedIn) {
//         return res.redirect('/admin-dashboard.html');
//     }
//     return res.redirect('/admin-login.html');
// });

// // Serve static files
// app.use(express.static(path.join(__dirname, 'views')));
// app.use(express.static(path.join(__dirname, 'public')));

// // View engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'html'); // If using plain HTML files

// // MongoDB Connection
// mongoose.connect("mongodb+srv://MohanManjhi:Mohan%40121@cluster0.1khns.mongodb.net/Company?retryWrites=true&w=majority")
//     .then(() => console.log('MongoDB connected'))
//     .catch(err => console.log('MongoDB connection error:', err));

// // Home Route
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'index.html')); // Serve home page
// });

// app.get('/admin-logout', (req, res) => {
//     // Destroy the session
//     req.session.destroy((err) => {
//         if (err) {
//             console.error("Failed to destroy session:", err);
//             return res.status(500).send('Error logging out');
//         }
//         // Redirect to login page after logout
//         res.redirect('/admin-login'); // Assuming you have an admin login page
//     });
// });

// function isAuthenticated(req, res, next) {
//     if (req.session && req.session.admin) {
//         // Admin is authenticated, proceed to the next middleware or route handler
//         return next();
//     }
//     // If not authenticated, redirect to the login page
//     return res.redirect('/admin-login');
// }

// app.get('/admin-dashboard', isAuthenticated, (req, res) => {
//     // Render the admin dashboard page
//     res.render('admin-dashboard'); // or send your HTML response
// });

// app.get('/admin-login', (req, res) => {
//     // Send the static admin login HTML page
//     res.sendFile(__dirname + '/views/admin-login.html');  // Adjust the path as needed
// });

// // Start Server
// app.listen(3000, () => console.log('Server running on port 3000'));