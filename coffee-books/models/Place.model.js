const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const placeSchema = new Schema(
  {
  name:{
    type: String
    },
  location:{
    type: Object
    },
  placeType:{
    type: String,
    enum: ["coffee shop", "bookstore"]
    }
  },
  {
  timestamps: true
});

const User = mongoose.model("User", userSchema);
module.exports = User;