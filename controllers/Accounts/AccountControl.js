
const error=require('../../util/ErrorClass')
const {usersModel}=require('../../Models')
const bcrypt=require('bcrypt') 
const JWT=require('jsonwebtoken')
require('dotenv').config()

const {JWT_SECRET_KEY , JWT_Expiration_TIME} = process.env

module.exports = {
    Register : async(req,res,next)=>
    {
        try {
    
                const newuser=req.body;
                const find= await usersModel.find({username:newuser.username});
                if(find.length) throw error(404,"data not valid");
    
                const hashpass=await bcrypt.hash(req.body.password,10);
                req.body.password=hashpass;
              await usersModel.create(req.body);
                res.status(200).json("user created");
                
            
        } catch (error) {
            next(error)
        }
    },

    Login : async(req,res,next)=>{
        try {
            const {username,password}=req.body;
            const user=await usersModel.findOne({username});
            if(!user) next(error("invalid user name or password",401))
            const isMatch=await bcrypt.compare(password,user.password);
            if(!isMatch) next(error("invalid username or password",401))
            let token=JWT.sign({"userid":user.id},JWT_SECRET_KEY,{expiresIn:JWT_Expiration_TIME});
        
            res.json({"message":"Logged in success",
        "Token-is":token , "user_payload":user});
        
        } catch (error) {
                next(error);
        }
    }
}