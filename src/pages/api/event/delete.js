import {connectDB} from '../../../../utils/database'
import {Event} from '../../../../models/eventModel'


export default async function handler(req,res){
    try {
        
        if (req.method == "DELETE") {
            await connectDB()
await Event.findByIdAndDelete({_id: req.query.id})

            
    res.status(200).json({sucess: true, message: "Event deleted successfully"})

        } else {
            res.status(400).json({error: "This method is not allowed"})
        }

    } catch (error) {
        console.log(error.message)
    }
}