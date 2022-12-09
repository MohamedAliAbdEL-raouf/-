const mongoose = require("mongoose");

module.exports.dbconnection = ()=>{
    mongoose.connect(process.env.CONNECTION_STRING).then(()=>{
        console.log("server is running.....");
    }).catch((err)=>{
        console.log(err);
    });
};
 
