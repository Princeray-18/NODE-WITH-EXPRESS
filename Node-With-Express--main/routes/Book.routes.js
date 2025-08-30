 const express =require("express");
 
const { createBook, getBook, updateBook, deleteBook } = require("../controller/Book.controller");

    const router=express.Router();
  


    router.post("/create-book",createBook,

    router.get("/get-books",getBook) ,
    
    router.put("/update-book/:id",updateBook),
    
    router.delete("/delete-book/:id",deleteBook)

    );

    module.exports = router;