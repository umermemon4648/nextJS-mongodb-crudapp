import mongoose from 'mongoose'

const schema = new mongoose.Schema({
     date: {type: Date, default: Date.now, required: true},
     room: {type: String, required: true},
     event: {type: String, required: true, unique: true},
     startTime: {type: String, required: true},
     endTime: {type: String, required: true},

}, {timestamps: true})

mongoose.models = {}
export const Event = mongoose.model("Event", schema)