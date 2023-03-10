
const mongoose=require('mongoose')
const {Schema}=mongoose;

const meal_Schema=new Schema(
    {
        title:String ,
        resturantid:{
            type:mongoose.Types.ObjectId
        } , 
        description:String ,
        price: Number ,
        rating:Number, 
        image:String,
        restaurantID:{type:mongoose.Types.ObjectId},
        hasChoices:Boolean, 
        SectionName:String,
        sectionId:
        {
            type:mongoose.Types.ObjectId
        }


    },{timestamps:true}
    
)

const restaurantmodel=mongoose.model('meals',meal_Schema);
module.exports=restaurantmodel;