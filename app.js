const express = require("express");
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");
const app = express();
app.use(express.static("PUblic"));
app.use(bodyParser,urlencoded({extended:true}));
app.use("/",function(req,res){
    res.sendFile(__dirname + "/signup.html");
});
app.post("/",function(req,res){
    var firstname = req.body.fname;
    var lastname = req.body.lname;
    var email = req.body.email;
    console.log(firstname,lastname,email);


});
app.listen(4000,function(){
    console.log("server is running on port 4000");
});
