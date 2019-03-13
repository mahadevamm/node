const mysql=require('mysql')
const dbconfig=require('../../appConfig');
const util=require('util');



var pool=mysql.createPool(dbconfig.db);
pool.query=util.promisify(pool.query)

module.exports=pool