const jwt = require('jsonwebtoken');
const  authmiddleware = (req, res, next) => {
    try{
        const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json({ message: 'unauthorized:No Auth provider' });
    }
    console.log ("Auth Header:", authHeader);
    const token = authHeader.split(' ')[1];
    
    if (!token) {
        return res.status(401).json({ message: "unauthorized:No token provided" });
    }
    console.log("Token:", token);
    
        const verifyToken=jwt.verify(token,process.env.JWT_SECRET);
    req.user=verifyToken;

    next()
    }catch(err){
        res.status(500).json({message:err.message})
    }
};
module.exports=authmiddleware;