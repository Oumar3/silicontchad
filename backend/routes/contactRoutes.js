import { Router } from "express";
import { getContactMessages, submitContactMessage } from "../controllers/contactController.js";

const router = Router();

router.post("/", submitContactMessage);
router.get("/messages", getContactMessages);

export default router;
