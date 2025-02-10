import bcrypt from 'bcrypt';
import Patient from "../models/patientModel.js";
import Doctor from "../models/doctorModel.js";
import Technician from "../models/technicianModel.js";
import Hospital from "../models/hospitalModel.js";
import Auth from "../models/authModel.js";



//Login
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await Auth.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(400).json({ message: "Invalid password" });
        }
        const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY,
            { expiresIn: '1h' }
        );
        res.json({ token, userId: user._id });
    } catch (error) {
        
    }
}

export const createPatient= async (req,res)=>{
    // console.log(req.body);
    try {
        const {email, password, name, age, gender, contactNumber, address, bloodgroup} = req.body;
        // 
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword);
        
        const auth= new Auth({
            email,
            password: hashedPassword,
            type:3
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
    // console.log(req.body);
    try {
        const {email, password, name, fatherName, gender, dob, city, state, address, education, type, hospital} = req.body;
        // 
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword);
        
        const auth= new Auth({
            email,
            password: hashedPassword,
            type:2
        });
        const resultAuth= await auth.save();
        const uId= resultAuth._id;
        
        const doctor = new Doctor({
            name, 
            fatherName, 
            gender, 
            dob, 
            city, 
            state, 
            address, 
            education, 
            type, 
            hospital
        })
        const result = await doctor.save();
        
    } catch (error) {
        console.log(error);
        
    }
    
}
export const createTechnician= async (req,res)=>{
    // console.log(req.body);
    try {
        const {email, password, name, fatherName, gender, dob, city, state, address, education, type, hospital} = req.body;
        // 
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword);
        
        const auth= new Auth({
            email,
            password: hashedPassword,
            type:4
        });
        const resultAuth= await auth.save();
        const uId= resultAuth._id;
        
        const technician = new Technician({
            name, 
            fatherName, 
            gender, 
            dob, 
            city, 
            state, 
            address, 
            education, 
            type, 
            hospital
        })
        const result = await technician.save();
        
    } catch (error) {
        console.log(error);
        
    }
    
}
export const createHospital= async (req,res)=>{
    // console.log(req.body);
    try {
        const {email, password, name, age, gender, contactNumber, address, bloodgroup} = req.body;
        // 
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword);
        
        const auth= new Auth({
            email,
            password: hashedPassword,
            type:5
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

export const getPatient= async (req,res)=>{
    try {
        
    } catch (error) {
        
    }
}