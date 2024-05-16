module.exports = async (req,res,next)=>{
    if(!req.session.name){
        res.redirect("/");
    }
    if(req.session.auth!="Student"){
        res.redirect("/restricted");
    }
    next();
    };
    