const Book = require("../models/Book.model");


const createBook =async (req,res)=>{
    try{
        const{bookName,model,price}=req.body;
        const newBook=await Book.create({bookName,model,price});
        res.status(201).json({message:"Book created suscessfully",newBook})
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
}
module.exports={createBook};