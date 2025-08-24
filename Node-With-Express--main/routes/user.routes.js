
const express = require("express");
const { createUser } = require("../controller/user.controller");
const router = express.Router();

//REST API Endpoints for User Management

//post -> add data to the database
router.post("/create-user", createUser);
// Export the router to be used in the main app

module.exports = router; // This allows the router to be imported in other files, such as index.js