import mongoose , {Schema} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { JsonWebTokenError } from "jsonwebtoken";

const userSchema = new Schema(
    {
        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ],
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true, //Indexing for quick search - ONLY for few values because it puts load on sytem
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        fullName: {
            type: String,
            required: true,
        },
        avatar: {
            type: String, //input from cloudinary
            required: true
        },
        coverImage: {
            type: String, //input from cloudinary
            required: true
        },
        password: {
            type: String,
            required: [true, "Password is required!"], //default fail message
        },
        refreshTokens: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

//to hash a password BEFORE user saving their profile and ONLY when user changes the password before saving the profile

userSchema.pre("Save", async function (next) {      //we don't use arrow functions because they do not allow "this" keyword
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10) //can take a lot of time so use await - 10 is the no of rounds
    next();
})

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function() {
    jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshToken = function(){
    jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFERESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFERESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User" , userSchema);