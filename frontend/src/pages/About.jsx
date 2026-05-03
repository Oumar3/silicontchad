import { FaRocket, FaEye, FaCheck } from "react-icons/fa";

const stats = [
  { value: "5+", label: "Années d'expertise" },
  { value: "50+", label: "Clients accompagnés" },
  { value: "23+", label: "Projets livrés" },
];



const values = [
  {
    label: "Innovation",
    desc: "Adoption des dernières technologies pour des solutions digitales à la pointe.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80",
    iconColor: "text-accent",
    iconBg: "bg-accent/20",
  },
  {
    label: "Sécurité",
    desc: "Protection maximale de vos données, systèmes et infrastructures.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=500&q=80",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-400/20",
  },
  {
    label: "Performance",
    desc: "Solutions optimisées pour la croissance et la continuité de service.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80",
    iconColor: "text-green-400",
    iconBg: "bg-green-400/20",
  },
  {
    label: "Proximité",
    desc: "Un accompagnement humain, réactif et adapté à vos réalités et contraintes.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=500&q=80",
    iconColor: "text-purple-400",
    iconBg: "bg-purple-400/20",
  },
];

export default function About() {
  return (
    <div className="bg-primary">

      {/* Hero + Mission & Vision */}
      <section className="relative pt-36 pb-10 overflow-hidden bg-[#010E2F]">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Gauche : intro + stats */}
            <div>
              <span className="text-accent text-sm font-semibold uppercase tracking-widest">À propos</span>
              <p className="text-light text-lg leading-relaxed mb-8 mt-4 text-justify">
                Silicon Tchad est une entreprise de services informatiques spécialisée dans la transformation digitale, la cybersécurité et l'infrastructure IT. Nous accompagnons entreprises et institutions pour qu'elles tirent le meilleur de la technologie.
              </p>
              <blockquote className="border-l-4 border-accent pl-6 py-1">
                <p className="text-muted text-xl italic leading-relaxed">
                  "L'innovation distingue un leader d'un suiveur."
                </p>
                <footer className="mt-3 text-accent text-sm font-semibold not-italic">— Steve Jobs</footer>
              </blockquote>
            </div>

            {/* Droite : Mission + Vision */}
            <div className="flex flex-col gap-4">
              <div className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 hover:border-accent/40 rounded-2xl p-5 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-11 h-11 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaRocket className="text-accent w-5 h-5" />
                  </div>
                  <h3 className="font-poppins font-bold text-light text-xl">Notre Mission</h3>
                </div>
                <p className="text-muted leading-relaxed text-sm">
                  Accompagner les entreprises et institutions dans leur transformation numérique grâce à des solutions IT accessibles, sécurisées et adaptées à leurs réalités.
                </p>
              </div>

              <div className="bg-gradient-to-br from-secondary/50 to-secondary/20 border border-white/10 hover:border-white/25 rounded-2xl p-5 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaEye className="text-light w-5 h-5" />
                  </div>
                  <h3 className="font-poppins font-bold text-light text-xl">Notre Vision</h3>
                </div>
                <p className="text-muted leading-relaxed text-sm">
                  Être le partenaire IT de référence pour toute entreprise ou institution souhaitant croître, se sécuriser et innover à l'ère numérique.
                </p>
              </div>
            </div>
          </div>

          {/* Valeurs */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <h2 className="font-poppins text-2xl font-bold text-light mb-8">Nos valeurs</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {values.map((v) => (
                <div
                  key={v.label}
                  className="group bg-secondary/20 border border-white/5 hover:border-white/20 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/30"
                >
                  <div className="relative h-36 overflow-hidden">
                    <img
                      src={v.image}
                      alt={v.label}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
                    <div className={`absolute bottom-3 left-4 w-8 h-8 ${v.iconBg} rounded-lg flex items-center justify-center`}>
                      <FaCheck className={`${v.iconColor} w-3.5 h-3.5`} />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className={`font-poppins font-bold ${v.iconColor} text-base mb-2`}>{v.label}</h3>
                    <p className="text-muted text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
