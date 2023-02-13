const RestModel = (require('../../Models')).RestaurantModel
require("dotenv").config;

const {PORT} = process.env

module.exports = {
    ShowFunc :async (req,res,next)=>{
        try {
    
            const results = await RestModel.findById(req.params.id) //dont forget to populate .populate(['meals'])
            res.status(200).send(results)
        } catch (error) {
            next(error) 
        }
    }
,
    IndexFunc : async (req,res,next)=>{
        try {
            let results;
            if(req.query.search){
                 results = RestModel.find({$or : [
                    {title :{ $regex: req.query.search, $options: 'i' }},
                    {description :{ $regex: req.query.search, $options: 'i' }}
                 ]})
            }else{
                results = RestModel.find({})
            }
            

            res.status(200).send( await results)
        } catch (error) {
            next(error)
        }
    }
,
    CreateFunc : async (req,res,next)=>{
        let pather = `${req.protocol}://${req.hostname}/${req.file ? req.file.originalname  : "for testing only"}`
        let payload = {...req.body , image:pather}
        try {
            const results = await RestModel.create(payload)
            res.status(200).send(results)
        } catch (error) {
            next(error) 
        }
    }
,
    UpdateFunc : async (req,res,next)=>{
        let payload = req.body
        try {
            const results = await RestModel.findByIdAndUpdate(req.params.id , payload)
            res.status(200).send(results)
        } catch (error) {
            next(error) 
        }
    }
,
    DeleteFunc : async (req,res,next)=>{
        try {
            const results = await RestModel.findByIdAndRemove(req.params.id)
            res.status(200).send(results)
        } catch (error) {
            next(error) 
        }
    }
}