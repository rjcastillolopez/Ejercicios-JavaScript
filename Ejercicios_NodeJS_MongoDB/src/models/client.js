const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true,
   },
   phone: {
      type: String,
      required: true,
   },
   city: {
      type: String,
      required: true,
   },
   street: {
      type: String,
      required: true,
   },
   number: {
      type: Number,
      required: true,
   },
   state: {
      type: String,
      required: true,
   },
   birthdate: {
      type: String,
      required: true,
   },
});

module.exports = mongoose.model("clients", clientSchema);
