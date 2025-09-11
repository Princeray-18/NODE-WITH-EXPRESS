const User = require("../models/User.Model");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); // <-- Add this line

const createUser = async (req, res) => {
  try {
    const { age, username, password, email } = req.body;
    console.log(req.body);
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const encryptPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      age,
      username,
      email,
      password: encryptPassword
    });
    res.status(201).json({ message: "User created successfully", user: newUser });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    console.log("user", user);
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h"
    });
    console.log("Token:", token);
    res.status(200).json({ message: "Login successful", user, token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ message: "Users fetched successfully", users });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { age, username, email } = req.body;
    const updatedUser = await User.findByIdAndUpdate(id, { age, username, email }, { new: true });
    res.status(200).json({ message: "User updated successfully", updatedUser });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
  login,
}