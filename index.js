//create app

const express=require("express");
const app=express();
//port find

require("dotenv").config();
const PORT=process.env.PORT;

app.use(express.json());
const fileUpload=require("express-fileupload");
app.use(fileUpload());


//connect db
const db=require("./config/database")
db.connect()
//cloud connect

const cloudinary=require("./config/cloudinary");
cloudinary.cloudinaryConnect();
//api route 
const Upload=require("./routes/FileUpload");
app.use('api/v1/upload',Upload);


app.listen(PORT,()=>{
    console.log(`App is running succesfully at ${PORT}`)
})
