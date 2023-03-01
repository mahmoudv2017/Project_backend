
const { query } = require('express')
const Models = require('../../Models')
module.exports =  {
    getAllSubs:async(req,res,next)=>{
        try {
            let results = Models.subModel.find()
            res.status(200).send( await results.populate(['meals']))
        } catch (error) {
            next(error)
        }
    },
    DeleteFunc: async(req,res,next)=>{
        try {
            let results = Models.subModel.findByIdAndDelete(req.params.id)
            res.status(200).send( await results)
        } catch (error) {
            next(error)
        }
    },
    getAllUsers:async(req,res,next)=>{
        try {
            let results ;

            if(req.params.type){
                results = Models.usersModel.find({type:req.params.type})
            }else{
                results = Models.usersModel.find()

            }
            res.status(200).send( await results.populate(['subscriptions']))
        } catch (error) {
            next(error)
        }
    },
    UpdateFunc:async(req,res,next)=>{
        try {
            let results = Models.usersModel.findByIdAndUpdate(req.params.id , req.body)
            res.status(200).send( await results.populate(['subscriptions']))
        } catch (error) {
            next(error)
        }
    },
    UserDeleteFunc:async(req,res,next)=>{
        try {
            await Models.usersModel.findByIdAndDelete(req.params.id)
            res.status(200).send({msg:"user deleted"})
        } catch (error) {
            next(error)
        }
    }
,
    SubUpdateFunc:async(req,res,next)=>{
        try {
            await Models.subModel.findByIdAndUpdate(req.params.id , req.body)
            res.status(200).send({msg:"Sub Updated"})
        } catch (error) {
            next(error)
        }
    }
}