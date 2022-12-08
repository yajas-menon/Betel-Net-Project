import Upcoming_Event from "../models/Upcoming_Event.js"

import bigPromise from "../middlewares/bigPromise.js"

export const createUpcomingEvent = bigPromise(async(req,res,next)=>{

     const{Name , Salary , date} = req.body;

     if((!Name) || (!Salary) || (!date))
     {

       return res.status(400).json({

         success:false,
         message: "Fill the required fields!"
     })
}
     const existingUpcomingEvent = await Event.findOne({Name: Name})

     if(existingUpcomingEvent){
              return res.status(501).json({

             status: true,
             message: "Upcoming Event already exists"

            })
            }

            else {
                    const upcomingevent = await Upcoming_Event.create({

                         Name,
                         Salary,
                         date


                    })

                    return res.status(201).json({

                         success: true,
                         message: "Upcoming Event created Successfully!",
                         data: upcomingevent


                    })
            }

})
