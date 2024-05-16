const mongoose = require('mongoose');
const User = require("./user");

const notificationSchema = new mongoose.Schema({
    date:String,
    time:String,
    from:{type:mongoose.Types.ObjectId,ref:"User"},
    to:{type:mongoose.Types.ObjectId,ref:"User"},
    title:String,
    request:String,
    detail: String,
    status:{
        type:String,
        default:"zPending"
    },
    target:String
});
module.exports = mongoose.model('Notification', notificationSchema);
