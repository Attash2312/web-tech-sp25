const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../middlewares/auth');

// 🟢 Public Route (no auth required)
router.get('/', (req, res) => res.render('index', { 
  title: 'Home',
  user: req.user,
  isAuthPage: false  // Avoid undefined error in layout
}));

// 🔒 All Other Routes (require auth)
router.get('/careers', ensureAuthenticated, (req, res) => res.render('careers', { 
  title: 'Careers',
  user: req.user,
  isAuthPage: false
}));

router.get('/contact-us', ensureAuthenticated, (req, res) => res.render('contact-us', { 
  title: 'Contact Us',
  user: req.user,
  isAuthPage: false
}));

// Add more protected routes below, all with ensureAuthenticated
// ...

module.exports = router;
