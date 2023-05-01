import {connectDB} from '../../../../utils/database'
import {Event} from '../../../../models/eventModel'

const products = [{
    room : "2 rooms",
    event: "Technical Interview Round",
}]
export default async function handler(req, res){
    await connectDB()
    const event = await Event.create(products)
    res.status(200).send({sucess: true, event})
}