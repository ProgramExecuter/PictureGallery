import express from "express";
import {
  getAllPictures,
  addPicture,
} from "../../controllers/picture/picture.js";

const router = express.Router();

router.get("/", getAllPictures);
router.post("/", addPicture);

export default router;
