import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import cors from 'cors'
import connectDB from './until/db.js'
import userRouter from './routers/userRouter.js'
import companyRouter from './routers/companyRouter.js'
import jobRouter from './routers/jobRouter.js'
import applicationRouter from './routers/applicationRouter.js'

const app = express();

dotenv.config({})

const corsOptions = {
 origin: "http://localhost:5173",
 credentials: true
}
app.use(cors(corsOptions))


// middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());


app.get('/', (req, res) => {
 res.send('Api is working')
})

const port = process.env.PORT || 8000

//api routes

app.use("/api/v1/user", userRouter);
app.use("/api/v1/company", companyRouter);
app.use("/api/v1/job", jobRouter);
app.use("/api/v1/application", applicationRouter);


app.listen(port, () =>{
 connectDB();
 console.log('Server is running on port: '+ port)
})