import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import dotenv from "dotenv";
dotenv.config();


import { connectDB } from "./config/db.js";
import userRoute from "./routes/authRoutes.js";
import quizRoute from "./routes/quizRoutes.js";

const app = express();






// const allowedOrigins = ["","http://localhost:5173"];

app.use((req, res, next) => {
  console.log('Incoming request origin:', req.headers.origin);
  next();
});
app.use(
  cors({
    origin: "https://quizfrontend-swart.vercel.app",
    credentials: true,
    
  })
);



app.use(express.json());
app.use(cookieParser());
connectDB();





app.get("/", (req, res) => {
  res.json({ message: "Server is running" });
});


app.use("/api/user", userRoute);
app.use("/api/quiz", quizRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
})
export default app
