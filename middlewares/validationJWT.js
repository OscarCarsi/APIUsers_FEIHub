const { request, response } = require('express');
const jwt = require('jsonwebtoken');

const validateJWT = (req = request, res = response, next)=>{
    const token = req.header('token');

    if(!token){
        return res.status(401).json({msg:'No token in the request'})
    }

    try{
        const{username} = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
        req.username = username;
        next();
    }catch(error){
        console.log(error);
        res.status(401).json({
            msg:'Invalid token'
        })
    }

    
}

module.exports = {
    validateJWT
}