import { Link } from "react-router-dom";
import {
  FaGraduationCap, FaLaptopCode, FaShieldAlt, FaCloud, FaNetworkWired,
  FaArrowRight, FaPython, FaDatabase, FaHeadset, FaFileAlt, FaPaintBrush, FaServer, FaBrain, FaRobot
} from "react-icons/fa";

const categories = [
  {
    label: "Développement",
    color: "text-accent",
    bg: "bg-accent/15",
    border: "border-accent/30",
    formations: [
      { icon: FaLaptopCode, title: "Développement Web & Mobile", tags: ["HTML", "CSS", "JavaScript", "React", "Node.js"] },
      { icon: FaPython,    title: "Python & Django",             tags: ["Python", "Django", "REST API", "Automatisation"] },
      { icon: FaDatabase,  title: "Bases de données & MongoDB",  tags: ["SQL", "MongoDB", "PostgreSQL", "NoSQL"] },
    ],
  },
  {
    label: "Infrastructure & Sécurité",
    color: "text-accent",
    bg: "bg-accent/15",
    border: "border-accent/30",
    formations: [
      { icon: FaShieldAlt,    title: "Cybersécurité & Ethical Hacking", tags: ["Pentesting", "ISO 27001", "Audit", "SIEM"] },
      { icon: FaCloud,        title: "Cloud & DevOps",                  tags: ["AWS", "Docker", "Kubernetes", "CI/CD"] },
      { icon: FaNetworkWired, title: "Réseaux & Infrastructure IT",     tags: ["Cisco", "VLAN", "VPN", "Routing"] },
    ],
  },
  {
    label: "Support & Bureautique",
    color: "text-accent",
    bg: "bg-accent/15",
    border: "border-accent/30",
    formations: [
      { icon: FaHeadset,  title: "Support IT & Helpdesk",      tags: ["Windows", "Linux", "Dépannage", "ITIL"] },
      { icon: FaFileAlt,  title: "Bureautique & Productivité", tags: ["Word", "Excel", "PowerPoint", "Google Workspace"] },
      { icon: FaServer,   title: "Administration Systèmes",    tags: ["Windows Server", "Linux", "Active Directory", "VMware"] },
    ],
  },
  {
    label: "Intelligence Artificielle",
    color: "text-accent",
    bg: "bg-accent/15",
    border: "border-accent/30",
    formations: [
      { icon: FaBrain,  title: "Intelligence Artificielle & Machine Learning", tags: ["Python", "TensorFlow", "Scikit-learn", "Data Science"] },
      { icon: FaRobot,  title: "IA Générative & Prompt Engineering",           tags: ["ChatGPT", "Midjourney", "LangChain", "RAG", "GPT-4"] },
      { icon: FaLaptopCode, title: "Outils IA pour développeurs",              tags: ["GitHub Copilot", "Cursor", "Claude Code", "Bolt", "v0"] },
    ],
  },
  {
    label: "Design & Infographie",
    color: "text-accent",
    bg: "bg-accent/15",
    border: "border-accent/30",
    formations: [
      { icon: FaPaintBrush, title: "Infographie & Design Graphique", tags: ["Photoshop", "Illustrator", "Canva", "InDesign"] },
      { icon: FaLaptopCode, title: "UI/UX Design",                   tags: ["Figma", "Prototype", "Wireframe", "Design System"] },
    ],
  },
];

export default function Formation() {
  return (
    <div className="bg-primary pt-20">

      {/* Hero */}
      <section className="relative py-12 bg-[#010E2F] overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <h1 className="font-poppins text-4xl md:text-5xl font-bold text-light mb-6 leading-tight">
              Montez en compétences avec{" "}
              <span className="text-gradient-accent">nos formations IT</span>
            </h1>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Formez-vous ou formez vos équipes avec nos experts.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-yellow-500 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-accent/30 hover:scale-105"
            >
              S'inscrire à une formation
              <FaArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Catalogue */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-poppins text-3xl font-bold text-light mb-12">Nos programmes</h2>
          <div className="flex flex-col gap-12">
            {categories.map((cat) => (
              <div key={cat.label}>
                <div className={`inline-flex items-center gap-2 ${cat.bg} border ${cat.border} rounded-full px-4 py-1.5 mb-6`}>
                  <span className={`text-sm font-semibold ${cat.color}`}>{cat.label}</span>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cat.formations.map(({ icon: Icon, title, tags }) => (
                    <div
                      key={title}
                      className={`group bg-gradient-to-br from-secondary/30 to-primary/60 border border-white/10 ${cat.border.replace("border-", "hover:border-")} rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20`}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-10 h-10 ${cat.bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <Icon className={`w-4 h-4 ${cat.color}`} />
                        </div>
                        <h3 className="font-poppins font-bold text-light text-sm leading-snug">{title}</h3>
                      </div>
                      <div className="flex gap-2 mb-4">
                        <span className="text-xs border border-accent/40 text-accent px-2 py-0.5 rounded-full">Débutant → Avancé</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {tags.map((tag) => (
                          <span key={tag} className="bg-white/5 border border-white/10 text-muted text-xs px-2 py-0.5 rounded-full">{tag}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#010E2F]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FaGraduationCap className="text-accent w-12 h-12 mx-auto mb-5" />
          <h2 className="font-poppins text-3xl font-bold text-light mb-4">Formation sur-mesure pour vos équipes</h2>
          <p className="text-muted leading-relaxed mb-8">
            Vous avez des besoins spécifiques ? Nous concevons des programmes adaptés à votre secteur et à vos objectifs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-yellow-500 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-accent/30"
          >
            Discuter de vos besoins
            <FaArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
