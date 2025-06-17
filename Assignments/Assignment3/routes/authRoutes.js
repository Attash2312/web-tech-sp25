const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const User = require('../models/User');

// Login Page
router.get('/auth/login', (req, res) => {
    res.render('auth/login', {
        title: 'Login',
        messages: req.flash('error'),
        isAuthPage: true
    });
});

// Register Page
router.get('/auth/register', (req, res) => {
    res.render('auth/register', {
        title: 'Register',
        messages: req.flash('error'),
        isAuthPage: true
    });
});

// Register Handle
router.post('/auth/register', async (req, res) => {
    const { name, email, password, password2 } = req.body;
    let errors = [];

    // Check required fields
    if (!name || !email || !password || !password2) {
        errors.push({ msg: 'Please fill in all fields' });
    }

    // Check passwords match
    if (password !== password2) {
        errors.push({ msg: 'Passwords do not match' });
    }

    // Check password length
    if (password.length < 6) {
        errors.push({ msg: 'Password should be at least 6 characters' });
    }

    if (errors.length > 0) {
        req.flash('error', errors[0].msg);
        return res.redirect('/auth/register');
    }

    try {
        // Check if user exists
        const user = await User.findOne({ email: email });
        if (user) {
            req.flash('error', 'Email is already registered');
            return res.redirect('/auth/register');
        }

        const newUser = new User({
            name,
            email,
            password
        });

        // Hash Password
        const salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(newUser.password, salt);

        // Save user
        await newUser.save();
        req.flash('success_msg', 'You are now registered and can log in');
        res.redirect('/auth/login');
    } catch (err) {
        console.error(err);
        req.flash('error', 'Something went wrong');
        res.redirect('/auth/register');
    }
});

// Login Handle
router.post('/auth/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/auth/login',
        failureFlash: true
    })(req, res, next);
});

// Logout Handle
router.get('/auth/logout', (req, res) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash('success_msg', 'You are logged out');
        res.redirect('/auth/login');
    });
});

module.exports = router;
