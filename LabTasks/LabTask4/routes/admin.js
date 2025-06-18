const express = require('express');
const router = express.Router();
const { isAuthenticated, isAdmin } = require('../middleware/auth');
const Menu = require('../models/Menu');
const Order = require('../models/Order');

// All admin routes protected
router.use(isAuthenticated, isAdmin);

// GET /admin/products - List all products
router.get('/products', async (req, res) => {
    const products = await Menu.find();
    res.render('admin/products', { products });
});

// GET /admin/products/add - Show add product form
router.get('/products/add', (req, res) => {
    res.render('admin/add-product');
});

// POST /admin/products/add - Handle add product
router.post('/products/add', async (req, res) => {
    const { name, price, description, image, category, isAvailable } = req.body;
    await Menu.create({ name, price, description, image, category, isAvailable: isAvailable === 'on' });
    res.redirect('/admin/products');
});

// GET /admin/products/edit/:id - Show edit form
router.get('/products/edit/:id', async (req, res) => {
    const product = await Menu.findById(req.params.id);
    res.render('admin/edit-product', { product });
});

// POST /admin/products/edit/:id - Handle edit
router.post('/products/edit/:id', async (req, res) => {
    const { name, price, description, image, category, isAvailable } = req.body;
    await Menu.findByIdAndUpdate(req.params.id, { name, price, description, image, category, isAvailable: isAvailable === 'on' });
    res.redirect('/admin/products');
});

// POST /admin/products/delete/:id - Handle delete
router.post('/products/delete/:id', async (req, res) => {
    await Menu.findByIdAndDelete(req.params.id);
    res.redirect('/admin/products');
});

// GET /admin/orders - List all orders
router.get('/orders', async (req, res) => {
    const orders = await Order.find().populate('user');
    res.render('admin/orders', { orders });
});

// (Optional) POST /admin/orders/:id/status - Update order status
router.post('/orders/:id/status', async (req, res) => {
    const { status } = req.body;
    await Order.findByIdAndUpdate(req.params.id, { status });
    res.redirect('/admin/orders');
});

module.exports = router; 