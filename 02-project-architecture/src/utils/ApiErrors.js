import { error } from "node:console";

class ApiErrors extends Error {
    constructor (
        message = "Something went wrong",
        errorCode,
        errors=[],
        statck,
        success = false
    ){
        this.message = message,
        this.errorCode = errorCode,
        this.errors = errors,
        this.success = success
        
        if(statck){
            this.statck = statck
        }else{
            error.captureStatckTrack(this, this.constructor)
        }  
    }
}

export { ApiErrors }