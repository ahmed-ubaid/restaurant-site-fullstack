const bodyParser=require("body-parser");
const cors = require('cors');
const dotenv=require("dotenv")
const path=require('path');

const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/crowdFund', { useNewUrlParser: true, useUnifiedTopology: true }).then(async()=>{
    console.log("connection to mongo successfull");
}).catch(async(err)=>{
    console.log("An error has occured while trying to connect to mongo");
    console.log(err);
})

const express= require('express');
const app=express();


dotenv.config();
app.use(cors({
    origin:["http://localhost:5173"],
    methods:["POST","GET"],
    credentials:true
}));
app.use(express.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.json())


app.listen(250,async(req,res)=>{
    //res.send("hello");
    console.log("Hello world");
})