const mongoose = require("mongoose"); 
const pinSchema = new mongoose.Schema({
  pins: [Number]
});

const Pin = mongoose.model("pin", pinSchema);

module.exports = Pin;