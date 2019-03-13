const express=require('express');
const app=express();
const bodyparser=require('body-parser')
const cookie=require('cookie-parser');
const session=require('express-session');
const cors=require('cors');




var adminRoutes=require('./routes/adminRoutes');
var AuthenticationRoutes=require('./routes/AuthenticationRoutes');
const UserRoutes=require('./routes/UserRoutes');



app.use(cors());
app.use(cookie());

app.use(session({
  key:"user_name",
  secret:'dont_ask_anything_go',
  resave:false,
  saveUninitialized:false,
  cookie:{
    expires:600000
  }
}))
app.use(bodyparser.json())

app.get('/a',function(req,res){
  res.send("g")
})


adminRoutes('/admin',app)
AuthenticationRoutes('/auth',app)
UserRoutes('/user',app)





app.listen(3001,function(){
  console.log("started on 3000")
})