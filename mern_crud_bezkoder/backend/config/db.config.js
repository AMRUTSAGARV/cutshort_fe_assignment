// Configure MongoDB database & Mongoose
require("dotenv").config();

module.exports = {
  url: process.env.MONGO_URL,
};
