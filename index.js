const express=require('express');
const app=express();
app.use(express.json());
const registerRoute=require('./routes/register');
const listRoute=require('./routes/list');
const messageRoute=require('./routes/message');
const mysql=require('mysql');
const cors=require('cors');
app.use(cors());



app.use('/register',registerRoute);
app.use('/list',listRoute);
app.use('/message',messageRoute);


const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})