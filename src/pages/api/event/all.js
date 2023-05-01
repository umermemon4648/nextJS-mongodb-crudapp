import {connectDB} from '../../../../utils/database'
import {Event} from '../../../../models/eventModel'

export default async function handler(req, res) {
    await connectDB()
    // const products= [{
    //     name: "Macbook pro Air 2",
    //     price: 250000,
    //     category: "Laptop",
    // }]
    
    const event = await Event.find({})
    res.status(200).json({success: true, name: 'Muhammad Umer', event})
  }