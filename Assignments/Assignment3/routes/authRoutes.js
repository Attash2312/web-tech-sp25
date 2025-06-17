const express = require('express');
const router = express.Router();
const passport = require('passport');

// GET login form
router.get('/auth/login', (req, res) => {
  res.render('auth/login', {
    title: 'Login',
    isAuthPage: true
  });
});

// GET register form
router.get('/auth/register', (req, res) => {
  res.render('auth/register', {
    title: 'Register',
    isAuthPage: true
  });
});

// POST login
router.get('/auth/login', (req, res) => {
  res.render('auth/login', {
    title: 'Login',
    isAuthPage: true,
    error: req.flash('error')  // add this line
  });
});
router.post('/auth/login', passport.authenticate('local', {
  successRedirect: '/auth/dashboard',
  failureRedirect: '/auth/login',
  failureFlash: true
}));

// POST register (dummy for now)
router.post('/auth/register', (req, res) => {
  // logic to register user
  res.redirect('/auth/login');
});

// Logout
router.get('/logout', (req, res) => {
  req.logout(() => {
    res.redirect('/');
  });
});

module.exports = router;
