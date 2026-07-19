import { v2 as cloudinary } from "cloudinary";
import fs from "fs"; //file system module

//cloudinary config copy from cloudinary

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SCRET // Click 'View API Keys' above to copy your API secret
});

const uploadOnCloudinary = async(localFilePath) => {
    try{
        if(!localFilePath) return null
        const response = await cloudinary.uploader.upload(
            localFilePath, {
                resource_type: "auto"
            }
        )
        console.log(response);
        console.log("FILE UPLOADED TO CLOUDINARY" , response.url);
        return response;
    }catch(error){
        fs.unlinkSync(localFilePath); //Remove locally saved temporary file
        return null
    }
}