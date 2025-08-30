 const express =require("express");
 
const { createBike,getBike,updateBike, deleteBike } = require("../controller/Bike.controller");

    const router=express.Router();
  


    router.post("/create-bike",createBike,

    router.post("/get-bike",getBike),

    router.post("/update-bike",updateBike),

    router.post("/delete-bike",deleteBike)

    );

    module.exports=router;