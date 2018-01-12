const express=require('express');
const path=require('path');
var app=express();
const publicPath=path.join(__dirname,'../app');
app.use(express.static(publicPath));
app.listen(3000,()=>{
  console.log(`Server is up for 3000`);
});
