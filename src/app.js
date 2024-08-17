import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app=express();
//setting origin of cors 
app.use(cors(
    {
        origin: process.env.CORS_ORIGIN || "*",
        credentials: true
    }
))

app.use(express.json({limit: "100kb"})); //tells express to accept json and set limit

app.use(express.urlencoded({extended: true,limit: "100kb"})) //tells express to accept params

app.use(express.static("public")) //if images or other componenets are stored in public folder we can use those 

//cookie parser is need because of tracking actions through browser
//suppose the user logs in, they don't have to re login for second time
app.use(cookieParser())

export default app;