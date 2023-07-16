import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import mongoose from "mongoose";
import apiRoutes from "./routes/index.js";

const app = express();

// Enable/Process .env files
dotenv.config();

// Enable morgan logging
app.use(morgan("tiny"));

// Connect to MongoDB
mongoose
  .connect(process.env.MONGOURI)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log("DB CONNECTION ERROR\n", err));

// Attach API routes(Version 1)
app.use("/api/v1", apiRoutes);

// Server Setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
