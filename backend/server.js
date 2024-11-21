import express from "express";
import dotenv, { configDotenv } from 'dotenv'
import cors from 'cors';
import connectDB from "./src/DB/connectDB.js";
import UserRoute from "./src/Routes/userRoute.Routes.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

connectDB();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded());



// app.use('/',(req,res)=>{
//     res.send("You are currently in the homepage of the backend site...");

// })


app.use('/api/v1/user',UserRoute);

app.listen(port,()=>{
    console.log(`Backend app running on port : http://localhost:${port}`);
})



