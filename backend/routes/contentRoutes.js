import { Router } from "express";
import {
  getBlogArticleById,
  getBlogArticles,
  getContactInfo,
  getFormationCategories,
  getServiceById,
  getServices,
} from "../controllers/contentController.js";

const router = Router();

router.get("/services", getServices);
router.get("/services/:id", getServiceById);
router.get("/blog/articles", getBlogArticles);
router.get("/blog/articles/:id", getBlogArticleById);
router.get("/formations", getFormationCategories);
router.get("/contact-info", getContactInfo);

export default router;
