//We already have a asyncHandler helper file created - we import that here and it handles requests through promises

//This file is created under controllers folder!

import asyncHandler from "./asyncHandler";

const registerUser = asyncHandler(async(req, res) => {
    res.status(200).json(
        {
            message: "OK"
        }
    )
})

export default registerUser;