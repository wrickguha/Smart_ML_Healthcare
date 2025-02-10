import mongoose from "mongoose"
const {Schema} = mongoose

const technicianSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city:{
        type:String,
        required: true
    },
    state:{
        type:String,
        required: true
    },
})

export default mongoose.model("Technician",technicianSchema)