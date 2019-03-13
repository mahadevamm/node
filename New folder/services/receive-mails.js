var MailListener = require("mail-listener2");
var stream=require('buffer');



module.exports =async () => {

    var mailListener = new MailListener({

        username: "pavantechnologies711@gmail.com",
        password: "abhiramvinay",
        host: "imap.gmail.com",
        port: 993, // imap port
        tls: true,
        fetchUnreadOnStart: true,
        tlsOptions: {
            rejectUnauthorized: false
        },
        mailbox: "INBOX",
        searchFilter: "UNSEEN",
        markSeen: false,
        attachment:true
    });
    
    mailListener.on("server:connected", function () {
        console.log("imapConnected");
        mailListener.on("mail", function (mail, seqno, attributes) {
            var mailuid = attributes.uid;
            //console.log(mail.attachments[0])
            //var x=mail.attachments[0].content.toString()
            //console.log(x)
            

            var mail_data = {
                subject: mail.subject,
                from: mail.from[0].address,
                text: mail.text,
                seqno: seqno,
                uid: attributes.uid,
                attributes: attributes.date,
            }
            console.log(mail_data)
           /*  mailListener.imap.addFlags(mailuid, '\\Seen', function (err) {
                if (err) {
                    console.log('error marking message read/SEEN');
                    return;
                }
    
            }); */
            mailListener.on("attachment", function(attachment){
                console.log("from attach");
                console.log(attachment.path);
               });
    
    
        });
        
    });
    
    mailListener.on("server:disconnected", function () {
        console.log("imapDisconnected");
    });
    
    
    mailListener.start(); // start listening
    
   /*  setTimeout(function () {
        mailListener.stop(); // start listening
    }, 60 * 1000); */

}
