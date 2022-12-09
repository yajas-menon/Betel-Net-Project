import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";

const productSchema=new mongoose.Schema({
    product_name:{
        type:String,
        required:true,
        maxlength:[40,'Name should be under 40 characters.']
    },
    description:{
        type:String,
        required:true,
        maxlength:[100,'Name should be under 40 characters.']
    },
    availability:{
        type:String,
        required:'True',
    },
    price:{
        type:Number,
        required:[true,'Please provide Price'],
    },
    packaging:{
        type:Number,
        required:[true,'Please provide Quantity'],
        // select:false  // so that password will not go with model , we don't have to do user.password=undefined
    }
},
{
    timestamps:true
})

const Product = mongoose.model("Product",productSchema);
export default Product;
