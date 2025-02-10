import mongoose from "mongoose"
const {Schema} = mongoose

const technicianSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    fathersName:{
        type:String,
        required:true
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
    education:{
        type:String,
        required:true
    },
    hospital:{
            type: Schema.Types.ObjectId,
            ref: 'Hospital',
            required: false
    }

})

export default mongoose.model("Technician",technicianSchema)