const { Types } = require('mongoose');
const models = require('../../Models')
module.exports={
    Indexfunc:async(req,res,next)=>
    {
        try {
            const getmeal=await models.MealModel.find({restaurantID: Types.ObjectId(req.params.RestaurantID) });
            res.status(200).json(getmeal);
    
        } catch (error) {
            next(error)
        }
    },
    Showfunc:async (req,res,next)=>
    {
        try {
            
            const onemeal=await models.MealModel.findById(req.params.id);
            res.status(200).json(onemeal);
            
        } catch (error) {
            next(error);
        }
    },
    Createfunc: async(req,res,next)=>
{
    try {
        
        const createone= await models.MealModel.create(req.body);
        res.status(200).json(createone);
    } catch (error) {
        next(error)
    }
}
    ,
    Deletefunc:async(req,res,next)=>
    {
        try {
            const deleteone= await models.MealModel.findByIdAndDelete(req.params.id);
            res.status(200).json(deleteone);
        } catch (error) {
            next(error);
        }
    } 
    , 
    updatefunc :async(req,res,next)=>
    {
        try {
           const lastmeal= await models.MealModel.findByIdAndUpdate(req.params.id,req.body);
    
            res.status(200).json(lastmeal);
        } catch (error) {
            next(error);
        }
    }

}