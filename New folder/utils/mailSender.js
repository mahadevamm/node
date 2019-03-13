var nodemailer = require('nodemailer');
const APPCONFIG=require('../appConfig');


module.exports = (data,req) => {
    console.log(data)

    let email = data.email;
    let _ran=data.ran

    var maillink = req.protocol + '://' + req.hostname + ':3000/auth/'+email+'/' + _ran


    nodemailer.createTestAccount((err, account) => {


        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: APPCONFIG.email.user_name,
                pass: APPCONFIG.email.password
            }
        });


        // setup email data with unicode symbols
        let mailOptions = {
            from: 'omkar.vinay0404@gmail.com', // sender address
            to: email,
            subject: 'Sign Up Confirmation Link', // Subject line
            text: 'Click the link below to verify account', // plain text body
            html: '<b>' + 'Click the link below to verify account' + '<br>' + maillink 
        };


        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
        });
    });
}


