import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();

import { connectDB } from "./config/db.js";
import userRoute from "./routes/authRoutes.js";
import quizRoute from "./routes/quizRoutes.js";

const app = express();

connectDB();




const allowedOrigins = ["https://quizfrontend-7h2y6e1vm-mukesh-swains-projects.vercel.app"];


app.use(cors({
  origin: allowedOrigins[0], 
  credentials: true, 
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));


app.options("*", (req, res) => {
  res.header("Access-Control-Allow-Origin", allowedOrigins[0]);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, PATCH");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");
  res.sendStatus(204);
});


app.use(express.json());
app.use(cookieParser());


app.use((req, res, next) => {
  console.log("Cookies Received:", req.cookies);
  next();
});


app.get("/", (req, res) => {
  res.json({ message: "Server is running" });
});


app.use("/api/user", userRoute);
app.use("/api/quiz", quizRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
export default app;
