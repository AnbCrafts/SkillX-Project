import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        fullname:
        {
            type:String,
            required:true,
            

        },
        username:
        {
            type:String,
            required:true,
            unique:true

        },
        email:
        {
            type:String,
            required:true,
            unique:true

        },
        password:
        {
            type:String,
            required:true

        },
        phone:
        {
            type:String,
            required:true,
            unique:true

        },
    },
    {
        timestamps:true
    }
)

export const User = mongoose.model('User',UserSchema); 