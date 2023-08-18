const { model, Schema } = require("../connection");

const myschema = new Schema({
  name: String,
  image: String,
  location: String,
  description: String,
});

module.exports = model('places', myschema);