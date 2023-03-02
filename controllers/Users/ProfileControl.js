const userModel = require("../../Models/Users/UserModel");
const bcrypt=require('bcrypt') 
 

module.exports = {
  IndexFunc: async (req, res, next) => {
    try {
      const results = await userModel.find();

      res.status(200).send(results);
    } catch (error) {
      next(error);
    }
  },
  getUserByID: async (req, res, next) => {
    try {
      const getByID = await userModel.findById(req.params.id);

      res.status(200).json(getByID);
    } catch (error) {
      next(error);
    }
  },
  deleteUser: async (req, res, next) => {
    try {
      const userDeleted = await userModel.findByIdAndDelete(req.params.id);
      res.status(200).send(userDeleted);
    } catch (error) {
      next(error);
    }
  },
  updateUserById: async (req, res, next) => {
    try {
      if(req.body.password){
        const hashpass=await bcrypt.hash(req.body.password,10);
        req.body.password=hashpass;
        console.log(req.body.password)
      }
      const updateUser = await userModel.findByIdAndUpdate(
        req.params.id,
        req.body
      );
 
      res.status(200).send(updateUser);
    } catch (error) {
      next(error);
    }
  },
};
