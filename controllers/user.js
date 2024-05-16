const User = require('../models/user');
const Club = require('../models/club');
const Activity = require('../models/activity');
const Notification = require('../models/notification');

exports.getLogin = async (req,res)=>{
    try{
        var message = " ";
        res.render("common/login", {
            title: "Login",
            message:message
        });
    }
    catch{
        console.log("Error!");
    }
},
exports.postLogin = async (req,res)=>{
    try{
        var email = req.body.email;
    var password = req.body.password;
    var user = await User.findOne({email:email});
    if(user){
        if(password==user.password){
                req.session.user=user._id;
                req.session.name=user.name;
                req.session.auth=user.auth;
                req.session.email=user.email;
                req.session.password=user.password;
                var auth = user.auth;
                if(auth=="Admin"){res.redirect("/admin/dashboard")}
                else if(auth=="Club Manager"){
                    req.session.club=user.club;
                    res.redirect("/manager/dashboard")
                }
                else{res.redirect("/student/homepage")}
        }
        else{
            res.render("common/login",{
                title:"Login",
                message:"Wrong Password!.."
            });
        }
    }
    else{
        res.render("common/login",{
            title:"Login",
            message:"Wrong Email!.."
        });
    }
    }
    catch{
        console.log("Error!");
    }
    
},
exports.getRegister = async (req,res)=>{
    try{
        res.render("common/register", {
            title: "Register"
        });
    }
    catch{
        console.log("Error!");
    }
},
exports.postRegister = async (req,res)=>{
    try{
        var name = req.body.name;
        var id = req.body.id;
        var department = req.body.department;
        var grade = req.body.grade;
        var email = req.body.email;
        var password = req.body.password;
        await User.create({name:name,id:id,department:department,grade:grade,email:email,password:password,auth:"Student"});
        res.redirect("/");
    }
    catch{
        console.log("Error!");
    }
    
},
exports.getLogout = async (req,res)=>{
    try{
        await req.session.destroy();
        res.redirect("/");
    }
    catch{
        console.log("Error!")
    }
    
},
exports.getRestricted = async (req,res)=>{
    try{
        var auth = req.session.auth;
        if(auth=="Admin"){
            res.render("admin/restricted", {
                title: "Restricted Page"
            });
        }
        else if(auth=="Club Manager"){
            res.render("manager/restricted", {
                title: "Restricted Page"
            });
        }
        else{
            res.render("student/restricted", {
                title: "Restricted Page"
            });
        }
        
    }
    catch{
        console.log("Error!")
    }
}