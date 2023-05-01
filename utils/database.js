import mongoose from "mongoose";
const dbName = "event_app"
const mongoUrl = `mongodb://127.0.0.1:27017/${dbName}`
export const connectDB = async()=>{
    try {
       const {con} = await mongoose.connect(mongoUrl,{
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true
        })
            console.log(`Database connected Successfully`)
        
        // .then((con)=>{
            //     console.log(`Database connected on ${con.host}`)
        // })
    } catch (error) {
        console.log(error.message)
    }
}