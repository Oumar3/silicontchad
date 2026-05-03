import { createContactMessage } from "../models/contactMessage.js";

const contactMessages = [];

export function submitContactMessage(req, res) {
  const { message, errors } = createContactMessage(req.body);

  if (errors.length > 0) {
    return res.status(400).json({ success: false, errors });
  }

  contactMessages.push(message);
  console.log("Nouveau message:", message);

  return res.status(201).json({
    success: true,
    data: {
      id: message.id,
      createdAt: message.createdAt,
    },
  });
}

export function getContactMessages(req, res) {
  res.json({ data: contactMessages });
}
