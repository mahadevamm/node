const dev = {
    "env": "dev",
    "port": 8080,
    "db": {
        multipleStatements : true,
        connectionLimit: 10,
        host: 'localhost',
        port: '3306',
        database: 'helpdesk',
        user: 'root',
        password: 'root'
    },
    "ftpConfig": {
        credential: {
            host: '192.168.6.90',
            port: 21,
            user: 'ftpuser',
            password: 'Pass123'
        },
        path: '/input/',
        localProcessingFolder: "../temp/ftpprocess/",
        ftpProcessedFolder: "/processed/",
        ftpErrorFolder:"/error/",
        ftpSchedulerTime: 1000 *60
    },
    s3Config: {
        path: "input/",
        Bucket: "40a-mercurien-ds",
        localProcessingFolder: "../temp/s3process/",
        s3ProcessedFolder: "/processed/",
        s3ErrorFolder:"/error/",
        s3SchedulerTime: 1000 *60
    },
    email:{
        user_name:"omkar.vinay0404@gmail.com",
        password:"9964700208"
    }
}

const prod = {
    "env": "prod",
    "queue": "DevQ",
    "sqspollingtime": 5000,
    "sns": "13.126.81.77:5000",
    "port": 8080,
    "db": {
        multipleStatements : true,
        connectionLimit: 10,
        host: 'wcmdemo.cqfvr00sifcl.ap-south-1.rds.amazonaws.com',
        port: '3306',
        database: '40Analytics',
        user: 'root',
        password: 'wcmdemoroot'
    },
    "ftpConfig": {
        credential: {
            host: '192.168.6.90',
            port: 21,
            user: 'ftpuser',
            password: 'Pass123'
        },
        path: '/input/',
        localProcessingFolder: "../temp/ftpprocess/",
        ftpProcessedFolder: "/processed/",
        ftpErrorFolder:"/error/",
        ftpSchedulerTime: 1000 *60
    },
    s3Config: {
        path: "input/",
        Bucket: "40a-mercurien-ds",
        localProcessingFolder: "../temp/s3process/",
        s3ProcessedFolder: "processed/",
        s3ErrorFolder:"error/",
        s3SchedulerTime: 1000 *10
    }
}
module.exports = dev;

/**
 * NOTE: Properties informaion.
 * ==========================================
 *
 * sns: now we are not using SNS service.
 * sqspollingtime: time in milliseconds.
 * queue: should create before running the application.
 * db: It is configured in /config/db/config-(dev/prod).json files.
 *
 *
 * INFO: For (db,sqs,logs) configuration verify folders in confg folder.
 */