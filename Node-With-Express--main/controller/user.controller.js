const User = require("../models/User.Model"); // Corrected path and filename
// Create a new user
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
// Get all users
const getUsers = async (req, res) => {
  try {
    const Users = await User.find();
    res.status(200).json({message :"Users fetch successfully", Users}); 
  } catch (err) {
    res.status(500).json({ message: err.message }); // Corrected 'message' typo
  }
};
 //Update by id
const updateUser = async (req, res) => 

  {try{
    const {id} = req.params;
    const {age, username, email} = req.body;
    const updatedUser = await User.findByIdAndUpdate(id, {age, username, email}, {new: true});
    res.status(200).json({message: "User updated successfully", updatedUser});
  }catch(err){
    res.status(500).json({message:err.message})
    
    
  }
  }
  // Delete user by id
  const deleteUser = async (req, res) => {
    try {
      const { id } = req.params;
      await User.findByIdAndDelete(id);
      res.status(200).json({ message: "User deleted successfully" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };  
module.exports = 
{createUser,  
getUsers,
updateUser,
deleteUser,
 };

