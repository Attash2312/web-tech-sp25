# Web Development Course – Attash Ul Wahab

**Roll Number:** SP22-BSE-050  
**Course Instructor:** Sir Usman Akram (Registered with BSAI)

## Repository Structure

```
web-tech-sp25/
├── Assignments/          # Course assignments
│   ├── Assignment1/     # Basic HTML/CSS
│   ├── Assignment2/     # Responsive design
│   ├── Assignment3/     # Node.js basics
│   └── Assignment4/     # Express.js application
├── LabTasks/            # Lab exercises
│   ├── LabTask1/        # HTML/CSS fundamentals
│   ├── LabTask2/        # JavaScript basics
│   ├── LabTask3/        # Node.js/Express
│   └── LabTask4/        # Database integration
├── Exams/               # Exam projects
│   ├── MidTerm/         # Mid-term examination
│   └── Final/           # Final lab exam (MAIN PROJECT)
├── Project/             # Course project
└── README.md           # This file
```

## Main Project: Final Lab Exam (McDonald's Web Application)

The Final Lab Exam is the main project that demonstrates a complete full-stack web application for McDonald's with comprehensive features including user authentication, menu management, cart functionality, order processing, admin panel, and complaint management system.

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- Git

### Installation Commands

1. **Clone the repository:**
```bash
git clone https://github.com/Attash2312/web-tech-sp25
cd web-tech-sp25
```

2. **Navigate to the Final Lab Exam project:**
```bash
cd Exams/Final
```

3. **Install dependencies:**
```bash
npm install
```

4. **Set up environment variables:**
Create a `.env` file in the `Exams/Final` directory with:
```env
MONGODB_URI=mongodb://localhost:27017/mcdonalds_app
SESSION_SECRET=your-secret-key-here
PORT=3000
NODE_ENV=development
```

5. **Start the application:**
```bash
npm start
```

6. **For development with auto-restart:**
```bash
npx nodemon server.js
```

The application will be available at `http://localhost:3000`

## Available Scripts

- `npm start` - Start the production server
- `npm run dev` - Start development server with nodemon
- `node scripts/createAdmin.js` - Create admin user
- `node scripts/createSampleMenu.js` - Populate menu with sample data
- `node scripts/createSampleComplaints.js` - Create sample complaints

## Project Architecture

### Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose ODM
- **Authentication:** Passport.js with Local Strategy
- **Template Engine:** EJS with Express-EJS-Layouts
- **Styling:** Bootstrap CSS Framework
- **Session Management:** Express-Session with Connect-Mongo
- **Password Hashing:** bcryptjs

### Project Structure
```
Exams/Final/
├── config/           # Database and Passport configuration
├── middleware/       # Authentication middleware
├── models/          # MongoDB schemas
├── public/          # Static assets (CSS, JS, Images)
├── routes/          # Express routes
├── scripts/         # Database seeding scripts
├── views/           # EJS templates
├── server.js        # Main application file
└── package.json     # Dependencies and scripts
```

## Features & Functionality

### Authentication System
- **User Registration** with email validation
- **User Login/Logout** with session management
- **Password Security** with bcrypt hashing
- **Role-based Access Control** (User/Admin)
- **Protected Routes** with middleware

### Menu Management (CRUD Operations)
- **Create:** Add new menu items with images, prices, categories
- **Read:** Display menu items organized by categories
- **Update:** Edit existing menu items
- **Delete:** Remove menu items from the system
- **Availability Toggle:** Mark items as available/unavailable

### Shopping Cart System
- **Add Items** to cart with quantity selection
- **Update Quantities** in real-time
- **Remove Items** from cart
- **Session-based Cart** persistence
- **Cart Total Calculation**

### Order Management
- **Place Orders** with delivery information
- **Order History** for users
- **Order Status Tracking** (pending, processing, delivered, cancelled)
- **Payment Integration** (cash/card options)
- **Order Details** with item breakdown

### Admin Panel
- **Dashboard** with overview statistics
- **Product Management** (full CRUD operations)
- **Order Management** with status updates
- **User Management** capabilities
- **Complaint Management** system

### Complaint Management System
- **Submit Complaints** linked to specific orders
- **Complaint Tracking** with status updates
- **Admin Response** system
- **User Complaint History**
- **Status Management** (pending, in-progress, resolved, closed)

## Routes & Endpoints

### Authentication Routes (`/auth`)
- `GET /auth/login` - Display login form
- `POST /auth/login` - Handle user login
- `GET /auth/register` - Display registration form
- `POST /auth/register` - Handle user registration
- `GET /auth/logout` - Handle user logout

### Public Pages (`/`)
- `GET /` - Home page
- `GET /menu` - Display menu items by category
- `GET /about-our-food` - About page
- `GET /your-right-to-know` - Information page
- `GET /our-app` - App information
- `GET /family` - Family page

