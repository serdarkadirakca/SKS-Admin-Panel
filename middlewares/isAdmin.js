module.exports = async (req,res,next)=>{
    if(req.session.auth!="Admin"){
        res.redirect("/restricted");
    }
    next();
    };
    