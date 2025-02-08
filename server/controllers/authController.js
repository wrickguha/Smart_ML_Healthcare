import bcrypt from 'bcrypt';
import Patient from "../models/patientModel.js";
import Auth from "../models/authModel.js";


export const createPatient= async (req,res)=>{
    console.log(req.body);
    try {
        const {email, password, name, age, gender, contactNumber, address, bloodgroup} = req.body;
        // 
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword);
        
        const auth= new Auth({
            email,
            password: hashedPassword
        });
        const resultAuth= await auth.save();
        const uId= resultAuth._id;
        
        const patient = new Patient({
            name,
            age,
            gender,
            contactNumber,
            address,
            bloodgroup,
            userId: uId
        })
        const result = await patient.save();
        
    } catch (error) {
        console.log(error);
        
    }
}
export const createDoctor= async (req,res)=>{
    console.log(req.body);
    
}
export const createTechnician= async (req,res)=>{
    console.log(req.body);
    
}
export const createHospital= async (req,res)=>{
    console.log(req.body);
    
}

export const getPatient= async (req,res)=>{
    try {
        
    } catch (error) {
        
    }
}