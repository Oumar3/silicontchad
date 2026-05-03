import { Link } from "react-router-dom";
import { FaArrowRight, FaShieldAlt, FaCloud, FaCode } from "react-icons/fa";

const stats = [
  { value: "8+", label: "Clients satisfaits" },
  { value: "10+", label: "Projets livrés" },
  { value: "99%", label: "Satisfaction client" },
  { value: "500+", label: "Personnes formées" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-primary flex flex-col overflow-hidden">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-secondary/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-accent/5 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 flex-1 flex items-center max-w-7xl mx-auto px-6 w-full pt-28 pb-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">

          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-accent text-sm font-medium">Votre partenaire IT de confiance</span>
            </div>

            <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-light leading-[1.1] mb-6">
              Des solutions IT{" "}
              <span className="text-gradient-accent">sur-mesure</span>{" "}
              pour votre croissance
            </h1>

            <p className="text-muted text-lg leading-relaxed mb-10 max-w-lg">
              Développement, infrastructure, cybersécurité et formation — nous accompagnons entreprises et institutions vers l'excellence numérique.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-accent hover:bg-orange-600 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-accent/30 hover:scale-105"
              >
                Démarrer un projet
                <FaArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/30 text-light font-semibold px-7 py-3.5 rounded-xl transition-all duration-200"
              >
                Nos services
              </Link>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted">
              {[
                { icon: FaShieldAlt, label: "Support 24/7" },
                { icon: FaCloud, label: "Expertise prouvée" },
                { icon: FaCode, label: "Livraison rapide" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon className="text-accent w-4 h-4" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block animate-slide-left">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
                  alt="Infrastructure Silicon Tchad"
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
              </div>

              <div className="absolute -bottom-5 -left-5 bg-secondary border border-white/10 rounded-2xl p-4 shadow-2xl animate-float">
                <div className="font-poppins font-bold text-accent text-xl">99.9%</div>
                <div className="text-light/70 text-xs mt-0.5">Uptime garanti</div>
              </div>

              <div className="absolute -top-5 -right-5 bg-secondary border border-white/10 rounded-2xl p-4 shadow-2xl">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-green-400 font-semibold text-sm">Systèmes actifs</span>
                </div>
                <div className="text-light/60 text-xs mt-1">Surveillance 24/7</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/10 bg-secondary/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-white/10">
            {stats.map((stat, i) => (
              <div key={i} className="text-center px-4">
                <div className="font-poppins font-bold text-2xl md:text-3xl text-accent">{stat.value}</div>
                <div className="text-muted text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
