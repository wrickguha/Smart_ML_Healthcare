import express from 'express';
import AuthRoute from './routes/authRoute.js';
import connect from './db.js'


const app= express();
app.use(express.json())

app.use('/auth',AuthRoute)




const port = 3000;

app.listen(3000, ()=>{
    console.log(`Server is running on ${port}..........`);
    connect()
})