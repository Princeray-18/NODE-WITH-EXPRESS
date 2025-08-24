const User = require("../models/User.Model"); // Corrected path and filename

const createUser = async (req, res) => {
  try {
    const { age, username, email } = req.body; // Use 'username' to match schema

    // Create new user using the correct fields
    const newUser = await User.create({ age, username, email });

    res.status(201).json({ message: "User created successfully", user: newUser }); // Use 201 for creation
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { createUser };