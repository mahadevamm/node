const dbCon = require('../config/db/mysql-config');
const QUERY=require('../schema/UserSchema');
const dt = require('node-datetime');


exports.save_req = async (obj, callback) => {
    let now = dt.create()
    let _date = now.format('d-m-Y');
    let time = now.format('H-M-S-p')
    let req_data = {
        from: obj.email,
        req_details: obj.details,
        date: _date,
        time: time,
        user_id: obj.u_id,
        priority: obj.priority,
        department: obj.department,
        project: obj.project
    }
    try {
        await dbCon.query(QUERY.SAVE_REQUEST,req_data,function(err,data,fields){
            if(err){
                return callback(true,err)
            }else if(data){
                return callback(false,data)
            }else{
                return callback(true,data)
            }
        });
    } catch (error) {
        return callback(true,error)
    }
}


exports.all_request=async (obj,callback)=>{
    try {
        await dbCon.query("select * from tbl_request where user_id = ?",obj,function(err,data,fields){
            if(err){
                return callback(true,err)
            }else if(data.length===0){
                return callback(false,data='0')
            }else if(data.length>0){
                return callback(false,data)
            }
        })
    } catch (error) {
        return callback(true,error);
    }
}