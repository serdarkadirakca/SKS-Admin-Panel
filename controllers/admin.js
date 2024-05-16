const User = require('../models/user');
const Club = require('../models/club');
const Activity = require('../models/activity');
const Notification = require('../models/notification');
const Date = require("../middlewares/date");
const Time = require("../middlewares/time");

exports.getDashboard = async (req,res)=>{
    try{
        var club = await Club.find().where("name").ne("Admin");
        var clubList = await Club.find().limit(5).where("name").ne("Admin");
        var activity = await Activity.find();
        var user = await User.find({auth:"Student"});
        var id= req.session.user;
        var notification = await Notification.find({to:id}).populate({
            path:"from",
            populate:{
                path:"club",
                model:"Club"
            }
        }).limit(3).sort("date");
        var notificationList = await Notification.find({to:id}).populate({
            path:"from",
            populate:{
                path:"club",
                model:"Club"
            }
        }).limit(10).sort({status:-1});
        res.render("admin/dashboard", {
            title: "Dashboard",
            countClub:club.length,
            countActivity:activity.length,
            countStudent:user.length,
            clubList:clubList,
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
        var id= req.session.user;
        var notification = await Notification.find({to:id}).populate({
            path:"from",
            populate:{
                path:"club",
                model:"Club"
            }
        }).limit(3).sort("date");
        res.render("admin/clubs", {
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
        if(query){
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
        res.render("admin/clubs",{
            title: "Clubs",
            activity:activity,
            club:club,
            notification:notification
        });
        
        }
        else{
            var name=req.body.name;
            var img = req.files.image;
            var image=img.name;
            var about=req.body.about;
            var president=req.body.president;
            var vicePresident=req.body.vicePresident;
            var email=req.body.email;
            var category=req.body.category;
            img.mv("assets/img/club/" + img.name);
            await Club.create({name:name,image:image,about:about,president:president,vicePresident:vicePresident,email:email,category:category});
            res.redirect("/admin/clubs")
                
        }
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
        var id= req.session.user;
        var notification = await Notification.find({to:id}).populate({
            path:"from",
            populate:{
                path:"club",
                model:"Club"
            }
        }).limit(3).sort("date");
        res.render("admin/club-single", {
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
exports.postClubSingle = async (req,res)=>{
    try{
        var button = req.body.button;
        if(button=="delete"){
            var id = req.params.id;
            await Club.deleteOne({_id:id});
            res.redirect("/admin/clubs");
        }
        else{
            var id = req.params.id;
            var name = req.body.name;
            var president = req.body.president;
            var vicePresident = req.body.vicePresident;
            var email = req.body.email;
            var category = req.body.category;
            var about = req.body.about;
            if(name!=""){await Club.updateOne({_id:id},{name:name})}
            if(president!=""){await Club.updateOne({_id:id},{president:president})}
            if(vicePresident!=""){await Club.updateOne({_id:id},{vicePresident:vicePresident})}
            if(email!=""){await Club.updateOne({_id:id},{email:email})}
            if(category!=""){await Club.updateOne({_id:id},{category:category})}
            if(about!=""){await Club.updateOne({_id:id},{about:about})}
        }
            res.redirect("/admin/clubs");
        
        
    }
    catch{
        console.log("Error!")
    }
},
exports.getActivities = async (req,res)=>{
    try{
        var club = await Club.find().where("name").ne("Admin");
        var activity = await Activity.find().sort({date:-1});
        var id= req.session.user;
        var notification = await Notification.find({to:id}).populate({
            path:"from",
            populate:{
                path:"club",
                model:"Club"
            }
        }).limit(3).sort("date");
        res.render("admin/activities", {
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
        if(query){
            var club = await Club.find().where("name").ne("Admin");
            var activity = await Activity.find({$or:[
                {name:new RegExp(query)},
                {date:new RegExp(query)},
                {place:new RegExp(query)},
                {category:new RegExp(query)},
                {about:new RegExp(query)}
            ]});
            var id = req.session.user;
            var notification = await Notification.find({to:id}).populate({
                path:"from",
                populate:{
                    path:"club",
                    model:"Club"
                }
            }).limit(3).sort("date");
            res.render("admin/activities", {
                title: "Activities",
                club:club,
                activity:activity,
                notification:notification
            }); 
        }
        else{
            var club = await Club.findOne({_id:req.body.club});
            var name=req.body.name;
            var img = req.files.image;
            var image=img.name;
            var date= req.body.date + " - " + req.body.time;
            var place=req.body.place;
            var about=req.body.about;
            img.mv("assets/img/activity/" + img.name);
            await Activity.create({name:name,image:image,date:date,place:place,club:club,about:about,club:club._id,category:club.category});
            res.redirect("/admin/activities");
        }
    }
    catch{
        console.log("Error!")
    }
},
exports.getActivitySingle = async (req,res)=>{
    try{
        var id = req.params.id;
        var activity = await Activity.findOne({_id:id});
        var club = await Club.find().where("name").ne("Admin");
        var id= req.session.user;
        var notification = await Notification.find({to:id}).populate({
            path:"from",
            populate:{
                path:"club",
                model:"Club"
            }
        }).limit(3).sort("date");
        res.render("admin/activity-single", {
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
            var date = req.body.date;
            var time = req.body.time;
            var place = req.body.place;
            var club = await Club.findOne({_id:req.body.club});
            var about = req.body.about;
            
            if(name!=""){await Activity.updateOne({_id:id},{name:name});}
            if(date!=""){await Activity.updateOne({_id:id},{date:date});}
            if(time!=""){await Activity.updateOne({_id:id},{time:time});}
            if(place!=""){await Activity.updateOne({_id:id},{place:place});}
            if(club!=""){
                await Activity.updateOne({_id:id},{club:club._id});
                await Activity.updateOne({_id:id},{category:club.category})
            }
            if(about!=""){await Activity.updateOne({_id:id},{about:about});}
        }
            res.redirect("/admin/activities");
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
        }).sort({status:-1}).sort({date:-1}).limit(3);
        var notificationList = await Notification.find({to:id}).populate({
            path:"from",
            populate:{
                path:"club",
                model:"Club"
            }
        }).sort({status:-1}).sort({date:-1}).sort({time:-1});
        res.render("admin/notifications", {
            title: "Notifications",
            notification:notification,
            notificationList:notificationList
        });
    }
    catch{
        console.log("Error!")
    }
},
exports.postNotifications = async (req,res)=>{
    try{
        var id = req.session.user;
        var notification = await Notification.find().populate("from");
        var approve = req.body.approve;
        var reject = req.body.reject;
        var notificationId;
        for(i=0;i<notification.length;i++){
            if(approve==notification[i]._id){
                notificationId = await Notification.findOne({from:notification[i].from}).populate({
                    path:"from",
                    populate:{
                        path:"club",
                        model:"Club"
                    }
                });
                await Notification.updateOne({_id:notification[i]._id},{status:"Approved"});
                await Notification.create({date:notification[i].date,time:notification[i].time,from:id,to:notification[i].from,
                title:notification[i].title,request:"Approved your request",detail:notification[i].detail,status:"Approved",target:"-"});
                if(notification[i].request=="Delete Club"){await Club.deleteOne({name:notification[i].title})}
                else if(notification[i].request=="Edit Club Name"){await Club.updateOne({name:notification[i].title},{name:notification[i].target})}
                else if(notification[i].request=="Edit Club President"){await Club.updateOne({name:notification[i].title},{president:notification[i].target})}
                else if(notification[i].request=="Edit Club Vice President"){await Club.updateOne({name:notification[i].title},{vicePresident:notification[i].target})}
                else if(notification[i].request=="Edit Club Email"){await Club.updateOne({name:notification[i].title},{email:notification[i].target})}
                else if(notification[i].request=="Edit Club Category"){await Club.updateOne({name:notification[i].title},{category:notification[i].target})}
                else if(notification[i].request=="Edit Club About"){await Club.updateOne({name:notification[i].title},{about:notification[i].target})}
                else if(notification[i].request=="Delete Activity"){await Activity.deleteOne({name:notification[i].title})}
                else if(notification[i].request=="Edit Activity Name"){await Activity.updateOne({name:notification[i].title},{name:notification[i].target})}
                else if(notification[i].request=="Edit Activity Date"){await Activity.updateOne({name:notification[i].title},{date:notification[i].target})}
                else if(notification[i].request=="Edit Activity Place"){await Activity.updateOne({name:notification[i].title},{place:notification[i].target})}
                else if(notification[i].request=="Edit Activity About"){await Activity.updateOne({name:notification[i].title},{about:notification[i].target})}
                else if(notification[i].request=="Create an Activity"){
                    await Activity.create({name:notification[i].title,image:notification[i].target.split(" -- ")[0],
                    date:notification[i].detail.split(" -- ")[0],place:notification[i].detail.split(" -- ")[1],
                    about:notification[i].target.split(" -- ")[1],club:notificationId.from.club,category:notificationId.from.club.category});
                }
            }
            if(reject==notification[i]._id){
                await Notification.updateOne({_id:notification[i]._id},{status:"Rejected"});
                await Notification.create({date:notification[i].date,time:notification[i].time,from:id,to:notification[i].from._id,
                    title:notification[i].title,request:"Rejected your request",detail:notification[i].detail,status:"Rejected"});
            }
        }
            res.redirect("/admin/notifications");
    }
    catch{
        console.log("Error!")
    }
}