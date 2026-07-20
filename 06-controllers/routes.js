//This file is built under routes folder - just structure for routes files

import router from "express";
import registerUser from "users.controllers.js";

const router = Router()

router.route("/register").post(registerUser);

export default router;

//we add these routes in app.js