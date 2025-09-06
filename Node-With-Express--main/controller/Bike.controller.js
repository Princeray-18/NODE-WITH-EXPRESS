const Bike = require("../models/Bike.model");


const createBike =async (req,res)=>{
    try{
        const{bikeName,model,price}=req.body;
        const newBike=await Bike.create({bikeName,model,price});
        res.status(201).json({message:"Bike created suscessfully",newBike})
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
};
const getBike = async (req, res) => {
  try {
    const Bikes = await Bike.find();        
    res.status(200).json({message :"Bikes fetch successfully", Bikes});
  }catch (err) {
    res.status(500).json({ message: err.message }); // Corrected 'message' typo
  }
};
const updateBike = async (req, res) => 
     {try{
    const {id} = req.params;    
    const {bikeName,model,price} = req.body;
    const updatedBike = await Bike.findByIdAndUpdate(id, {bikeName,model,price}, {new: true});
    res.status(200).json({message: "Bike updated successfully", updatedBike});
  }catch(err){  
    res.status(500).json({message:err.message})
  }
};
const deleteBike = async (req, res) => {
    try {
      const { id } = req.params;
        await Bike.findByIdAndDelete(id);
        res.status(200).json({ message: "Bike deleted successfully" });
    }catch (err) {
      res.status(500).json({ message: err.message });
}};

module.exports=
{createBike,
    getBike,
    updateBike,
    deleteBike};