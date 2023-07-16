import express from "express";
import pictureRoutes from "./picture/picture.js";

const apiRoutes = express.Router();

// Routing to /pictures routes
apiRoutes.use("/pictures", pictureRoutes);

export default apiRoutes;
