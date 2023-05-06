import {connectDB} from '../../../../utils/database'
import {Event} from '../../../../models/eventModel'


export default async function handler(req, res){
    try {
        if (req.method == "PUT") {
            await connectDB()
            const {room, event, startTime, endTime} = req.body

            const existingEvent = await Event.findById({_id: req.query.id})

            if(!existingEvent){
                return res.status(400).json({error: "Event not Found"})  
            }
             // Update the fields
             existingEvent.room = room
             existingEvent.event = event
             existingEvent.startTime = startTime
             existingEvent.endTime = endTime

              // Save the updated event
              const updatedEvent = await existingEvent.save()
              res.status(200).json({sucess: true, updatedEvent})    
             

        } else {
            res.status(400).json({error: "This method is not allowed"})    
        }
    } catch (error) {
        console.log(error.message)
    }
}