const httputil = require('../utils/HttpUtil');
const sessCheck = require('../middlewares/SessionCkeck');
const UserController=require('../controllers/UserControlers')


function userRoutes(prefixLink, app) {

    /** 
     * @param {string} - request details
     * @param { int }  - user_id
     * @returns {object} - saved request details http response
     */
    app.post(prefixLink +'/dashboard/submit', (req, res) => {
        try {
            let obj = req.body;
            UserController.save_req(obj,(err,data)=>{
                if(!err){
                    res.json(httputil.getSuccess(data))
                }
                else{
                    res.json(httputil.getError(data))
                }
            })

        } catch (error) {
            console.log(error)
            res.json(httputil.getError(data));
        }
    });

     /** 
     * @param { int }  - user_id
     * @returns { object } - all request details http response
     */
    app.get(prefixLink +'/:uid/dashboard/all_request', (req, res) => {
        try {
            let _uid=req.param('uid')
            console.log(_uid)
            UserController.all_request(_uid,(err,data)=>{
                if(!err){
                    if(!data===0){
                        res.json(httputil.getSuccess(data))
                    }else{
                        res.json(httputil.getSuccess(data))
                    }
                }else{
                    res.json(httputil.getError(data))
                }
            })     
        } catch (error) {
            res.json(httputil.getError(error));
        }
    });

      /** 
     * @param { int }  - user_id
     * @returns { object } - logout http response
     */
    app.get(prefixLink +'/:uid/dashboard/logout', (req, res) => {
        try {
            res.clearCookies("user_name").json(httputil.getSuccess(data='logged out'))
        } catch (error) {
            res.json(httputil.getError(data='error occured while logging out'));
        }
    });

}

module.exports=userRoutes;