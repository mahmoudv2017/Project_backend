
const multer  = require('multer')
const path = require("path")
const error = require('../util/ErrorClass')
const fs = require('fs/promises')
const listOfMime = ['image/bmp' , 'image/jpeg','image/x-png','image/png','image/gif']
const target_path = path.join(__dirname ,'..','assets')

const mystorage = multer.diskStorage({
    destination : function (req,file,cb) { 
        cb(null ,target_path)
     },
     filename: async function(req,file,cb){
        if( listOfMime.find((type) => type == file.mimetype) ){
            
            try {
                await fs.access(path.join(target_path,file.originalname) )
                cb((error("File Already Exists" , 305)) , file.originalname)
            } catch (error) {
                cb(null , file.originalname)
            }
        }else{
            cb((error("File Type Not Supported" , 301)) , file.originalname)

        }
      

     }
})

const upload = multer({storage:mystorage  , limits:{
    fileSize:1024*1024*10
}}).single('images')

module.exports  = (req,res,next)=>{
    upload(req,res,(err) => {
        if(err ){
            next(err)
            return
        }
        next()
    })
}