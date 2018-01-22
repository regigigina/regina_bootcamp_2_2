const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/bootcamp");

const Schema = mongoose.Schema;

const customerSchema = new Schema({
    nama : String,
    telepon : String,
    email : String,
    unit : String,
    deposit : Number
});

const Customer = mongoose.model("customer", customerSchema);

module.exports = Customer;