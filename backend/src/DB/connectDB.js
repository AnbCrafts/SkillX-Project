import mongoose from "mongoose";
import { DB_NAME } from "../../constants.js";


const connectDB = async ()=>{
    try {
        const DBConnectionInstance = await mongoose.connect(`${process.env.MONGO_DB_URI}/${DB_NAME}`)
        console.log(`DB Connection Successful, DB HOST : ${DBConnectionInstance.connection.host}`)
    } catch (error) {
        console.log('\t\t\n go to ConnectDB.js \t\t\n');
        console.log(`error while connecting DB : ${error}`);
        
    }
}

export default connectDB;