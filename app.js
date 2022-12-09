const express = require('express')
const { dbconnection } = require('./src/database/dbconnection');
require('dotenv').config({path:'./config/.env'});
const port = process.env.PORT ||4000
const app = express();
const cors = require('cors')
const userModel = require('./src/component/user/user.model')
app.use(express.json());
app.use(cors())
app.use(require('./src/component/user/user.api'));
var corsOptions = {
  origin: "http://localhost:3000/alluser",
  optionsSuccessStatus: 200 
}
  
  var corsOptions = {
    origin: function (origin, callback) {
      if ((origin) !== -1 || !origin) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    }
  }
  app.use(cors(corsOptions))
app.get('/alluser',async (req,res)=>{
    let user = await userModel.find({})
  // questionOne
    let yes = await userModel.find({q1:'نعم'}).count()
    let no = await userModel.find({q1:'لا'}).count()
    let someTimes = await userModel.find({q1:'احيانا'}).count()
  //questionTwo
    let one = await userModel.find({q2:'يقولون كلام إيجابى فقط '}).count()
    let two = await userModel.find({q2:'يفكرون فى حل المشكله'}).count()
    let three = await userModel.find({q2:'يؤجلون حل المشكله'}).count()

  //age
    let firstAge = await userModel.find({ age: { $gt: '18', $lte: '25' } }).count()
    let secondAge = await userModel.find({ age: { $gt: '26', $lte: '40' } }).count()
    let thirdAge = await userModel.find({ age: { $gt: '41', $lte: '65' } }).count()
    res.json({user,yes,no,someTimes,one,two,three,firstAge,secondAge,thirdAge})
  })  
  
dbconnection();
app.listen(port, () => console.log(`Example app listening on port ${port}!`))