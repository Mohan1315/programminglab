// middleware/checkAdminSession.js
module.exports = (req, res, next) => {
    if (req.session && req.session.isAdminLoggedIn) {
        return next(); // Proceed if session exists
    }
    res.redirect('/admin-login.html'); // Redirect to login if session does not exist
};