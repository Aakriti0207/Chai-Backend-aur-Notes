//current pre existing app.js

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

//Routes

//routes import
import routes from "routes.js";

app.use("/api/v1/users" , routes)

//this will send request to route and the url will be formed like-
// https://localhost:port/api/v1/users/registerUser

export { app }