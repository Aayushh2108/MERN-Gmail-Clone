const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const morgan = require("morgan");
const helmet = require("helmet");
const conn = require("./database/db.js");

const server = express();
server.use(bodyParser.urlencoded({extended:true}));
server.use(bodyParser.json({extended:true}));
server.use(helmet());
server.use(morgan("combined"));
dotenv.config();


const Port = 8000;
conn();

server.listen(Port,()=>{
    console.log(`server connected on localhost ${Port}`)
});