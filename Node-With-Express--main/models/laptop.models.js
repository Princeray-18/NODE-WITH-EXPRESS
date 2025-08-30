 const mongoose=require('mongoose');
    const laptopSchema=new mongoose.Schema({
        laptopName:{
            type:String,
            required:true,
        },
        model:{
            type:String,
            required:true,
        },
        price:{
            type:Number,
            required:true,
        },
    });
    const Laptop=mongoose.model("laptop",laptopSchema);
    module.exports=Laptop;