const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/bootcamp");

const Schema = mongoose.Schema;

const unitSchema = new Schema({
    alamat : String,
    cluster : String,
    lt : Number,
    lb : Number,
    harga : Number,
    customer : String,
    sold : Boolean
});

const Unit = mongoose.model("unit", unitSchema);

module.exports = Unit;