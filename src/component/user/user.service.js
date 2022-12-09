
const userModel = require('./user.model')

module.exports.signIn = async (req,res)=>{
    let user = await userModel.insertMany(req.body);
    res.json(user)
};

// module.exports.signIn = async (req,res)=>{
//     const {name,phone,nationalId,code,age} = req.body;
//     let user = await userModel.findOne({code});
//     if(!user){
//         let user = await userModel.insertMany({name,phone,nationalId,code,age});
//         res.json({user,message:"succsess"})
//     }else if(user){
//          res.json({user:req.body.code,msg:"اختر كود اخر"})
//     }
// };
