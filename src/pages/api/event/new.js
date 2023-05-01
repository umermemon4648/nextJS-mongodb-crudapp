import {connectDB} from '../../../../utils/database'
import {Event} from '../../../../models/eventModel'


export default async function handler(req, res){

    try {
        
        if (req.method == 'POST') {
        
    await connectDB()
    const {date, room, event, startTime, endTime} = req.body
    const eventData = await Event.create({date, room, event, startTime, endTime})
    
    await eventData.save()
    res.status(200).json({sucess: true, eventData})
    
        } else {
            res.status(400).json({error: "This method is not allowed"})
        }

    } catch (error) {
        console.log(error.message)
    }

}