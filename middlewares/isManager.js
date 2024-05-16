module.exports = async (req,res,next)=>{
    if(!req.session.name){
        res.redirect("/");
    }
    if(req.session.auth!="Club Manager"){
        res.redirect("/restricted");
    }
    next();
    };
    