const User = require('../models/user');
const Club = require('../models/club');
const Activity = require('../models/activity');

exports.getHomepage = async (req,res)=>{
    try{
        var club = await Club.find();
        var clubList = await Club.find().limit(5);
        var date = new Date();
        var today = date.toString().split(" ")[2];
        var dateStart = date.getDay()-1;
        var dateEnd = 7-date.getDay();
        var weekStart = date.getDate()-dateStart;
        var weekEnd = date.getDate()+dateEnd;
        if(weekStart<10){weekStart = "0" + weekStart;}
        else{weekStart=weekStart.toString();}
        if(weekEnd<10){weekEnd = "0" + weekEnd;}
        else{weekEnd=weekEnd.toString();}
        var activity = await Activity.find().sort({date:1});
        var activityDate=[], weekly=[];
        for(i=0;i<activity.length;i++){
            activityDate = activity[i].date.split(".")[0];
            if(activityDate<weekEnd && activityDate>weekStart){
                weekly.push(activity[i]);
            }
        }
        var announcedActivity = await Activity.find().sort({post:-1}).limit(12);
        var user = await User.find({auth:"Student"});
        res.render("student/homepage", {
            title: "Homepage",
            activity:activity,
            announcedActivity:announcedActivity,
            weekly:weekly
        });
    }
    catch{
        console.log("Error!")
    }
}
exports.postHomepage = async (req,res)=>{
    try{
        res.redirect("/student/activities")
    }
    catch{
        console.log("Error!")
    }
}
exports.getClubs = async (req,res)=>{
    try{
        var club = await Club.find().where("name").ne("Admin");
        res.render("student/clubs", {
            title: "Clubs",
            club:club
        });
    }
    catch{
        console.log("Error!")
    }
    
},
exports.postClubs = async (req,res)=>{
    try{
        var query = req.body.query;
        var club = await Club.find({$or:[
            {name:new RegExp(query)},
            {president:new RegExp(query)},
            {vicePresident:new RegExp(query)},
            {email:new RegExp(query)},
            {category:new RegExp(query)},
            {about:new RegExp(query)}
        ]}).where("name").ne("Admin");
        res.render("student/clubs",{
            title: "Clubs",
            club:club
        });
    }
    catch{
        console.log("Error!")
    }
},
exports.getClubSingle = async (req,res)=>{
    try{
        var id = req.params.id;
        var club = await Club.findOne({_id:id});
        var activity = await Activity.find();
        res.render("student/club-single", {
            activity:activity,
            title: club.name,
            club:club
        });
    }
    catch{
        console.log("Error!")
    }
},
exports.getActivities = async (req,res)=>{
    try{
        var club = await Club.find();
        var activity = await Activity.find();
        res.render("student/activities", {
            title: "Activities",
            club:club,
            activity:activity
    
        });
    }
    catch{
        console.log("Error!")
    }
},
exports.postActivities = async (req,res)=>{
    try{
        var query = req.body.query;
        var activity = await Activity.find({$or:[
            {name:new RegExp(query)},
            {date:new RegExp(query)},
            {place:new RegExp(query)},
            {category:new RegExp(query)},
            {about:new RegExp(query)}
        ]});
        res.render("student/activities",{
            title: "Activities",
            activity:activity
        });
    }
    catch{
        console.log("Error!")
    }
},
exports.getActivitySingle = async (req,res)=>{
    try{
        var id = req.params.id;
        var activity = await Activity.findOne({_id:id});
        var club = await Club.find();
        res.render("student/activity-single", {
            title: activity.name,
            club:club,
            activity:activity
        });
    }
    catch{
        console.log("Error!")
    }
}
