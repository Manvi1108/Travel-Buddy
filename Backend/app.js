import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRouter from "./routing/user-routes";
import postRouter from "./routing/post-routes";
import cors from 'cors';
const PORT = process.env.PORT || 5000
const app = express();
dotenv.config();

//middleware
app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/posts", postRouter)

// connection
mongoose
    .connect(
        `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.8jtdpbh.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(() =>
        app.listen(PORT,() => console.log(`Listening & connecting to local host port ${PORT}`))
    ).catch((err)=>console.log(err));