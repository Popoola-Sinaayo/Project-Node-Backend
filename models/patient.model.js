const mongoose = require("mongoose");

const pateintSchema = new mongoose.Schema({
  name: String,
  contactDetails: String,
  address: String,
  pinCode: Number,
});

module.exports = mongoose.model("Patient", pateintSchema);
