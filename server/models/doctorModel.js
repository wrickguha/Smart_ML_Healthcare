import mongoose from "mongoose"
const {Schema} = mongoose

const doctorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    fatherName:{
        type:String,
        required:true
    },
    dob:{
        type:Date,
        required:true
    },
    gender:{
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
    type:{
        type:String,
        required:true
    },
    hospital:{
            type: Schema.Types.ObjectId,
            ref: 'Hospital',
            required: false
    }

})

export default mongoose.model("Technician",doctorSchema)