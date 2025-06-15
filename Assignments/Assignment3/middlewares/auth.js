// middlewares/auth.js
const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/auth/login');
};

const ensureGuest = (req, res, next) => {
  if (req.isAuthenticated()) {
    return res.redirect('/auth/dashboard');
  }
  next();
};

const ensureAdmin = (req, res, next) => {
  if (req.isAuthenticated() && req.user.role === 'admin') {
    return next();
  }
  res.redirect('/');
};

module.exports = {
  ensureAuthenticated,
  ensureGuest,
  ensureAdmin
};