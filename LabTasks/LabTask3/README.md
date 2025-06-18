# McDonald's Web Application - Authentication Implementation

## Overview
This is a McDonald's web application built with Express.js, EJS templating, and MongoDB. The application includes a complete authentication system with user registration, login, logout, and protected routes.

## Features Implemented

### ✅ Authentication System
- **User Registration**: Secure user registration with password validation
- **User Login**: Email/password authentication using Passport.js
- **Session Management**: Express-session for maintaining user sessions
- **Password Security**: Bcrypt password hashing
- **Logout**: Secure session destruction

### ✅ Protected Routes
- **Authentication Middleware**: `isAuthenticated` middleware for route protection
- **Guest Middleware**: `isNotAuthenticated` for login/register pages
- **Route Protection**: Unauthenticated users redirected to login

### ✅ My Orders Feature
- **Protected Route**: `/orders/my-orders` - accessible only to logged-in users
- **User-Specific Orders**: Displays orders filtered by user ID
- **Order History**: Complete order details with status tracking
- **Beautiful UI**: Responsive design with order cards and tables

### ✅ Navigation Integration
- **Dynamic Navigation**: "My Orders" link appears only for authenticated users
- **Authentication State**: Login/Logout button changes based on auth status
- **User Experience**: Seamless navigation between authenticated and guest areas

## Technology Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: Passport.js with Local Strategy
- **Session Management**: Express-session
- **Password Hashing**: Bcrypt.js
- **Frontend**: EJS templating, Bootstrap CSS
- **Database Connection**: MongoDB Atlas (cloud) or local MongoDB

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas account)
- npm or yarn package manager

### 1. Clone the Repository
```bash
git clone <repository-url>
cd LabTask3
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
Create a `.env` file in the root directory:
```env
# Database Configuration
MONGODB_URI=mongodb://localhost:27017/mcdonalds
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/mcdonalds

# Session Configuration
SESSION_SECRET=your-super-secret-session-key-change-this-in-production

# Environment
NODE_ENV=development

# Port
PORT=3000
```

### 4. Database Setup
If using local MongoDB:
```bash
# Start MongoDB service
mongod

# Seed the menu (optional)
node scripts/seedMenu.js
```

### 5. Start the Application
```bash
npm start
```

The application will be available at `http://localhost:3000`

## Usage Guide

### 1. User Registration
1. Navigate to `/auth/register`
2. Fill in the registration form:
   - Name (minimum 2 characters)
   - Email (valid email format)
   - Password (minimum 6 characters, must contain uppercase, lowercase, and number)
   - Confirm Password
3. Submit the form
4. You'll be redirected to login page upon successful registration

### 2. User Login
1. Navigate to `/auth/login`
2. Enter your email and password
3. Submit the form
4. Upon successful login, you'll be redirected to the home page

### 3. Placing Orders
1. Browse the menu at `/menu`
2. Add items to your cart
3. Go to `/cart` to review your order
4. Proceed to checkout
5. Fill in delivery details
6. Complete the order

### 4. Viewing Order History
1. After logging in, click "My Orders" in the navigation
2. View all your previous orders with details:
   - Order ID and status
   - Delivery information
   - Order items and quantities
   - Total amount
   - Order date and time

### 5. Logout
1. Click "Logout" in the navigation
2. Your session will be destroyed
3. You'll be redirected to the home page

## File Structure

```
LabTask3/
├── config/
│   ├── db.js              # Database connection configuration
│   └── passport.js        # Passport authentication strategy
├── middleware/
│   └── auth.js            # Authentication middleware
├── models/
│   ├── user.js            # User model with password hashing
│   ├── Order.js           # Order model with user reference
│   └── Menu.js            # Menu items model
├── routes/
│   ├── authRoutes.js      # Authentication routes (login, register, logout)
│   ├── orders.js          # My Orders route (protected)
│   ├── cart.js            # Shopping cart functionality
│   └── pageRoutes.js      # Main page routes
├── views/
│   ├── auth/
│   │   ├── login.ejs      # Login page template
│   │   └── register.ejs   # Registration page template
│   ├── pages/
│   │   └── my-orders.ejs  # My Orders page template
│   └── partials/
│       └── header.ejs     # Navigation with auth-aware links
├── public/                # Static assets (CSS, JS, images)
├── server.js              # Main application file
└── package.json           # Dependencies and scripts
```

## Security Features

### Password Security
- **Bcrypt Hashing**: Passwords are hashed using bcrypt with salt rounds
- **Password Validation**: Strong password requirements enforced
- **Secure Storage**: Only hashed passwords stored in database

### Session Security
- **Session Secret**: Configurable session secret for security
- **Session Timeout**: 24-hour session timeout
- **Secure Cookies**: Production-ready cookie settings
- **Session Destruction**: Proper logout with session cleanup

### Route Protection
- **Authentication Middleware**: Protects sensitive routes
- **Guest Protection**: Prevents logged-in users from accessing auth pages
- **Redirect Handling**: Proper redirects for unauthorized access

### Data Validation
- **Input Validation**: Server-side validation for all forms
- **Email Validation**: Proper email format validation
- **Password Requirements**: Enforced password complexity
- **MongoDB Injection Protection**: Mongoose provides built-in protection

## API Endpoints

### Authentication Routes
- `GET /auth/login` - Login page
- `POST /auth/login` - Login form submission
- `GET /auth/register` - Registration page
- `POST /auth/register` - Registration form submission
- `GET /auth/logout` - Logout (destroys session)

### Protected Routes
- `GET /orders/my-orders` - User's order history (requires authentication)

### Public Routes
- `GET /` - Home page
- `GET /menu` - Menu page
- `GET /cart` - Shopping cart
- `GET /cart/checkout` - Checkout page
- `POST /cart/place-order` - Place order

## Database Schema

### User Model
```javascript
{
  name: String (required),
  email: String (required, unique),
  password: String (required, hashed),
  role: String (default: 'user')
}
```

### Order Model
```javascript
{
  userId: ObjectId (reference to User, optional),
  user: {
    name: String (required),
    phone: String (required),
    address: String (required)
  },
  items: [{
    product: ObjectId (reference to Menu),
    title: String,
    quantity: Number,
    price: Number
  }],
  totalAmount: Number (required),
  status: String (enum: ['pending', 'completed', 'cancelled']),
  createdAt: Date (default: now)
}
```

## Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Ensure MongoDB is running (local) or connection string is correct (Atlas)
   - Check network connectivity for Atlas connections
   - Verify IP whitelist for Atlas

2. **Session Not Working**
   - Check SESSION_SECRET in .env file
   - Ensure express-session middleware is configured
   - Verify cookie settings

3. **Authentication Not Working**
   - Check Passport.js configuration
   - Verify User model and password hashing
   - Ensure middleware is properly imported

4. **Orders Not Showing**
   - Verify user is logged in
   - Check if orders have userId field populated
   - Ensure database connection is working

### Debug Mode
To enable debug logging, set in your .env file:
```env
NODE_ENV=development
DEBUG=app:*
```

## Contributing
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License
This project is for educational purposes.

## Support
For issues and questions, please check the troubleshooting section or create an issue in the repository. 

The authentication system is now fully functional and ready for use! 