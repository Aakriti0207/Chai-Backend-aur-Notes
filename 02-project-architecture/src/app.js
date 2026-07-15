import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";


const app = express();

//configurating CORS -
app.use(cors());
//BUT with option
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

//config cookie 
app.use(cookieParser);

//config URL
app.use(express.urlencoded({
    extended: true,
    limit: 16
}))

//config files/photos
app.use(express.static("public"))

//config JSON
app.use(express.json({limit: 16}))


export { app }