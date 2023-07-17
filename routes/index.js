import express from "express";
import pictureRoutes from "./pictureRoutes.js";
import userRoutes from "./userRoutes.js";

const apiRoutes = express.Router();

// Routing to /pictures routes
apiRoutes.use("/pictures", pictureRoutes);
apiRoutes.use("/user", userRoutes);

export default apiRoutes;
