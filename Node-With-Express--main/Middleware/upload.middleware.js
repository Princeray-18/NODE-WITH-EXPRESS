const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    //HANDLING FILENAME BY GIVING A UNIQUE NAME
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const filefilter=(req,file,cb)=>{
    if(file.mimetype==='image/jpeg' || 
        file.mimetype==='image/png'||
        file.mimetype==='image/jpg'
    ){
        cb(null,true);
    }else{
    cb(new Error('Only .jpeg, .png, .jpg format allowed!'),false);                                                                                                                                                                                                                                                                                                                                                      
    }
};
const upload = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 5 }, // 5MB limit 
});
module.exports = upload;