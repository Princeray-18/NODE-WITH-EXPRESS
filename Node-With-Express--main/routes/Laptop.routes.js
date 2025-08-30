const express = require("express");
const { createLaptop, getLaptop, updateLaptop, deleteLaptop } = require("../controller/Laptop.controller");
const router = express.Router();

router.post("/create-laptop", createLaptop);

router.get("/get-laptops", getLaptop);

router.put("/update-laptop", updateLaptop);

router.delete("/delete-laptop", deleteLaptop);
module.exports = router;
