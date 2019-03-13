let dbcon=require('../config/db/mysql-config');
let QUERY=require('../schema/admin_schema');


this.adduser =async (obj,callback)=> {
    
    try {
        await dbcon.query(QUERY.SAVE_USER,obj,function(err,data,fields){
            if(err){
                return callback(true,err)
            }else if(data){
                return callback(false,data)
            }else{
                return callback(true,err)
            }
        })
        }
    catch (error) {
        console.log(error)
        callback(true,error)
    }
}

this.b=async (callback)=> {
    try {
        var data=await dbcon.query("select * from users");
        if(data){
            callback(data)
        }
    } catch (error) {
        callback(null,error)
    }
}



module.exports=this;
