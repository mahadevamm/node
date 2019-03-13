const httputil = require('../utils/HttpUtil');
const authOperation = require('../controllers/authenticationOperations');
const sessCheck = require('../middlewares/SessionCkeck');
const MAIL=require('../utils/mailSender')



function SignupRoute(prefixLink, app) {

    /** 
     * @param {string} - email-id
     * @returns {object} - http response
     */
    app.post(prefixLink + '/generate_password', (req, res) => {
        try {
            let obj = req.body;
            authOperation.generate_password(obj, (err, data) => {
                if (!err) {
                    let _ran=data.ran
                    let mail_data={
                        email:obj.email,
                        ran:_ran
                    }
                    MAIL(mail_data,req)
                    res.json(httputil.getSuccess(data))
                } else {
                    res.json( httputil.getError(data))
                }
            });
        } catch (error) {
            res.json(httputil.getError(data));
        }
    });

    app.get(prefixLink + '/verify_link/:email', function (req, res) {
        try {
            let obj = req;
            authOperation.verify_link(obj, (err, data) => {
                if (!err) {
                    //redirect to password generation page
                    res.json(httputil.getSuccess(data))
                } else {
                      res.json(httputil.getError(data))
                }
            })
        } catch (error) {
            console.log(error)
            res.json(httputil.getError(error))
        }
    });

    app.post(prefixLink + '/save_password', function (req, res) {
        let obj = req.body;
        authOperation.setPassword(obj, (err, data) => {
            if (!err) {
                //redirect to dashboard
                return res.json(httputil.getSuccess(data))
            } else {
                return res.json(httputil.getError(data))
            }
        });

    });

    app.post(prefixLink + '/login', function (req, res) {
        try {
            let obj = req.body;
            authOperation.Login(obj, (err, data) => {
                if (!err) {
                    //set the session
                    req.session.user = data[0].user_name;
                    res.json(httputil.getSuccess(data));
                } else if(err){
                    return res.json(httputil.getError(data))
                }
            });
        } catch (error) {
            return httputil.getError(error)
        }
    });
}

process.on("unhandledRejection",function(reason,promise){
    console.log(reason)
})

module.exports = SignupRoute;