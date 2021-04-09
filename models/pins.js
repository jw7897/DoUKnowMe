const mongoose = require("mongoose"); 
const pinSchema = new mongoose.Schema({
  codes: [Number]
});

const Pin = mongoose.model("pin", pinSchema);

module.exports = Pin;