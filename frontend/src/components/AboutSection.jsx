import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";

const values = [
  {
    label: "Innovation",
    desc: "Adoption des dernières technologies pour vos projets digitaux.",
  },
  {
    label: "Sécurité",
    desc: "Protection maximale de vos données et infrastructures.",
  },
  {
    label: "Performance",
    desc: "Solutions optimisées pour la croissance de votre activité.",
  },
];

export default function AboutSection({ short }) {
  return (
    <section className="py-24 bg-primary relative" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="relative order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Équipe Silicon Tchad"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/50 to-transparent rounded-2xl" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent rounded-2xl p-5 shadow-xl shadow-accent/20">
              <div className="font-poppins font-bold text-white text-3xl">5+</div>
              <div className="text-white/80 text-sm mt-0.5">Années d'expertise</div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-accent text-sm font-semibold uppercase tracking-widest">Qui sommes-nous ?</span>
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-light mt-3 mb-6 leading-tight">
              La tech au service de l'Afrique centrale
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              Silicon Tchad est une startup technologique basée à N'Djamena, spécialisée dans la transformation digitale, la sécurité et la performance IT. Nous accompagnons entreprises et institutions publiques dans leur transition numérique.
            </p>

            {!short && (
              <>
                <div className="grid grid-cols-1 gap-4 mb-8">
                  <div className="bg-secondary/20 border border-white/5 rounded-xl p-5">
                    <h3 className="font-poppins font-semibold text-light mb-2">Mission</h3>
                    <p className="text-muted text-sm leading-relaxed">Digitaliser le Tchad et accompagner les entreprises dans leur transformation numérique.</p>
                  </div>
                  <div className="bg-secondary/20 border border-white/5 rounded-xl p-5">
                    <h3 className="font-poppins font-semibold text-light mb-2">Vision</h3>
                    <p className="text-muted text-sm leading-relaxed">Être le leader de l'innovation technologique et de la sécurité digitale en Afrique centrale.</p>
                  </div>
                </div>
              </>
            )}

            <div className="space-y-4 mb-8">
              {values.map((v) => (
                <div key={v.label} className="flex items-start gap-4">
                  <div className="w-7 h-7 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FaCheck className="text-accent w-3 h-3" />
                  </div>
                  <div>
                    <span className="text-light font-semibold text-sm">{v.label}</span>
                    <p className="text-muted text-sm mt-0.5">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to={short ? "/a-propos" : "/contact"}
              className="inline-flex items-center gap-2 bg-accent hover:bg-orange-600 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-accent/30 hover:scale-105"
            >
              {short ? "En savoir plus" : "Nous contacter"}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
