import express from "express";
import {
  getAllPictures,
  addPicture,
  getParticularPicture,
} from "../controllers/picture/picture.js";

const router = express.Router();

router.get("/", getAllPictures);
router.post("/", addPicture);
router.get("/:pictureId", getParticularPicture);

export default router;
