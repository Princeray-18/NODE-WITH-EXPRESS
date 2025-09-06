const Laptop = require("../models/laptop.model");
const createLaptop = async (req, res) => {
  try {
    const { laptopName, model, price } = req.body;
    const newLaptop = await Laptop.create({ laptopName, model, price });
    res.status(201).json({ message: "Laptop created successfully", newLaptop });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};  
const getLaptop = async (req, res) => {
  try {
    const Laptops = await Laptop.find();
    res.status(200).json({ message: "Laptops fetched successfully", Laptops });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const updateLaptop = async (req, res) => {
  try {
    const { id } = req.query;
    const { laptopName, model, price } = req.body;
    const updatedLaptop = await Laptop.findByIdAndUpdate 
      (id,{laptopName, model, price}, { new: true });
    res.status(200).json({ message: "Laptop updated successfully", updatedLaptop });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const deleteLaptop = async (req, res) => {
  try {
    const { id } = req.query;
     const deleteLaptop = await Laptop .findByIdAndDelete(id);
    res.status(200).json({ message: "Laptop deleted successfully ",deleteLaptop })
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports = {
  createLaptop,
  getLaptop,
  updateLaptop,
  deleteLaptop
};