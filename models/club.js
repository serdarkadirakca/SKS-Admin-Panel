const mongoose = require('mongoose');

const clubSchema = new mongoose.Schema({
    name:String,
    image:String,
    about:String,
    president: String,
    vicePresident:String,
    email:String,
    category:String
});

module.exports = mongoose.model('Club', clubSchema);