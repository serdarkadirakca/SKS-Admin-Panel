const mongoose = require('mongoose');
const Club = require("./club");

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    auth: String,
    id:String,
    department:String,
    grade:String,
    club:{type:mongoose.Types.ObjectId,ref:"Club"},
});
module.exports = mongoose.model('User', userSchema);
