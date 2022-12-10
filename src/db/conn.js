const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://localhost:27017/runners").then(()=>{
    console.log("succesfull");
}).catch((e)=>{
    console.log("Failed");
})