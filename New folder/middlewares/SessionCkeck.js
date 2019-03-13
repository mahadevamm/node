const check=(req,res,next)=>{
    if(req.session.user && req.cookies.user_name){
        return next()
    }else{
        res.status(400).json({data:'session_expired'})
    }
}

module.exports=check;