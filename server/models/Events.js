import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";
const eventSchema = new mongoose.Schema({

  images: {
    type: [String],
    validate: (v) => Array.isArray(v) && v.length > 0,
    default: ''
  },

  Name: {
    type: String,
    required: true,

  },

  SSN: {
    type: String,
    maxlength: [40, 'Please enter the venue name.']

  },

  Gender: [
    {
      type: String,


    }
  ],

  Salary: {
    type: Number,
    required: true,
    maxlength: [300, 'Whats the event is all about please describe.']
  },

  Date: {

    type: Date,
    required: true,
  },

  Marketing: [{
    type: String,
   

  }],

  Experience:
  {
    type: String,
  
  },
  Designation:
  {
    type: String,
  },
},
  { timestamps: true }
);
const Event = mongoose.model("Event", eventSchema);
export default Event;
