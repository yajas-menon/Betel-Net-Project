// Import Model
import User from "../models/User.js"
import Product from "../models/Proudcts123.js";
import { cookieToken } from "../utils/cookieToken.js";
import { mailHelper } from "../utils/mailHelper.js";
import crypto from "crypto";
// Making Promise
import bigPromise from "../middlewares/bigPromise.js"

export const createUser = bigPromise(async(req,res,next)=>{
    const {name,email,password}=req.body;
    console.log(req.body);
    if((!name) || (!email) || (!password)){
        return res.status(400).json({
            success:false,
            message:"All fields are required!"
        })
    }
    const existingUser = await User.findOne({
        email:email
    }).catch(err => {
        console.log(err);
    })
    if(existingUser){
        return res.status(501).json({
            success:false,
            message:"You Have been already registered !", 
        })
    }

    const user=await User.create({
        name,
        email,
        password
    })
    return res.status(200).json({
        success:true,
        message:"User Created Successfully !",
        data:user
    })
})

   export const login=bigPromise(async(req,res,next)=>{
    const {email,password}=req.body;
    console.log(req.body);
    if(!email || !password){
        return res.status(400).json({
            success:false,
            message: "Please enter all the details !"
        })
    }
    const existingUser = await User.findOne({
        email:email
    }).catch(err => {
        console.log(err);
    })
    if(!existingUser){
        return res.status(501).json({
            success:false,
            message:"Invalid User !", 
        })
    }

    const isPasswordCorrect=await existingUser.isValidatedPassword(password, existingUser.password)

    if(!isPasswordCorrect){
        return res.status(401).json({
            success:"false",
            message:"Incorrect Password"
        })
    }

    return res.status(200).json({
        success:"True",
        message:"Correct Password"
    });
    

   })

   export const getProducts=bigPromise(async(req,res,next) =>{
    const products=await Product.find({});
    return res.status(200).json({
        success:true,
        message:"Successfully Sent the products Details",
        data:products
    });
   })


export const getLoggedinuserdetails= bigPromise(async(req,res,next)=>{

const user=await User.findById(req.user.id);

res.status(200).json({
 sucess:true,
 user
});
});

export const changePassword= bigPromise(async(req,res,next)=>{
 const userId=req.user.id;
 const user = User.findById(userId).select("+password");
 const user1=await user.isValidatedPassword(req.body.oldpassword,user.password);
 if(!user1)
 {
    res.status(400).json({
        success:false,
        message:"Old password is incorrect"
    })
 }
 const newpass=req.body.newpassword;
 user.password=newpass;
 cookieToken(user,res,"Password changed Successfully");
});

export const updateUserdetails=bigPromise(async(req,res,next)=>{
 const newData={
    name:req.body.name,
    email:req.body.email
 }
 const updated=await User.findByIdAndUpdate(req.user.id,newData,{
  new:True,
  runValidators:True,
  useModifyandUpdate:false
 });

 res.status(200).json({
    success:true,
    data:updated
 })
});

//Admin
//View all the users

export const adminallUsers=bigPromise(async(req,res,next)=>{
const users=await User.find();
console.log(users);
res.status(200).json({
success:true,
users
});
});

export const admingetoneUser=bigPromise(async(req,res,next)=>{
const user=await User.findById(req.params.id);
if(!user)
res.status(200).json({
    success:true,
    user
})
});


export const addQueries=bigPromise(async(req,res,next)=>{
    const user=req.body;
    // console.log(req.body);
    const a=await User.findOne({email:user.email});
    if(!a)
    {
        return res.status(401).json({
            success:false,
            message:"Invalid Username"
        });
    }
    else{
            const user2= await User.updateOne({_id:a._id},{$push:{queries:req.body.msg}})
            if(!user2){
                return res.status(401).json({
                    success:false,
                    message:"Updation Failed"
                });
            }
            const user3=await User.findOne({email:user.email})
        return res.status(200).json({
            success:true,
            message:"Successfully Added Your Review",
            data:user3
        });
    }
})
