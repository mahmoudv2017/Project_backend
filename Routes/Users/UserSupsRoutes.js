
const SubModel = require('../../Models/Subs/SubModel')

module.exports = function(router){

    /*
        A Index route: /users/:userID/subs [GET] + query arguments for status
        A Show route: /users/:userID/subs/:id [GET]
        A Update route : /users/:userID/subs/:id [PATCH]
        A Create route : /users/:userID/subs [POST]
        An addMeal route: /users/:userID/subs/:subID/meals [POST]
        A Delete route : /users/:userID/subs/:id [DELETE]
    */


    router.get("/:userID/subs" , async (req,res) => {
        try {
            const results = await SubModel.find({userID:req.params.userID})
            res.status(200).send(results)
        } catch (error) {
            res.status(500).send("Error ")
        }
    } )

    router.get("/:userID/subs/:id" , async (req,res) => {
        try {
            const results = await SubModel.findById(req.params.id)
            res.status(200).send(results)
        } catch (error) {
            res.status(500).send("Error ")
        }
    } )

    router.patch("/:userID/subs/:id" , async (req,res) => {
     
        try {
            const results = await SubModel.findByIdAndUpdate(req.params.id,req.body)
            res.status(200).send(results)
        } catch (error) {
            res.status(500).send("Error ")
        }
    } )

    router.post("/:userID/subs" , async (req,res) => {
     
        try {
            const results = await SubModel.create(req.body)
     
            res.status(200).send(results)
        } catch (error) {
            res.status(500).send("Error ")
        }
    } )

    router.delete("/:userID/subs/:id" , async (req,res) => {
     
        try {
            const results = await SubModel.findByIdAndRemove(req.params.id)
     
            res.status(200).send(results)
        } catch (error) {
            res.status(500).send("Error ")
        }
    } )
}