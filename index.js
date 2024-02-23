import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import habitsRoutes from './routes/habitsRoutes.js';

dotenv.config()
const app = express();
app.use(express.json());
const port = 5555;

app.use('/api/habits', habitsRoutes)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

mongoose
  .connect(
    process.env.MONGO_URL
  )
  .then(() => {
    console.log("Connected to database");
  });
