const userModel = require("../../Models/Users/UserModel");

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
      const updateUser = await userModel.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      console.log(updateUser);
      res.status(200).send(updateUser);
    } catch (error) {
      next(error);
    }
  },
};
