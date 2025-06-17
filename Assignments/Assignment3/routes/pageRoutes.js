const express = require('express');
const router = express.Router();
const { ensureAuth } = require('../middlewares/auth');

// All routes are public for development
router.get('/', (req, res) => {
    res.render('index', {
        title: 'Home',
        isAuthPage: false
    });
});

router.get('/menu', (req, res) => {
    res.render('pages/menu', {
        title: 'Our Menu',
        isAuthPage: false
    });
});

router.get('/about-our-food', (req, res) => {
    res.render('pages/about', {
        title: 'About Our Food',
        isAuthPage: false
    });
});

router.get('/your-right-to-know', (req, res) => {
    res.render('pages/your-right-to-know', {
        title: 'Your Right To Know',
        isAuthPage: false
    });
});

router.get('/our-app', (req, res) => {
    res.render('pages/our-app', {
        title: 'Our App',
        isAuthPage: false
    });
});

router.get('/family', (req, res) => {
    res.render('pages/family', {
        title: 'Family',
        isAuthPage: false
    });
});

router.get('/cart', (req, res) => {
    res.render('pages/cart', {
        title: 'Cart',
        isAuthPage: false
    });
});

router.get('/trending-now', (req, res) => {
    res.render('pages/trending', {
        title: 'Trending Now',
        isAuthPage: false
    });
});

router.get('/contact-us', (req, res) => {
    res.render('pages/contact-us', {
        title: 'Contact Us',
        isAuthPage: false
    });
});

router.get('/search', (req, res) => {
    res.render('pages/search', {
        title: 'Search',
        isAuthPage: false
    });
});

router.get('/locate-me', (req, res) => {
    res.render('pages/locate-me', {
        title: 'Locate Me',
        isAuthPage: false
    });
});

router.get('/checkout', (req, res) => {
    res.render('pages/checkout', {
        title: 'Checkout',
        isAuthPage: false
    });
});

module.exports = router;
