const express= require('express');
const fs=require('fs');
const PORT = process.env.PORT||5000;
const path= require('path');

const INDEX="/index.html";
const app= express();
app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
res.sendFile(path.join(__dirname,'public',INDEX));
});

app.listen(PORT,()=>{console.log('listening');});
