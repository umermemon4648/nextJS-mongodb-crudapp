import mongoose from 'mongoose'

const schema = new mongoose.Schema({
     date: {type: Date, default: Date.now, require: true},
     room: {type: String, require: true},
     event: {type: String, require: true},
    //  startTime: {type: Date, require: true},
    //  endTime: {type: Date, require: true},

}, {timestamps: true})

mongoose.models = {}
export const Event = mongoose.model("Event", schema)