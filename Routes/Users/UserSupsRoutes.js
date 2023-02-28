

const SubControls = require('../../controllers/Users/UserSubControl')
const Milldewares = require('../../middleware')

module.exports = function(router){

    /*
        A Index route: /users/:userID/subs [GET] + query arguments for status
        A Show route: /users/:userID/subs/:id [GET]
        A Update route : /users/:userID/subs/:id [PATCH]
        A Create route : /users/:userID/subs [POST]
        An addMeal route: /users/:userID/subs/:subID/meals [POST]
        A Delete route : /users/:userID/subs/:id [DELETE]
    */

    
    router.get("/:userID/subs" , Milldewares.VerifyToken , SubControls.IndexFunc)

    router.get("/:userID/subs/:id" ,  Milldewares.VerifyToken ,SubControls.ShowFunc)

    router.patch("/:userID/subs/:id" , Milldewares.VerifyToken ,SubControls.EditFunc )

    router.post("/:userID/subs/:subID/meals/:mealID" , Milldewares.VerifyToken , SubControls.AddMealFunc)

    router.post("/:userID/subs" ,  Milldewares.VerifyToken ,SubControls.CreateFunc )

    router.delete("/:userID/subs/:id" ,  Milldewares.VerifyToken ,SubControls.DeleteFunc)
}