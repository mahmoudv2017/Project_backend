const express = require('express')
const router = express.Router()
/*

A Index route: /subs [GET] + query parametes for status filters
A Show route : /subs/:id [GET]
A Create route : /subs [POST] just for testing purposes
A Update route : /subs/:id [PATCH]
A Delete route : /subs/:id [DELETE]

*/

const SubController = require('../../controllers/Subs/SubControl')

router.get('/' , SubController.IndexFunc)
router.get('/:id' , SubController.ShowFunc)
router.post('/' , SubController.CreateFunc)
router.delete('/:id' , SubController.DeleteFunc)
router.patch('/:id' , SubController.EditFunc)



module.exports = router