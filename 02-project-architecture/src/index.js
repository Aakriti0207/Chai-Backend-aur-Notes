//require('dotenv').config({path: './env'})
import "dotenv/config";
import connectDB from "./db/index.js";
import { app } from "./app.js";

connectDB() //returns a promise
.then (() => {
    app.on("error" , (error) => {
        console.log("ERROR:", error);
    })
    app.listen(process.env.PORT || 8000) (() => {
        console.log(`App is running on Port ${process.env.PORT}`)
    })
})
.catch((error) => {
    console.error("Failed to connect DB", error)
})

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
// import express from "express";

// const app = express();

// //iffy - immidiately executable function OR create a function and use that

// ;( async () => {
//     try{
//         mongoose.connect(`${process.env.MONGODB_URI}`/`${DB_NAME}`)
//         app.on("error", () => {
//             console.log("ERROR", error)
//             throw error
//         })
//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port ${process.env.PORT}`)
//         })
//     } catch(error){
//         console.error(error);
//         throw error
//     }
// })()