import express from "express";
import { getAllPictures } from "../../controllers/picture/picture.js";

const router = express.Router();

router.get("/", getAllPictures);

export default router;
