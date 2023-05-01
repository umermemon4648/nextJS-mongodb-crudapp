import {connectDB} from '../../../../utils/database'
import {Event} from '../../../../models/eventModel'

export default async function handler(req, res) {
    try {
        await connectDB()
        
        if (req.method == 'GET') {
            const eventData = await Event.find({})
            res.status(200).json({success: true, name: 'Muhammad Umer', eventData})
            
        } else {
            res.status(400).json({error: "This method is not allowed"})
        }


    } catch (error) {
        console.log(error.message)
    }
    
    
    
   
  }