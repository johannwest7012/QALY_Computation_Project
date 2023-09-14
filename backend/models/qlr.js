// models/qlr.js

const mongoose = require("mongoose");

const qlrSchema = new mongoose.Schema({
    name: String,
    weight: Number, 
});

module.exports = mongoose.model("QLR", qlrSchema);
