const SubModel = require('../../Models/Subs/SubModel')

module.exports = {
    IndexFunc : async (req,res) => {
        try {
            let {status} = req.query
            console.log(status)
            let results;
            if(status){
                results = await SubModel.find({userID:req.params.userID , substate:status})
            }else{
                results = await SubModel.find({userID:req.params.userID})

            }
            res.status(200).send(results)
        } catch (error) {
            res.status(500).send("Error ")
        }
    } ,

    ShowFunc : async (req,res) => {
        try {
            const results = await SubModel.findById(req.params.id)
            res.status(200).send(results)
        } catch (error) {
            res.status(500).send("Error ")
        }
    }  ,

    EditFunc :  async (req,res) => {
     
        try {
            const results = await SubModel.findByIdAndUpdate(req.params.id,req.body)
            res.status(200).send(results)
        } catch (error) {
            res.status(500).send("Error ")
        }
    } ,

    CreateFunc : async (req,res) => {
     
        try {
            const results = await SubModel.create(req.body)
            res.status(200).send(results)
        } catch (error) {
            res.status(500).send("Error ")
        }
    } ,

    DeleteFunc : 
        async (req,res) => {
            try {
                const results = await SubModel.findByIdAndRemove(req.params.id)
                res.status(200).send(results)
            } catch (error) {
                res.status(500).send("Error ")
            }
        } 
     ,
}