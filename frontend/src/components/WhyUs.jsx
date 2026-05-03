import { FaShieldAlt, FaRocket, FaHeadset, FaChartLine } from "react-icons/fa";

const features = [
  {
    Icon: FaShieldAlt,
    title: "Sécurité maximale",
    description: "Vos données et systèmes protégés par des protocoles de cybersécurité de niveau entreprise.",
    colorClass: "text-blue-400",
    bgClass: "bg-blue-400/10",
    borderClass: "hover:border-blue-400/30",
  },
  {
    Icon: FaRocket,
    title: "Expertise prouvée",
    description: "5 ans d'expérience en transformation digitale, cloud et développement sur-mesure au Tchad.",
    colorClass: "text-accent",
    bgClass: "bg-accent/10",
    borderClass: "hover:border-accent/30",
  },
  {
    Icon: FaHeadset,
    title: "Support 24/7",
    description: "Une équipe réactive disponible pour vous accompagner à chaque étape de votre projet.",
    colorClass: "text-green-400",
    bgClass: "bg-green-400/10",
    borderClass: "hover:border-green-400/30",
  },
  {
    Icon: FaChartLine,
    title: "Performance garantie",
    description: "Des solutions optimisées pour la performance, la scalabilité et la continuité de service.",
    colorClass: "text-purple-400",
    bgClass: "bg-purple-400/10",
    borderClass: "hover:border-purple-400/30",
  },
];

export default function WhyUs() {
  return (
    <section className="pt-10 pb-10 bg-primary relative">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-8">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-light">
            Pourquoi nous choisir ?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ Icon, title, description, colorClass, bgClass, borderClass }) => (
            <div
              key={title}
              className={`group bg-secondary/20 border border-white/5 ${borderClass} rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/20`}
            >
              <div className={`w-12 h-12 ${bgClass} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className={`w-5 h-5 ${colorClass}`} />
              </div>
              <h3 className="font-poppins font-semibold text-light text-lg mb-3">{title}</h3>
              <p className="text-muted text-base leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
