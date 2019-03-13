const adminOperations=require('../controllers/adminOperations');
const httputil=require('../utils/HttpUtil');
const sesCheck=require('../middlewares/SessionCkeck');



/**
 * It will provide address related services.
 * 
 * @param {string} prefixPath - it is the root path of the module.
 * @param {object} app Express instance.
 */
function _Routes(prefixPath, app) {


    /**
     * It will return countries list.
     * 
     * @return {object} HttpUtil response 
     */
    app.post(prefixPath+'/adduser', function (req,res) {
        
            let obj=req.body.email;
            console.log(obj)
            adminOperations.adduser(obj,(err, data) => {
                console.log('from routes'+data)
                if (!err) {
                    res.json(httputil.getCreated(data));
                } else{
                    res.json(httputil.getError(data));
                } 
           });
    });

        /**
     * It will return countries list.
     * @param { param }  - user id and request id
     * @return {object}  - HttpUtil response with request details
     */
    app.get(prefixPath+'/admin/dashboard/:req_id', function (req,res) {
        try {
            
        } catch (error) {
            
        }
});

      /**
     * It will return countries list.
     * @param { param }  - from date and to date
     * @return {object}  - HttpUtil response and csv file
     */
    app.get(prefixPath+'/admin/generate_report/:from/:to', function (req,res) {
        try {
            
        } catch (error) {
            
        }
});

      /**
     * It will return countries list.
     * @param { param }  - req id
     * @return {object}  - HttpUtil response with set sla details
     */
    app.get(prefixPath+'/admin/:req_id/set_sla', function (req,res) {
        try {
            
        } catch (error) {
            
        }
});

  /**
     * It will return countries list.
     * @param { param }  - req id and
     * @return {object}  - HttpUtil response with send email
     */
    app.get(prefixPath+'/admin/:req_id/accept', function (req,res) {
        try {
            
        } catch (error) {
            
        }
});

  /**
     * It will return countries list.
     * @param { param }  - req id
     * @return {object}  - HttpUtil response with set sla details
     */
    app.get(prefixPath+'/admin/:req_id/assign_to', function (req,res) {
        try {
            
        } catch (error) {
            
        }
});

  /**
     * It will return countries list.
     * @param { param }  - req id and request id
     * @return {object}  - HttpUtil response with set sla details
     */
    app.get(prefixPath+'/admin/:req_id/closing_request', function (req,res) {
        try {
            
        } catch (error) {
            
        }
});


}



module.exports=_Routes;
