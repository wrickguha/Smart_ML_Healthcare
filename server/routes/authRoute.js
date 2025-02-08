import express from "express";
import { createDoctor, createHospital, createPatient, createTechnician } from "../controllers/authController.js";

const router= express.Router();


//Patient
router.post('/register/patient', createPatient)



//Doctor
router.post('/register/doctor', createDoctor)


//Hospital
router.post('/register/hospital', createHospital)


//Technician
router.post('/register/technician', createTechnician)


export default router;