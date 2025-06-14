const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');

const app = express();

// Set views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

// Layout configuration
app.use(expressLayouts);
app.set('layout', 'layouts/main'); // matches views/layouts/main.ejs

// Test route
app.get('/home', (req, res) => {
    res.render('index', { title: 'Home' });
});

app.listen(5000, () => console.log('Server running on port 5000'));