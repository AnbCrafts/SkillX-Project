import { User } from "../Models/user.Models.js";
import bcrypt from 'bcrypt';
import validator from 'validator';


const registerNewUser = async(req,res)=>{
    try {
        const {email,username,phone,password,fullname} = req.body;
        const existingAlready = await User.findOne({email});

        if(fullname ==="" || password ==="" || email==="" || username==="" || phone===""){
            return res.json({success:false,message:"All fields are required..."})
        }
        if(!validator.isEmail(email)){
            
            return res.json({success:false,message:"Enter a valid email..."})
        }
        if (/\s/.test(username)) {
            return res.json({ success: false, message: "Username should not contain spaces." });
        }

        if(existingAlready){
            return res.json({success:false,message:"This email is already in use try another email..."})
        }
        if(password.length<8){
            return  res.json({success:false,message:"Password must be at least 8 characters..."})
        }
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password,saltRounds);
        const newUser = await User.create(
            {
                username,
                fullname,
                password:hashedPassword,
                phone,
                email

            }
        )
        const finalCreatedUser = await User.findById(newUser._id);
        if(!finalCreatedUser){
            return res.json({success:false,message:"Error finding id for final user..."})
        }
        newUser.save();
        return res.json({success:true,message:"Register user successful..."})
        

    } catch (error) {
        console.log("Error Registering new user... ",error);
        // return res.json({success:false,message:"Unable to register User..."})
        
    }
}


const loginExistingUser = async(req,res)=>{
    try {
        const {username,password} = req.body;
        if(!username || !password){
            return res.json({success:false,message:"Both fields are required..."})
        }
        if (/\s/.test(username)) {
            return res.json({ success: false, message: "Username should not contain spaces." });
        }
        const isValidUser = await User.findOne({username});
        if(!isValidUser){
            return res.json({success:false,message:"Unable to find a user with this name..."})
        }
        const isValidPassword = await bcrypt.compare(password,isValidUser.password);
        if(!isValidPassword){
            return res.json({success:false,message:"Incorrect Password..."})
        }
        return res.json({success:true,message:"Login Successful!! Welcome back!!"});

        
    } catch (error) {
        console.log("Error occurred while logging in user... ",error);
        return res.json({success:false,message:"Error User login"})
        
    }
}




export {registerNewUser,loginExistingUser};