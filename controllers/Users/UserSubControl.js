const SubModel = require('../../Models/Subs/SubModel')
const userModel = require('../../Models/Users/UserModel')

module.exports = {
   
    AddMealFunc : async(req,res,next)=>{
        try {
            const sub = await SubModel.findById(req.params.subID)
            if(sub == {}){
                next(new Error("No Subscription with such ID exists"))
                return
            }
            sub.meals.push(req.params.mealID)
            const results = await SubModel.findByIdAndUpdate(req.params.subID,
                {meals : sub.meals})
            res.status(200).send(results)
        } catch (error) {
            next(error)
        }
    },
    IndexFunc : async (req,res,next) => {
        try {
            let {status} = req.query
            let results;
            if(status){
                results =  SubModel.find({userID:req.params.userID , substate:status})
            }else{
                results =  SubModel.find({userID:req.params.userID})

            }
            res.status(200).send( await results.populate('meals'))
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
            console.log("ay7aga sub created")
            const results = await SubModel.create(req.body)
            const cuser = await userModel.findById(req.body.userID)
            console.log(cuser);
            cuser.subscriptions.push(results._id)
            let user = await userModel.findByIdAndUpdate(req.body.userID,cuser)
            console.log("ay7aga sub created" , user)
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