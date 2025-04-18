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


app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.json({ message: "Server is running" });
});


app.use("/api/user", userRoute);
app.use("/api/quiz", quizRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
export default app;
