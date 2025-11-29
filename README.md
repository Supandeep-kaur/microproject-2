# Microproject #2 – MEN Stack API (Create Student Records)

This repository contains a MEN stack application developed as part of Microproject #2.  
The objective of the project is to build a small, functional API capable of creating new documents in a MongoDB Atlas database using **MongoDB**, **Express**, and **Node.js**.

The system demonstrates a clean project structure, secure environment variable usage, and a properly defined Mongoose schema with field validation.

---

## 📘 Project Description

The project implements the **CREATE** operation from the CRUD model.  
It provides a single API endpoint that accepts JSON input and stores the data in a cloud database.

Key highlights:

- Structured MEN architecture  
- MongoDB Atlas connectivity  
- ES module syntax  
- Mongoose schema with required fields and validation rules  
- Nodemon for automatic server reloading  
- Clear and simple API workflow  

---

## Project Architecture
src/
├── config/
│ └── db.js
├── controllers/
│ └── studentController.js
├── models/
│ └── studentModel.js
├── routes/
│ └── studentRoutes.js
└── server.js

## Structure Overview

config/ – database connection logic
models/ – schema definitions
controllers/ – API logic
routes/ – endpoint routing
server.js – main app initialization

 ## Technologies Used

Node.js
Express.js
MongoDB Atlas
Mongoose
dotenv
Nodemon

## Install dependencies
npm install

## Create a .env file
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-url>/<database>?retryWrites=true&w=majority
PORT=5000

## Start the development server
npm run dev

You should see something like:

MongoDB connected
Server running on http://localhost:5000

## API Endpoint (Create Student)
POST /api/students

Use this endpoint to add a new student to the database.

## Request Body Example
{
  "name": "Aisha Noor",
  "email": "aisha@example.com",
  "age": 21,
  "major": "Engineering",
  "gpa": 3.8
}

## Example Response
{
  "success": true,
  "message": "Student created successfully",
  "data": {
    "_id": "65c214ffc6...",
    "name": "Aisha Noor",
    "email": "aisha@example.com",
    "age": 21,
    "major": "Engineering",
    "gpa": 3.8,
    "createdAt": "...",
    "updatedAt": "...",
    "__v": 0
  }
}

## Testing the API with Postman

Open Postman Desktop App
Create a POST request
URL: http://localhost:5000/api/students

Go to:
Body → raw → JSON
Paste the student JSON
Press Send
Check MongoDB Atlas to confirm the document was stored

##
Sensitive data such as connection strings must remain outside the repository.
This microproject implements only the CREATE feature
