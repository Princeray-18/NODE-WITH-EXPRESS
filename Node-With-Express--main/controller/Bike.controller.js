const Bike = require("../models/Bike.modeol");


const createBike =async (req,res)=>{
    try{
        const{bikeName,model,price}=req.body;
        const newBike=await Bike.create({bikeName,model,price});
        res.status(201).json({message:"Bike created suscessfully",newBike})
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
}
module.exports={createBike};