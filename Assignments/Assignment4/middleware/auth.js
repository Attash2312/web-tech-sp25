// Middleware to check if user is authenticated
const isAuthenticated = (req, res, next) => {
    console.log('Auth check - User:', req.user);
    console.log('Auth check - Session:', req.session);
    
    if (req.isAuthenticated()) {
        console.log('User is authenticated');
        return next();
    }
    
    console.log('User is not authenticated');
    req.flash('error', 'Please log in to access this page');
    res.redirect('/auth/login');
};

// Middleware to check if user is not authenticated (for login/register pages)
const isNotAuthenticated = (req, res, next) => {
    if (!req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
};

module.exports = {
    isAuthenticated,
    isNotAuthenticated
}; 