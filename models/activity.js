const mongoose = require('mongoose');
const Club = require("./club");
const Date = require("../middlewares/date");
const Time = require("../middlewares/time");

const activitySchema = new mongoose.Schema({
    name:String,
    image:String,
    about:String,
    date: String,
    place:String,
    post:{
        type:String,
        default:Date + " - " + Time
    },
    club:{type:mongoose.Types.ObjectId,ref:"Club"},
    category:String
});

module.exports = mongoose.model('Activity', activitySchema);


