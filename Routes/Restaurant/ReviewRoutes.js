
module.exports = function(router){
    router.get("/:restaurantID/reviews" , (req,res) => {
        res.status(200).send(req.params)
    })
}