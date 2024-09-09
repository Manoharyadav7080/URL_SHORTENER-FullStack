const { timeStamp } = require('console');
const mongoose = require('mongoose');
const { type } = require('os');
// const datetime = require('datetime');

const urlSchema = new mongoose.Schema (
    {
        shortId:{
            type:String,
            require:true,
            unique:true
        },
        redirectURL : {
            type : String ,
            require:true
        },
        visitHistory : [
            {
                timeStamp:{
                    type:String,
                }
            }

            // {timeStamp : {type:Number}}
        ] 
    },    
    {timeStamp:true} // by this ki pata lage ki entry kis time pe huaa hai;

)  


const URL = mongoose.model("url" , urlSchema );
module.exports = URL;
