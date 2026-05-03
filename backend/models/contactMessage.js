export function createContactMessage(payload) {
  const message = {
    id: `msg_${Date.now()}`,
    name: String(payload.name || "").trim(),
    email: String(payload.email || "").trim().toLowerCase(),
    phone: String(payload.phone || "").trim(),
    message: String(payload.message || "").trim(),
    createdAt: new Date().toISOString(),
  };

  const errors = [];
  if (!message.name) errors.push("Le nom est obligatoire.");
  if (!message.email) errors.push("L'email est obligatoire.");
  if (!message.message) errors.push("Le message est obligatoire.");
  if (message.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(message.email)) {
    errors.push("L'email est invalide.");
  }

  return { message, errors };
}
