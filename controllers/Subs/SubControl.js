const {subModel , usersModel} = require('../../Models')
module.exports = {
    IndexFunc : async (req,res,next) => {
        try {
            let results;
            if(req.query.status){
                results = subModel.find({substate:req.query.status})
            }else{
                results = subModel.find({})
            }
            res.status(200).send( await results)
        } catch (error) {
            next(error)
        }
    },
    ShowFunc : async (req,res,next) => {
        try {
            const results = await subModel.findById(req.params.id)
            res.status(200).send(results)
        } catch (error) {
            next(error)
        }
    },
    CreateFunc : async (req,res,next) => {
        try {
            console.log("ay7aga sub created")
            const results = await subModel.create(req.body)
            const cuser = await usersModel.findById(req.body.userID)
            cuser.subscriptions.push(results._id)
            let user = await usersModel.findByIdAndUpdate(req.body.userID,cuser)
            console.log("ay7aga sub created" , user)
            res.status(200).send(results)
        } catch (error) {
            next(error)
        }
    },
    EditFunc : async (req,res,next) => {
        try {
            const results = await subModel.findByIdAndUpdate(req.params.id,req.body)
            res.status(200).send(results)
        } catch (error) {
            next(error)
        }
    },
    DeleteFunc : async (req,res,next) => {
        try {
            const results = await subModel.findByIdAndDelete(req.params.id)
            res.status(200).send(results)
        } catch (error) {
            next(error)
        }
    },
}