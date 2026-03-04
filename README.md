# Book Inventory Management System
## Overview

The Book Inventory Management System is a Full Stack MERN (MongoDB, Express.js, React.js, Node.js) application designed to efficiently manage and organize books within an inventory.

The system provides complete CRUD functionality, real-time updates, search and filtering capabilities, and a structured dashboard interface for seamless inventory management.

This project demonstrates practical implementation of full-stack architecture, RESTful API design, database schema modeling, modular React component design, and dynamic state handling.
---------------------------
# Features

###Book Management (CRUD Operations)

• Add new books with validation

• Retrieve and display all books

• View detailed information of a single book

• Update book details

• Delete books with confirmation

• Maintain book availability status (Available / Out of Stock)

• Automatic createdAt and updatedAt timestamps using Mongoose

#Inventory Control

• Track book quantity

• Automatic stock updates on modification

• Status indicator based on availability

• Prevent invalid stock entries using validation
--------------------------
##Search, Filter and Sort

• Search books by title

• Filter books by category / genre

• Filter by availability status

• Sort books by price, title, or date added (ascending / descending)
--------------------------
# User Interface

• Responsive design

• Clean and structured layout

• Loading states handling

• Empty state handling

• Toast notifications for actions (add, update, delete)

• Modern UI built using Tailwind CSS and DaisyUI
------------------------------------
# Tech Stack

Frontend :
React.js
React Router DOM
Axios
Tailwind CSS
DaisyUI
Lucide React
React Hot Toast 

Backend :
Node.js
Express.js
MongoDB
Mongoose
CORS
dotenv
---------------------------
# System Architecture

Client (React Frontend)
↓
REST API (Express Backend)
↓
MongoDB Database

The frontend communicates with the backend using RESTful APIs.
The backend handles request validation, business logic, and database interactions through Mongoose models.
-----------------------------
CRUD Implementation
• Create

Books are added using a POST request with required field validation before storing in MongoDB.

• Read

Books are retrieved using GET requests and displayed dynamically in a card or table layout.

• Update

Book details are modified using PUT requests. The updatedAt field is automatically managed through Mongoose timestamps.

• Delete

Books are permanently removed using DELETE requests after confirmation to prevent accidental deletion.
-----------------------------

## API Endpoints

GET     /books
GET     /books/:id
POST    /books
PUT     /books/:id
DELETE  /books/:id
PATCH   /books/:id/status
----------------------------
Database Schema
Each book document includes:

• title (String)
• author (String)
• ISBN (String)
• category (String)
• price (Number)
• quantity (Number)
• description (String)
• status (String: Available / Out of Stock)
• createdAt (Date)
• updatedAt (Date)

## PROJECT STRUCTURE
```

Book-Inventory-Management-System/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js
│   │   ├── controllers/
│   │   │   └── bookController.js
│   │   ├── models/
│   │   │   └── bookModel.js
│   │   ├── routes/
│   │   │   └── bookRoutes.js
│   │   └── server.js
│   │
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── BookCard.jsx
│   │   │   └── BookNotFound.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── HomePage.jsx
│   │   │   ├── CreatePage.jsx
│   │   │   ├── BookDetailPage.jsx
│   │   │   └── ReportPage.jsx
│   │   │
│   │   ├── lib/
│   │   │   ├── axios.js
│   │   │   └── utils.js
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
└── README.md
```
-------------------------
## Installation And Setup 

Backend Setup :
cd backend
npm install
npm start

Frontend Setup :
cd frontend
npm install
npm run dev
----------------------
Learning Outcomes :

• Full Stack MERN Development
• REST API design and implementation
• MongoDB schema design using Mongoose
• Backend validation and middleware usage
• React component-based architecture
• State management and conditional rendering
• API integration using Axios
• Clean and modular project structuring
----------------------------

## AUTHOR :
RAJANI BAGHEL