### Cart Routes (`/cart`)
- `GET /cart` - View shopping cart
- `POST /cart/add/:productId` - Add item to cart
- `POST /cart/update/:productId` - Update item quantity
- `POST /cart/remove/:productId` - Remove item from cart
- `GET /cart/checkout` - Checkout page
- `POST /cart/place-order` - Place order

### Order Routes (`/orders`)
- `GET /orders` - View all orders (admin)
- `POST /orders/:id/status` - Update order status (admin)

### User Order Routes (`/my-orders`)
- `GET /my-orders` - View user's order history
- `GET /my-orders/:id` - View specific order details

### Admin Routes (`/admin`)
- `GET /admin` - Admin dashboard
- `GET /admin/products` - List all products
- `GET /admin/products/add` - Add product form
- `POST /admin/products/add` - Handle add product
- `GET /admin/products/edit/:id` - Edit product form
- `POST /admin/products/edit/:id` - Handle edit product
- `POST /admin/products/delete/:id` - Delete product
- `GET /admin/orders` - List all orders
- `GET /admin/complaints` - Redirect to complaints management

### Complaint Routes (`/complaints`)
- `GET /complaints/submit` - Complaint submission form
- `POST /complaints/submit` - Handle complaint submission
- `GET /complaints/my-complaints` - User's complaint history
- `GET /complaints/admin/all` - All complaints (admin)
- `PUT /complaints/admin/:id/status` - Update complaint status (admin)

## Database Models

### User Model
- `name` - User's full name
- `email` - Unique email address
- `password` - Hashed password
- `role` - User role (user/admin)
- `createdAt` - Account creation timestamp

### Menu Model
- `name` - Product name
- `price` - Product price
- `description` - Product description
- `image` - Product image URL
- `category` - Product category
- `isAvailable` - Availability status

### Order Model
- `userId` - Reference to user
- `items` - Array of ordered items
- `totalAmount` - Order total
- `status` - Order status
- `paymentMethod` - Payment type
- `deliveryInfo` - Delivery details
- `createdAt` - Order timestamp

### Complaint Model
- `userId` - Reference to user
- `orderId` - Reference to order
- `message` - Complaint message
- `status` - Complaint status
- `createdAt` - Complaint timestamp
- `updatedAt` - Last update timestamp

## CRUD Operations

### Menu Items (Products)
- **CREATE:** Add new menu items via admin panel
- **READ:** Display menu items on menu page
- **UPDATE:** Edit existing menu items
- **DELETE:** Remove menu items from system

### Orders
- **CREATE:** Place new orders through cart
- **READ:** View order history and details
- **UPDATE:** Update order status (admin)
- **DELETE:** Cancel orders (soft delete)

### Complaints
- **CREATE:** Submit new complaints
- **READ:** View complaint history
- **UPDATE:** Update complaint status (admin)
- **DELETE:** Archive resolved complaints

### Users
- **CREATE:** Register new users
- **READ:** View user profiles
- **UPDATE:** Update user information
- **DELETE:** Deactivate user accounts

## User Interface Features

- **Responsive Design** - Works on all device sizes
- **Modern UI** - Clean and professional appearance
- **Navigation Menu** - Easy site navigation
- **Search Functionality** - Find menu items quickly
- **Image Gallery** - High-quality product images
- **Status Indicators** - Visual feedback for orders/complaints
- **Form Validation** - Client and server-side validation
- **Flash Messages** - User feedback notifications

## Security Features

- **Password Hashing** - Secure password storage
- **Session Management** - Secure user sessions
- **Input Validation** - Prevent malicious input
- **CSRF Protection** - Cross-site request forgery protection
- **Authentication Middleware** - Route protection
- **Role-based Access** - Admin-only features

## Quick Start Guide

1. **Clone and navigate:**
```bash
git clone https://github.com/Attash2312/web-tech-sp25
cd web-tech-sp25/Exams/Final
```

2. **Install dependencies:**
```bash
npm install
```

3. **Set up database:**
```bash
# Start MongoDB (if local)
mongod

# Or use MongoDB Atlas (cloud)
```

4. **Create admin user:**
```bash
node scripts/createAdmin.js
```

5. **Populate sample data:**
```bash
node scripts/createSampleMenu.js
```

6. **Start the application:**
```bash
npm start
```

7. **Access the application:**
- Open `http://localhost:3000`
- Register a new account or login as admin
- Explore all features

## Notes

- The `node_modules` folder is in `.gitignore` and won't be downloaded when cloning
- All sensitive data (passwords, API keys) should be stored in environment variables
- The application uses MongoDB - ensure it's running before starting the server
- For production deployment, update environment variables and security settings

**Built for Web Development Course SP25**
