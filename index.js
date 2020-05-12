const express = require('express')
const app = express()
 const path = require("path");
const parser = require("body-parser");
const Request = require("request");
 app.use(parser.urlencoded({extended:true}));
app.get('/', function (req, res) {
  //res.send('Hello World')
  res.sendFile(__dirname+"/index.html");
  //res.sendFile(path.resolve("./index.html"))

});
app.post('/',function(req,res){

    var crypt = req.body.crypto;
    var  ccy= req.body.currency;
    var BaseUrl = "https://apiv2.bitcoinaverage.com/indices/global/ticker/";
    var FinalUrl = BaseUrl+crypt+ccy;
    
       // res.send("2000");
       Request(FinalUrl,function(error, response, body){
        // console.log(body);
         var data = JSON.parse(body);
         var price = data.last;
         res.send("<h2>The price of Bitcoin is "+ price +" USD </h2>");
    
    });
});   
    
app.get("/contact",function(req,res){
   res.sendFile(__dirname+"/contact.html");
});


app.listen(3000,function(){
    console.log("server is hosted at port 3000");
});


