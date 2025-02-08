import mongoose from 'mongoose';

const connect = async()=>{
    try {
        await mongoose.connect('mongodb+srv://admin:1234@cluster0.buaqqyp.mongodb.net/healthcare?retryWrites=true&w=majority&appName=Cluster0')  
        console.log("Database is ready to Connect.............");
    } catch (error) {
        throw error
    }
}

export default connect