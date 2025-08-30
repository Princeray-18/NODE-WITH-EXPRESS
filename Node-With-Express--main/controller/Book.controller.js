const Book = require("../models/Book.model");

//createbook
const createBook =async (req,res)=>{
    try{
        const{bookName,model,price}=req.body;
        const newBook=await Book.create({bookName,model,price});
        res.status(201).json({message:"Book created suscessfully",newBook})
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
};
//get
const getBook = async (req, res) => {
  try {
    const Users = await User.find();        
    res.status(200).json({message :"Users fetch successfully", Users});
  }catch (err) {
    res.status(500).json({ message: err.message }); // Corrected 'message' typo
  }
};
const updateBook = async (req, res) => 
     {try{
    const {id} = req.params;
    const {bookName,model,price} = req.body;
    const updatedBook = await Book.findByIdAndUpdate(id, {bookName,model,price}, {new: true});
    res.status(200).json({message: "Book updated successfully", updatedBook});
  }catch(err){
    res.status(500).json({message:err.message})
  }
};
const deleteBook = async (req, res) => {
    try {
      const { id } = req.params;
      await Book.findByIdAndDelete(id);
      res.status(200).json({ message: "Book deleted successfully" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
};
    

    
module.exports=
{createBook,
 getBook,
updateBook,
deleteBook};