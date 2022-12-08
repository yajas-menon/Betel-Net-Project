import Events from "../models/Events.js"
import bigPromise from "../middlewares/bigPromise.js"
import multer from 'multer';
import fs from "fs";
export const createEvent = bigPromise(async(req,res ,next) => {

  const data = req.body;
  console.log(req.body);
  console.log(data);
   if(!data.Name || !data.Salary || !data.Date){
     return res.status(400).json({
       success:false,
       message: "All fields are required!"
     })
   }
   const existingEvent = await Events.findOne({Name:data.Name})

   if(existingEvent){
       return res.status(501).json({
         status:true,
         message:"Event already exists !",
       })
   }

   else{
       await Events.create({
       Name:data.Name,
       Salary:data.Salary,
       Date:data.Date,
      })
    //   event.save().then((res) =>{
    //  console.log(res);
    //   }).catch((err) =>{
    //     console.log("Error")
    //   });
      return res.status(201).json({
       success: true,
       message: "Event Created Successfully !",
      })
   }
})

export const getEvent = bigPromise(async(req,res,next)=>{
 
  const events = await Events.find({});
  if(events)
  {
  return res.status(200).json({
   success:true,
   message:"Successfully sent",
   data:events
  })
  }
  else{
    return res.status(500).json({
    success:false,
    message:"Failed to send as it does not exist!"
    });
  }
})

export const deleteEvent=bigPromise(async(req,res,next)=>{

  let event=Events.findOne({Name:req.body.Name});
  if(!event)
  {
    return res.status(401).json({
      success:false,
      message:"Event Does not exist"
    });
  }
  else{
    Events.findOneAndDelete({Name:req.body.Name},function(err){
      if(err)
      {
        return res.status(401).json({
          success:false,
          message:"Event is not Deleted"
        })
      }
      else{
        return res.status(200).json({
          success:true,
          message:"Successfully Deleted the event"
        });
      }
    })
  }
})

export const updateEvent=bigPromise(async(req,res,next)=>{
   const eventid=req.params.id;
   const a={
    Name:req.body.Name,
    Salary:req.body.Salary,
    Date:req.body.Date
   }
   const event= await Events.findOne({_id:eventid})
   if(!event)
   {
    return res.status(401).json({
      success:false,
      message:"Failed to update as event do no exist"
    });
   }
   else
   {
   await Events.findOneAndUpdate({Name:event.Name},a,function(err){
    if(err)
    {
      console.log(err);
      return;
    }
    else{
      return res.status(200).json({
        success:true,
        message:"Successfully Updated"
      });
    }
   })
  }

});