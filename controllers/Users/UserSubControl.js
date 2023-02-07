const SubModel = require('../../Models/Subs/SubModel')

module.exports = {
    IndexFunc : async (req,res,next) => {
        try {
            let {status} = req.query
            let results;
            if(status){
                results = await SubModel.find({userID:req.params.userID , substate:status})
            }else{
                results = await SubModel.find({userID:req.params.userID})

            }
            res.status(200).send(results)
        } catch (error) {
           next(error)
        }
    } ,

    ShowFunc : async (req,res,next) => {
        try {
            const results = await SubModel.findById(req.params.id)
            res.status(200).send(results)
        } catch (error) {
           next(error)
        }
    }  ,

    EditFunc :  async (req,res,next) => {
     
        try {
            const results = await SubModel.findByIdAndUpdate(req.params.id,req.body)
            res.status(200).send(results)
        } catch (error) {
           next(error)
        }
    } ,

    CreateFunc : async (req,res,next) => {
     
        try {
            const results = await SubModel.create(req.body)
            res.status(200).send(results)
        } catch (error) {
           next(error)
        }
    } ,

    DeleteFunc : 
        async (req,res,next) => {
            try {
                const results = await SubModel.findByIdAndRemove(req.params.id)
                res.status(200).send(results)
            } catch (error) {
               next(error)
            }
        } 
     ,
}