// require('dontenv').config(path:'./env');
import connectDB from "./db/index.js";
import dotenv from "dotenv";
dotenv.config({
    path: `./.env`
});


connectDB();



/*
const app=express();
;(async ()=>{
    try {
        await mongoos.connect(`${process.env.MONGODN_URI}/${DB_NAME}`);
        app.on("error",(error)=>{
            console.log("ERROR",error);
            throw error;
        })
        app.listen(process.env.PORT,()=>{
            console.log(`Server is running on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("ERROR",error);
        throw err;
    }
})()
*/ 
// this aproach pollutes the Index file so we just create a new file and import it here









// when connecting to db use try catch and async await 