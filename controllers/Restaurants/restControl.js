const RestModel = require('../../Models/Restaurants/RestModel')



module.exports = {
    ShowFunc :async (req,res)=>{
        try {
    
            const results = await RestModel.findById(req.params.id)
            res.status(200).send(results)
        } catch (error) {
            res.status(500).send("Error Doing Somthing") //till we do error handlers
        }
    }
,
    IndexFunc : async (req,res)=>{
        try {
            const results = await RestModel.find()
    
            res.status(200).send(results)
        } catch (error) {
            res.status(500).send("Error Doing SOmthing") //till we do error handlers
        }
    }
,
    CreateFunc : async (req,res)=>{
        let payload = req.body
        try {
            const results = await RestModel.create(payload)
            res.status(200).send(results)
        } catch (error) {
            res.status(500).send("Error DOing SOmthing") //till we do error handlers
        }
    }
,
    UpdateFunc : async (req,res)=>{
        let payload = req.body
        try {
            const results = await RestModel.findByIdAndUpdate(req.params.id , payload)
            res.status(200).send(results)
        } catch (error) {
            res.status(500).send("Error Doing Somthing") //till we do error handlers
        }
    }
,
    DeleteFunc : async (req,res)=>{
        try {
            const results = await RestModel.findByIdAndRemove(req.params.id)
            res.status(200).send(results)
        } catch (error) {
            res.status(500).send("Error DOing SOmthing") //till we do error handlers
        }
    }
}