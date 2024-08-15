import dotenv from "dotenv";

import mongoose from 'mongoose';
import { DB_NAME } from './constants.js';
import express from 'express';
import connectDB from './db/index.js';

dotenv.config({
    path: './env'
})

const app=express();
const PORT=process.env.PORT;


//connect DB proffessionaly by writing another function for connection
connectDB()
.then(() => {
    app.listen(PORT || 8000, () => {
        console.log(`app running on http://localhost:${PORT}/`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})



//DB connect directly
/*
;(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        //if db does not connect
        app.on("error",(error)=>{
            console.log("app not able to connect to database , ",error)
            throw error
        })

        //if db connects succesfully
        app.listen(PORT,()=>{
            console.log(`app running on http://localhost:${PORT}/`)
        })

    } catch (error) {
        console.log(error)
        throw error
    }
})()
*/