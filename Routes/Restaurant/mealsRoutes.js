/*
Meals
Index

Show by restaurant

Create

Delete

Update Meals

Aailable Routes

A SHOW route: /Restaurants/:RestaurantID/meals/:id [GET]
A Index route: /Restaurants/:RestaurantID/meals/ [GET]
A Update route: /Restaurants/:RestaurantID/meals/:id [PATCH]
A Delete route: /Restaurants/:RestaurantID/meals/:id [DELETE]
A Create route: /Restaurants/:RestaurantID/meals/ [POST]
*/

const Middlewares = require('../../middleware')
const mealcontrol=require('../../controllers/Restaurants/mealsControllers')


module.exports = function(router){
router.get('/:RestaurantID/meals/',mealcontrol.Indexfunc)    
router.get('/:RestaurantID/meals/:id',mealcontrol.Showfunc)

router.patch('/:RestaurantID/meals/:id' , Middlewares.ImageUpload ,mealcontrol.updatefunc)

router.delete('/:RestaurantID/meals/:id',mealcontrol.Deletefunc)
router.post('/:RestaurantID/meals',Middlewares.ImageUpload , mealcontrol.Createfunc)
}