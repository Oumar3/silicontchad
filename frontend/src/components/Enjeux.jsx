import { Link } from "react-router-dom";
import { FaLightbulb, FaShieldAlt, FaSyncAlt, FaArrowRight } from "react-icons/fa";

const enjeux = [
  {
    Icon: FaLightbulb,
    title: "Stratégie & transformation digitale",
    description: "Nous cartographions vos processus, identifions les leviers de croissance et construisons avec vous une feuille de route IT concrète et mesurable.",
    colorClass: "text-accent",
    bgClass: "bg-accent/10",
    borderClass: "border-accent/20 hover:border-accent/50",
  },
  {
    Icon: FaShieldAlt,
    title: "Sécurité & conformité numérique",
    description: "Audit, protection des données et politiques de cybersécurité robustes — pour opérer en toute confiance, sans vulnérabilité cachée.",
    colorClass: "text-accent",
    bgClass: "bg-accent/10",
    borderClass: "border-accent/20 hover:border-accent/50",
  },
  {
    Icon: FaSyncAlt,
    title: "Modernisation & performance IT",
    description: "Cloud, DevOps, refonte applicative — nous modernisons votre SI pour qu'il soit plus rapide, plus fiable et prêt à scaler.",
    colorClass: "text-accent",
    bgClass: "bg-accent/10",
    borderClass: "border-accent/20 hover:border-accent/50",
  },
];

export default function Enjeux() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — texte */}
          <div>
            <span className="text-accent text-base font-bold uppercase tracking-widest">
              Notre approche
            </span>
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-light mt-3 mb-5 leading-tight">
              L'IT qui s'adapte à{" "}
              <span className="text-gradient-accent">vos ambitions</span>
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Chaque organisation est unique. Nous ne livrons pas des solutions génériques — nous concevons des réponses IT précises, alignées sur vos priorités et calibrées pour évoluer avec vous.
            </p>
            <p className="text-light/70 leading-relaxed mb-8 text-sm border-l-2 border-accent/40 pl-4">
              PME, ETI ou institution publique — notre rôle est de transformer la technologie en avantage compétitif réel pour votre organisation.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-accent hover:bg-yellow-500 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-accent/30 hover:scale-105"
              >
                Découvrir nos services
                <FaArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/30 text-light font-semibold px-7 py-3.5 rounded-xl transition-all duration-200"
              >
                Parler à un expert
              </Link>
            </div>
          </div>

          {/* Right — cartes enjeux */}
          <div className="flex flex-col gap-4">
            {enjeux.map(({ Icon, title, description, colorClass, bgClass, borderClass }) => (
              <div
                key={title}
                className={`group flex items-start gap-5 bg-secondary/20 border ${borderClass} rounded-2xl p-6 transition-all duration-300 hover:-translate-x-1 hover:shadow-xl hover:shadow-black/20`}
              >
                <div className={`w-12 h-12 ${bgClass} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-5 h-5 ${colorClass}`} />
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-light text-base mb-2">
                    {title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
