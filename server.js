import express from "express";
import apiRoutes from "./routes/index.js";

const app = express();

// Attach API routes(Version 1)
app.use("/api/v1", apiRoutes);

// Server Setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
