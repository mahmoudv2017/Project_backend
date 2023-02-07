const userModel = require('../../Models/Users/UserModel')

module.exports = {
    IndexFunc : async (req,res,next)=>{
        try {
            const results = await userModel.find()
            
            res.status(200).send(results)
        } catch (error) {
            next(error)
        }
    }
}