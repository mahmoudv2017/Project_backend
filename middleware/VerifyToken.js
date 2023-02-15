const JWT=require('jsonwebtoken');


const verfiy= async(req,res,next)=>
{
    try{

        if(req.headers.authorization)
        {
            let token=req.headers.authorization;
             await JWT.verfiy(token,process.env.JWT_SECRET_KEY);
        }
        next();
    }
    catch(error)
    {
        next(error);
    }
}
    module.exports=verfiy