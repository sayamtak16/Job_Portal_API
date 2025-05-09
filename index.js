import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";
dotenv.config({});

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//app.use(cors({
 // origin: "https://job-portal-api-r2qk.onrender.com", 
  //credentials: true,
//}));
 app.use(cors({
   origin:true,
   methods:[ "GET","POST","PUT","DELETE"],
   credentials:true
 }))

const PORT = process.env.PORT || 5001;

app.get('/',(req,res)=> res.json({message:"This is Home Route...."}))

 //Api's
 app.use("/api/user", userRoute);
 app.use("/api/company", companyRoute);
 app.use("/api/job", jobRoute);
 app.use("/api/application", applicationRoute);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
