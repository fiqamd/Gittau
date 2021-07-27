const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:true}))

mongoose.connect('mongodb+srv://taufiq-admin:ahmadifiq1122@cluster0.ikaf3.mongodb.net/Gittau', { useNewUrlParser: true ,  useUnifiedTopology: true })

//create data schema
const gittauSchema = {
    nama: String,
    email: String,
    jasa : String,
    message : String
}

// var GitTau = mongoose.model('GitTau', gittauSchema)

var Gittau = mongoose.model("Gittau", gittauSchema)

app.post("/", (req, res)=>{
    var info={
        nama: req.body.nama,
        email: req.body.email,
        jasa: req.body.jasa,
        message: req.body.message,
    };
    var me = new Gittau (info);
    me.save (function(err){
        if(err){
            console.log('error');
        } else{
            console.log('done');
        }
    });
    res.sendFile(__dirname + "/index.html");
});

app.use(express.static(__dirname))

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
})


app.listen(process.env.PORT || 666)
