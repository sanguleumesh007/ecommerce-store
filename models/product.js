var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var schema = new Schema({
  //schema of item displayed on fron page
  imagePath: { type: String, required: false },
  title: { type: String, required: false },
  description: { type: String, required: false },
  price: { type: Number, required: false },
});

module.exports = mongoose.model("Product", schema); //accessing a model
