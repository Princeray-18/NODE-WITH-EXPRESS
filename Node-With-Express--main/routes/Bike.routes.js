 const express =require("express");
 
const { createBike } = require("../controller/Bike.controller");

    const router=express.Router();
  


    router.post("/create-bike",createBike

    );

    module.exports=router;