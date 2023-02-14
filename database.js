const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

require("dotenv").config();
const { USER_NAME, PASSWORD, Database_Name, NODE_ENV } = process.env;

if (NODE_ENV == "test") {
  Database_Name = "test_db";
}
//      `mongodb+srv://${USER_NAME}:${PASSWORD}@firstcluster.oz3c4.mongodb.net/${Database_Name}`

module.exports = {
  Connect: async () => {
    return await mongoose.connect(
      `mongodb+srv://${USER_NAME}:${PASSWORD}@firstcluster.oz3c4.mongodb.net/${Database_Name}`

    );
  },
  Disconnect: async () => {
    return await mongoose.disconnect();
  },
};
