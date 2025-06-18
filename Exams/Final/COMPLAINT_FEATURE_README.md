# Complaint Management Feature

This document describes the implementation of the "Contact Us / Complaint" feature for the McDonald's web application.

## Overview

The complaint feature allows users to submit complaints about their orders and provides both user and admin interfaces to manage these complaints.

## Features Implemented

### 1. Access Control
- Only logged-in users can access the complaint submission form
- Users can only view their own complaints
- Admins can view and manage all complaints

### 2. Complaint Submission
- Users can select from their recent orders (last 10 orders)
- Required fields: Order ID and complaint message (minimum 10 characters)
- Validation ensures the order belongs to the user
- Complaints are stored with user ID, order ID, message, and timestamp

### 3. User Interface
- **Complaint Form**: `/complaints/submit` - Submit new complaints
- **My Complaints**: `/complaints/my-complaints` - View user's own complaints
- **Contact Us Page**: Updated to link to complaint submission

### 4. Admin Interface
- **All Complaints**: `/complaints/admin/all` - View and manage all complaints
- **Status Management**: Update complaint status (pending, in-progress, resolved, closed)
- **Navigation**: Added links in admin products and orders pages

## Database Schema

### Complaint Model (`models/Complaint.js`)
```javascript
{
    userId: ObjectId (ref: User),
    orderId: ObjectId (ref: Order),
    message: String (10-1000 characters),
    status: String (pending, in-progress, resolved, closed),
    createdAt: Date,
    updatedAt: Date
}
```

## Routes

### User Routes (`/complaints`)
- `GET /complaints/submit` - Show complaint form
- `POST /complaints/submit` - Submit complaint
- `GET /complaints/my-complaints` - View user's complaints

### Admin Routes (`/complaints`)
- `GET /complaints/admin/all` - View all complaints
- `PUT /complaints/admin/:id/status` - Update complaint status

## Files Created/Modified

### New Files
- `models/Complaint.js` - Complaint data model
- `routes/complaints.js` - Complaint routes
- `views/complaints/submit.ejs` - Complaint submission form
- `views/complaints/my-complaints.ejs` - User complaints list
- `views/admin/complaints.ejs` - Admin complaints management
- `scripts/createSampleComplaints.js` - Sample data generator

### Modified Files
- `server.js` - Added complaints routes
- `routes/admin.js` - Added complaints redirect
- `views/pages/contact-us.ejs` - Updated complaint links
- `views/partials/header.ejs` - Added complaints navigation
- `views/admin/products.ejs` - Added complaints navigation
- `views/admin/orders.ejs` - Added complaints navigation

## Usage Instructions

### For Users
1. **Submit a Complaint**:
   - Navigate to Contact Us page
   - Click "Submit Complaint" (requires login)
   - Select an order from the dropdown
   - Enter complaint message (minimum 10 characters)
   - Submit the complaint

2. **View Your Complaints**:
   - Click "My Complaints" in the navigation
   - View all your submitted complaints
   - See status updates from admin

### For Admins
1. **Access Complaints Management**:
   - Go to Admin Products or Orders page
   - Click "Manage Complaints" button
   - Or navigate directly to `/complaints/admin/all`

2. **Manage Complaints**:
   - View all complaints in a table format
   - Update complaint status using dropdown
   - View detailed complaint information in modals
   - See status counts at the top of the page

## Status Types
- **Pending**: New complaint, awaiting review
- **In Progress**: Complaint is being investigated
- **Resolved**: Complaint has been resolved
- **Closed**: Complaint case closed

## Testing

### Create Sample Data
```bash
node scripts/createSampleComplaints.js
```

### Test Scenarios
1. **User submits complaint**: Login as user, submit complaint
2. **User views complaints**: Check "My Complaints" page
3. **Admin manages complaints**: Login as admin, update status
4. **Access control**: Try accessing complaint pages without login

## Security Features
- Authentication required for all complaint operations
- Users can only access their own complaints
- Order validation ensures users can only complain about their orders
- Admin-only access to complaint management
- Input validation and sanitization

## Future Enhancements
- Email notifications for status updates
- Complaint categories (food quality, delivery, service, etc.)
- File attachments for complaints
- Response system for admins to reply to complaints
- Complaint analytics and reporting 