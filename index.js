const express = require('express');
const path = require('path');
const { connectionToMongoDB } = require('./connection')
const  staticRouter= require("./routes/staticRouter")
const URL  = require("./models/url")
const urlRoute = require('./routes/url')
require('dotenv').config();


// dotenv 
const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;



const app = express();


connectionToMongoDB(DATABASE_URL).then(
    console.log("mongoDB connected")
);

// set the view engine to ejs
app.set('view engine', 'ejs');

app.set("views" ,path.resolve("./views"));



// for parseing data 
app.use(express.json());
app.use(express.urlencoded({extended :false}))



//Routes
app.use("/url" ,urlRoute);
app.use("/" , staticRouter)


// app.get("/lidjfl"  , async(req,res) => {
//     const allUrls= await URL.find({})
//      res.render("home" , {
//         urls : allUrls,
//      });
// })




app.get("/url/:shortId", async(req , res) => {
    const shortId = req.params.shortId;

    const timestamp1 = Date.now();
    const date_time = new Date(timestamp1)
    const formattedDate = date_time.toISOString().replace('T', ' ').slice(0, 19);

    const entry = await URL.findOneAndUpdate({
        shortId
    } , 
    {
        $push:{
        visitHistory :
        {
        //     timeStamp:Date.now(),
        timeStamp : formattedDate
        },
      },
     }
    );


    res.redirect(entry.redirectURL )
   
   
})


app.listen(PORT , (res , req) => {
    console.log(`server start at port ${PORT}`)  
})