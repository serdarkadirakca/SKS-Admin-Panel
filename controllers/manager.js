const User = require('../models/user');
const Club = require('../models/club');
const Activity = require('../models/activity');
const Notification = require("../models/notification");
const Date = require("../middlewares/date");
const Time = require("../middlewares/time");

exports.getDashboard = async (req,res)=>{
    try{
        var myClub = req.session.club;
        var activity = await Activity.find({club:myClub});
        var student = await User.find({auth:"Student"});
        var id = req.session.user;
        var notification = await Notification.find({to:id}).populate({
            path:"from",
            populate:{
                path:"club",
                model:"Club"
            }
        }).sort("status").limit(3);
        var notificationList = await Notification.find({to:id}).populate({
            path:"from",
            populate:{
                path:"club",
                model:"Club"
            }
        }).limit(10).sort("status");
        var notificationCount = await Notification.find({to:id}).populate({
            path:"from",
            populate:{
                path:"club",
                model:"Club"
            }
        });
        res.render("manager/dashboard", {
            title: "Dashboard",
            countActivity:activity.length,
            countNotifications:notificationCount.length,
            countAnnouncement:activity.length,
            student:student,
            activity:activity,
            notification:notification,
            notificationList:notificationList
        });
    }
    catch{
        console.log("Error!")
    }
    
},
exports.getClubs = async (req,res)=>{
    try{
        var club = await Club.find().where("name").ne("Admin");
        var activity = await Activity.find();
        var notificationId  = req.session.user;
        var notification = await Notification.find({to:notificationId}).populate({
            path:"from",
            populate:{
                path:"club",
                model:"Club"
            }
        }).sort("status");
        res.render("manager/clubs", {
            title: "Clubs",
            activity:activity,
            club:club,
            notification:notification
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
        var activity = await Activity.find();
        var id= req.session.user;
        var notification = await Notification.find({to:id}).populate({
            path:"from",
            populate:{
                path:"club",
                model:"Club"
            }
        }).limit(3).sort("date");
        res.render("manager/clubs",{
            title: "Clubs",
            activity:activity,
            club:club,
            notification:notification
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
        var notificationId  = req.session.user;
        var notification = await Notification.find({to:notificationId}).populate({
            path:"from",
            populate:{
                path:"club",
                model:"Club"
            }
        }).sort("status");
        res.render("manager/club-single", {
            activity:activity,
            title: club.name,
            club:club,
            notification:notification
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
        var notificationId  = req.session.user;
        var notification = await Notification.find({to:notificationId}).populate({
            path:"from",
            populate:{
                path:"club",
                model:"Club"
            }
        }).sort("status");
        res.render("manager/activities", {
            title: "Activities",
            club:club,
            activity:activity,
            notification:notification
    
        });
    }
    catch{
        console.log("Error!")
    }
},
exports.postActivities = async (req,res)=>{
    try{
        var query = req.body.query;
        var club = await Club.find();
        var activity = await Activity.find({$or:[
            {name:new RegExp(query)},
            {date:new RegExp(query)},
            {place:new RegExp(query)},
            {category:new RegExp(query)},
            {about:new RegExp(query)}
        ]});
        var notificationId  = req.session.user;
        var notification = await Notification.find({to:notificationId}).populate({
            path:"from",
            populate:{
                path:"club",
                model:"Club"
            }
        }).sort("status");
        res.render("manager/activities", {
            title: "Activities",
            club:club,
            activity:activity,
            notification:notification
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
        var notificationId  = req.session.user;
        var notification = await Notification.find({to:notificationId}).populate({
            path:"from",
            populate:{
                path:"club",
                model:"Club"
            }
        }).sort("status");
        res.render("manager/activity-single", {
            title: activity.name,
            club:club,
            activity:activity,
            notification:notification
        });
    }
    catch{
        console.log("Error!")
    }
},
exports.postActivitySingle = async (req,res)=>{
    try{
        var id = req.params.id;
        var button = req.body.button;
        if(button=="delete"){
            await Activity.deleteOne({_id:id});
        }
        else{
            var name = req.body.name;
            var image = req.body.image;
            var date = req.body.date;
            var time = req.body.time;
            var place = req.body.place;
            var about = req.body.about;
            if(name!=""){await Activity.updateOne({_id:id},{name:name});}
            if(image!=""){await Activity.updateOne({_id:id},{image:image});}
            if(date!=""){await Activity.updateOne({_id:id},{date:date});}
            if(time!=""){await Activity.updateOne({_id:id},{time:time});}
            if(place!=""){await Activity.updateOne({_id:id},{place:place});}
            if(about!=""){await Activity.updateOne({_id:id},{about:about});}
        }
            res.redirect("/manager/activities");
    }
    catch{
        console.log("Error!")
    }
},
exports.getMyClub = async (req,res)=>{
    try{
        var id = req.session.club;
        var club = await Club.findOne({_id:id});
        var notificationId  = req.session.user;
        var notification = await Notification.find({to:notificationId}).populate({
            path:"from",
            populate:{
                path:"club",
                model:"Club"
            }
        }).sort("status");
        res.render("manager/myclub", {
            title: club.name,
            club:club,
            notification:notification
        });
    }
    catch{
        console.log("Error!")
    }
},
exports.postMyClub = async (req,res)=>{
    try{
        var id = req.session.user;
        var club = await Club.findOne({_id:req.session.club});
        var admin = await User.findOne({auth:"Admin"});
        var button = req.body.button;
        if(button=="delete"){
            await Notification.create({date:Date,time:Time,from:id,to:admin,title:club.name,request:"Delete Club",detail:"We want to delete our club"});
            res.redirect("/manager/myclub");
        }
        else{
            var name = req.body.name;
            var president = req.body.president;
            var vicePresident = req.body.vicePresident;
            var email = req.body.email;
            var category = req.body.category;
            var about = req.body.about;
            if(name!=""){
                await Notification.create({date:Date,time:Time,from:id,to:admin,title:club.name,
                    request:"Edit Club Name",detail:"We want to change name to " + name,target:name});
            }
            if(president!=""){
                await Notification.create({date:Date,time:Time,from:id,to:admin,title:club.name,
                    request:"Edit Club President",detail:"We want to change president to " + president,target:president});
            }
            if(vicePresident!=""){
                await Notification.create({date:Date,time:Time,from:id,to:admin,title:club.name,
                    request:"Edit Club Vice President",detail:"We want to change vice president to " + vicePresident,target:vicePresident});
            }
            if(email!=""){
                await Notification.create({date:Date,time:Time,from:id,to:admin,title:club.name,
                    request:"Edit Club Email",detail:"We want to change email to " + email,target:email});
            }
            if(category!=""){
                await Notification.create({date:Date,time:Time,from:id,to:admin,title:club.name,
                    request:"Edit Club Category",detail:"We want to change category to " + category,target:category});
            }
            if(about!=""){
                await Notification.create({date:Date,time:Time,from:id,to:admin,title:club.name,
                    request:"Edit Club About",detail:"We want to change about to " + about,target:about});
            }
            res.redirect("/manager/myclub");
        }  
    }
    catch{
        console.log("Error!")
    }
},
exports.getMyActivities = async (req,res)=>{
    try{
        var id = req.session.club;
        var activity = await Activity.find({club:id});
        var notificationId  = req.session.user;
        var notification = await Notification.find({to:notificationId}).populate({
            path:"from",
            populate:{
                path:"club",
                model:"Club"
            }
        }).sort("status");
        res.render("manager/myactivities", {
            title: "Activities",
            activity:activity,
            notification:notification
    
        });
    }
    catch{
        console.log("Error!")
    }
},
exports.postMyActivities = async (req,res)=>{
    try{
        var query = req.body.query;
        if(query){
            var club = await Club.find().where("name").ne("Admin");
            var myClub = await Club.findOne({_id:req.session.club});
            var activity = await Activity.find({$or:[
                {$and:[{name:new RegExp(query)},{club:myClub}]},
                {$and:[{date:new RegExp(query)},{club:myClub}]},
                {$and:[{place:new RegExp(query)},{club:myClub}]},
                {$and:[{category:new RegExp(query)},{club:myClub}]},
                {$and:[{about:new RegExp(query)},{club:myClub}]}
            ]});
            var id= req.session.user;
            var notification = await Notification.find({to:id}).populate({
                path:"from",
                populate:{
                    path:"club",
                    model:"Club"
                }
            }).limit(3).sort("date");
            res.render("manager/myactivities", {
                title: "Activities",
                club:club,
                activity:activity,
                notification:notification
            }); 
        }
        else{
            var id = req.session.user;
            var club= req.session.club;
            var activity = await Activity.findOne({club:club});
            var admin = await User.findOne({auth:"Admin"});

            var name=req.body.name;
            var img = req.files.image;
            var image=img.name;
            var date= req.body.date + " - " + req.body.time;
            var place=req.body.place;
            var about=req.body.about;
            img.mv("assets/img/club/" + img.name);
            await Notification.create({date:Date,time:Time,from:id,to:admin,title:name,
            request:"Create an Activity",detail:date + " -- " + place,target:image + " -- " + about});
            res.redirect("/manager/myactivities");
        }
    }
    catch{
        console.log("Error!")
    }
},
exports.getMyActivitySingle = async (req,res)=>{
    try{
        var id = req.params.id;
        var activity = await Activity.findOne({_id:id});
        var notificationId  = req.session.user;
        var notification = await Notification.find({to:notificationId}).populate({
            path:"from",
            populate:{
                path:"club",
                model:"Club"
            }
        }).sort("status");
        res.render("manager/myactivities-single", {
            title: activity.name,
            activity:activity,
            notification:notification
        });
    }
    catch{
        console.log("Error!")
    }
},
exports.postMyActivitySingle = async (req,res)=>{
    try{
        var id = req.session.user;
        var activity = await Activity.findOne({_id:req.params.id});
        var admin = await User.findOne({auth:"Admin"});
        var button = req.body.button;
        if(button=="delete"){
            await Notification.create({date:Date,time:Time,from:id,to:admin,title:activity.name,
                request:"Delete Activity",detail:"We want to delete our activity"});
        }
        else{
            var name = req.body.name;
            var date = req.body.date + " - " + req.body.time;
            var place = req.body.place;
            var about = req.body.about;
            if(name!=""){
                await Notification.create({date:Date,time:Time,from:id,to:admin,title:activity.name,
                    request:"Edit Activity Name",detail:"We want to change name to " + name});
            }
            if(date!=" - "){
                await Notification.create({date:Date,time:Time,from:id,to:admin,title:activity.name,
                    request:"Edit Activity Date",detail:"We want to change date to " + date});
            }
            if(place!=""){
                await Notification.create({date:Date,time:Time,from:id,to:admin,title:activity.name,
                    request:"Edit Activity Place",detail:"We want to change place to " + place});
            }
            if(about!=""){
                await Notification.create({date:Date,time:Time,from:id,to:admin,title:activity.name,
                    request:"Edit Activity About",detail:"We want to change about to " + about});
            }
        }
            res.redirect("/manager/myactivities");
    }
    catch{
        console.log("Error!")
    }
},
exports.getNotifications = async (req,res)=>{
    try{
        var id  = req.session.user;
        var notification = await Notification.find({to:id}).populate({
            path:"from",
            populate:{
                path:"club",
                model:"Club"
            }
        }).sort("status");
        res.render("manager/notifications", {
            title: "Notifications",
            notification:notification
        });
    }
    catch{
        console.log("Error!")
    }
}