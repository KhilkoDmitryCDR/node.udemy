const express=require('express')
const app=express()
const morgan=require('morgan')
const port=process.env.PORT || 3000;
const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config()

// db
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log('DB connected'))


mongoose.connection.on('error',err=>{
    console.log(`DB connection error: ${error.message}`);
})



// Bring routes
const postRoutes=require('./routes/post');

const myOwnMiddleware=(req,res,next)=>{
    console.log('middleware applied');
    next();

}

// Middleware
app.use(morgan('dev'));
app.use(myOwnMiddleware);


app.use("/",postRoutes);

app.listen(port,()=>{console.log(`node js api listening op port: ${port}`);});