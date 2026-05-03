import { FaCalendarAlt, FaTag, FaArrowRight } from "react-icons/fa";

const articles = [
  {
    title: "Les tendances IT à surveiller en 2025",
    category: "Tendances",
    date: "15 Avril 2025",
    description: "IA générative, edge computing, cybersécurité post-quantique — découvrez ce qui va transformer le secteur IT cette année.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    categoryColor: "text-accent border-accent/40",
  },
  {
    title: "Comment sécuriser son infrastructure en 5 étapes",
    category: "Cybersécurité",
    date: "02 Mars 2025",
    description: "Un guide pratique pour auditer, protéger et surveiller votre système d'information contre les cybermenaces actuelles.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80",
    categoryColor: "text-blue-400 border-blue-400/40",
  },
  {
    title: "Migration vers le cloud : par où commencer ?",
    category: "Cloud",
    date: "18 Février 2025",
    description: "Les étapes clés, les pièges à éviter et les meilleures pratiques pour réussir votre migration cloud sans interruption de service.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
    categoryColor: "text-green-400 border-green-400/40",
  },
  {
    title: "DevOps : accélérez votre cycle de développement",
    category: "DevOps",
    date: "05 Janvier 2025",
    description: "CI/CD, Docker, Kubernetes — comment intégrer les pratiques DevOps pour livrer plus vite et mieux.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    categoryColor: "text-purple-400 border-purple-400/40",
  },
  {
    title: "L'IA au service des entreprises : cas concrets",
    category: "Intelligence Artificielle",
    date: "20 Décembre 2024",
    description: "Automatisation, analyse prédictive, chatbots — comment les entreprises utilisent l'IA pour gagner en efficacité.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&q=80",
    categoryColor: "text-accent border-accent/40",
  },
  {
    title: "Réseaux d'entreprise : fibre, Wi-Fi 6 ou SD-WAN ?",
    category: "Réseaux",
    date: "10 Novembre 2024",
    description: "Comparatif des solutions réseau modernes pour choisir l'infrastructure la plus adaptée à votre organisation.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80",
    categoryColor: "text-blue-400 border-blue-400/40",
  },
];

export default function Blog() {
  return (
    <div className="bg-primary pt-20">

      {/* Hero */}
      <section className="relative py-20 bg-[#010E2F] overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <span className="text-accent text-sm font-semibold uppercase tracking-widest">Blog</span>
            <h1 className="font-poppins text-4xl md:text-5xl font-bold text-light mt-3 mb-4 leading-tight">
              Actualités & <span className="text-gradient-accent">conseils IT</span>
            </h1>
            <p className="text-muted text-lg leading-relaxed">
              Tendances technologiques, bonnes pratiques et guides experts pour rester à la pointe du numérique.
            </p>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <article
                key={article.title}
                className="group bg-secondary/20 border border-white/5 hover:border-white/20 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/30 cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  <span className={`absolute top-4 left-4 text-xs font-medium border px-3 py-1 rounded-full bg-primary/60 backdrop-blur-sm ${article.categoryColor}`}>
                    {article.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-muted/60 text-xs mb-3">
                    <FaCalendarAlt className="w-3 h-3" />
                    <span>{article.date}</span>
                  </div>
                  <h2 className="font-poppins font-bold text-light text-base leading-snug mb-3 group-hover:text-accent transition-colors duration-200">
                    {article.title}
                  </h2>
                  <p className="text-muted text-sm leading-relaxed mb-4">{article.description}</p>
                  <div className="flex items-center gap-1 text-accent text-sm font-medium">
                    Lire l'article
                    <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
