const dbCon=require('../config/db/mysql-config');
const QUERY=require('../schema/authentication_schema');
const MAIL=require('../utils/mailSender')
const ranString=require('unique-string')



this.generate_password=async function(obj,callback){
    try {
        let user_name=obj.email
        let data = await dbCon.query(QUERY.GENERATE_PASSWORD,user_name);
        console.log(data.length)
        if(data.length===0 || !data || data===null){
            callback(true,{data:"no such user present"})
        }else if(data.length===1){
            let str=ranString()
            await dbCon.query(QUERY.SET_RANDOM_LINK,[str,user_name],function(err,data,fields){
                if(err){
                    return callback(true,err)
                }else{
                    console.log("from data operation")
                    return callback(false,{
                        _data:data,
                        ran:str
                    })
                }
            })
            MAIL(data);
            return callback(false,data)
        }
    } catch (error) {
        console.log(error)
        return callback(true,error)
    }
}

this.verify_link=async function(obj,callback){
    try {
        let uname=obj.param('email');
        let data=await dbCon.query(QUERY.VERIFY_LINK,uname);
        if(data.length===0){
            callback(true,data);
        }else if(data.length===1){
           let uname=data[0].user_name;
           if(uname===data[0].user_name){
               return callback(null,data);
           }else{
               return callback(true,{data:'id missmatch'});
           }
        }else{
            return callback(true,null);
        }
    } catch (error) {
        return callback(true,null);
    }
}

this.setPassword=async (obj,callback)=>{
    try {
        let user_name=obj.email;
        let password=obj.password;
        let data=await dbCon.query(QUERY.SAVE_PASSWORD,[password,user_name]);
        if(data.affectedRows===1){
            return callback(false,data)
        }else{
            return callback(true,null)
        }
    } catch (error) {
        return callback(true,error)
    }
}

this.Login=async function (obj,callback){
    let user_name=obj.email;
    let password=obj.password;
    try {
        await dbCon.query(QUERY.LOGIN,user_name,function(err,data,fields){
            if(err || data.length===0){
                return callback(true,{data:"user name does not exist"})
            }else if(data && data.length===1){
                if(data[0].password===password){
                    return callback(false,data)
                }else{
                    return callback(true,data="wrong password")
                }
            }else{
                return callback(true,err)
            }
        });
       
    } catch (error) {
        return callback(true,error)
    }
}



module.exports=this;