import { promiseHooks } from "node:v8";

const asyncHandler = (func) => {async(req,res,next) => {
    try{
        await (func(req,res,next));
    }catch(error){
        res.status(error.code || 500).json({
            success: false,
            message = error.message
        })
    }
}}

//Promises

const asyncHandlerPromises = (reqHandler) => {
    (req,res,next) => {
        promise.resolve(reqHandler(req,res,next))
        .catch((error) => next(error))
    }
}