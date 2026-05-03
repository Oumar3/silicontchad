import { blogArticles, contactInfo, formationCategories, services } from "../models/siteContent.js";

export function getServices(req, res) {
  res.json({ data: services });
}

export function getServiceById(req, res) {
  const service = services.find((item) => item.id === req.params.id);

  if (!service) {
    return res.status(404).json({ success: false, message: "Service introuvable." });
  }

  return res.json({ data: service });
}

export function getBlogArticles(req, res) {
  res.json({ data: blogArticles });
}

export function getBlogArticleById(req, res) {
  const article = blogArticles.find((item) => item.id === req.params.id);

  if (!article) {
    return res.status(404).json({ success: false, message: "Article introuvable." });
  }

  return res.json({ data: article });
}

export function getFormationCategories(req, res) {
  res.json({ data: formationCategories });
}

export function getContactInfo(req, res) {
  res.json({ data: contactInfo });
}
