import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const contactInfo = [
  { Icon: FaEnvelope, label: "Email", value: "contact@silicontchad.com" },
  { Icon: FaPhone, label: "Téléphone", value: "+235 66 05 05 43 / 60 60 52 51" },
  { Icon: FaMapMarkerAlt, label: "Adresse", value: "N'Djamena, Tchad" },
];

export default function ContactForm({ cta }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } catch {
      // continue regardless
    }
    setLoading(false);
    setSent(true);
  };

  return (
    <section className="py-24 bg-[#010E2F] relative" id="contact">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          <div>
            <span className="text-accent text-sm font-semibold uppercase tracking-widest">Contact</span>
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-light mt-3 mb-6 leading-tight">
              {cta ? "Parlons de votre projet" : "Contactez-nous"}
            </h2>
            <p className="text-muted leading-relaxed mb-10 max-w-md">
              Notre équipe est disponible pour répondre à toutes vos questions et vous aider à définir la meilleure solution pour vos besoins.
            </p>

            <div className="space-y-5">
              {contactInfo.map(({ Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/15 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="text-accent w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-muted text-xs uppercase tracking-wider mb-0.5">{label}</div>
                    <div className="text-light font-medium text-sm">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-secondary/20 border border-white/5 rounded-2xl p-8">
            {sent ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-400/15 rounded-full flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-poppins font-bold text-light text-xl mb-2">Message envoyé !</h3>
                <p className="text-muted text-sm">Nous vous répondrons dans les plus brefs délais.</p>
              </div>
            ) : (
              <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-muted text-xs uppercase tracking-wider mb-2">Nom complet</label>
                  <input
                    className="w-full bg-white/5 border border-white/10 focus:border-accent/50 rounded-xl px-4 py-3 text-light placeholder-muted/40 outline-none transition-colors text-sm"
                    type="text"
                    name="name"
                    placeholder="Votre nom"
                    required
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-muted text-xs uppercase tracking-wider mb-2">Email</label>
                  <input
                    className="w-full bg-white/5 border border-white/10 focus:border-accent/50 rounded-xl px-4 py-3 text-light placeholder-muted/40 outline-none transition-colors text-sm"
                    type="email"
                    name="email"
                    placeholder="votre@email.com"
                    required
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-muted text-xs uppercase tracking-wider mb-2">Téléphone</label>
                  <input
                    className="w-full bg-white/5 border border-white/10 focus:border-accent/50 rounded-xl px-4 py-3 text-light placeholder-muted/40 outline-none transition-colors text-sm"
                    type="tel"
                    name="phone"
                    placeholder="+235 XX XX XX XX"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-muted text-xs uppercase tracking-wider mb-2">Message</label>
                  <textarea
                    className="w-full bg-white/5 border border-white/10 focus:border-accent/50 rounded-xl px-4 py-3 text-light placeholder-muted/40 outline-none transition-colors resize-none text-sm"
                    name="message"
                    placeholder="Décrivez votre projet ou votre besoin..."
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-accent hover:bg-orange-600 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-accent/30 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Envoi en cours..." : "Envoyer le message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
