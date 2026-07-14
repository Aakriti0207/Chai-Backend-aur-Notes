//require('dotenv').config({path: './env'})
import "dotenv/config";
import connectDB from "./db/index.js";
connectDB();

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