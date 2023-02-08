const RestModel = (require('../../Models')).RestaurantModel


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
            const results = await RestModel.find()
            res.status(200).send(results)
        } catch (error) {
            next(error)
        }
    }
,
    CreateFunc : async (req,res,next)=>{
        let payload = req.body
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