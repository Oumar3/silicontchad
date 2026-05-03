import { Link } from "react-router-dom";
import { FaLinkedin, FaTwitter, FaFacebook, FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

const navLinks = [
  { to: "/", label: "Accueil" },
  { to: "/a-propos", label: "À propos" },
  { to: "/services", label: "Services" },
  { to: "/formation", label: "Nos formations" },
  { to: "/blog", label: "Blogs" },
  { to: "/contact", label: "Contact" },
];

const serviceLinks = [
  { label: "Développement Web & Mobile", to: "/services" },
  { label: "Infrastructure & Cloud", to: "/services" },
  { label: "Cybersécurité", to: "/services" },
  { label: "Formation IT", to: "/formation" },
  { label: "IA & IA Générative", to: "/formation" },
];

const socials = [
  { Icon: FaLinkedin, href: "#", label: "LinkedIn" },
  { Icon: FaTwitter, href: "#", label: "Twitter" },
  { Icon: FaFacebook, href: "#", label: "Facebook" },
];

const contactItems = [
  { Icon: FaEnvelope, value: "contact@silicontchad.com", href: "mailto:contact@silicontchad.com" },
  { Icon: FaPhone, value: "+235 66 05 05 43 / 60 60 52 51", href: "tel:+23566000000" },
  { Icon: FaMapMarkerAlt, value: "N'Djamena, Tchad", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#010E2F]">


      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <p className="font-poppins font-bold text-2xl text-light mb-5">
              Silicon <span className="text-accent">Tchad</span>
            </p>
            <p className="text-muted text-sm leading-relaxed mb-6">
              Entreprise de services informatiques spécialisée dans la transformation digitale, la cybersécurité et l'infrastructure IT.
            </p>
            <div className="flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-white/5 hover:bg-accent/20 border border-white/10 hover:border-accent/40 rounded-lg flex items-center justify-center text-muted hover:text-accent transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-poppins font-semibold text-light mb-5 text-xs uppercase tracking-widest border-b border-white/10 pb-3">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-muted hover:text-accent text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-accent/40 group-hover:bg-accent rounded-full transition-colors duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-poppins font-semibold text-light mb-5 text-xs uppercase tracking-widest border-b border-white/10 pb-3">
              Nos services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-muted hover:text-accent text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-accent/40 group-hover:bg-accent rounded-full transition-colors duration-200" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-poppins font-semibold text-light mb-5 text-xs uppercase tracking-widest border-b border-white/10 pb-3">
              Contact
            </h4>
            <ul className="space-y-4 mb-6">
              {contactItems.map(({ Icon, value, href }) => (
                <li key={value}>
                  <a
                    href={href}
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-8 h-8 bg-accent/10 group-hover:bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-200">
                      <Icon className="text-accent w-3.5 h-3.5" />
                    </div>
                    <span className="text-muted group-hover:text-light text-sm mt-1.5 transition-colors duration-200">{value}</span>
                  </a>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-accent/40 hover:border-accent text-accent text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200 hover:bg-accent/10"
            >
              Envoyer un message
              <FaArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 px-6 py-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-muted/50 text-xs">
            © {new Date().getFullYear()} Silicon Tchad. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4 text-muted/40 text-xs">
            <Link to="/a-propos" className="hover:text-muted transition-colors">Politique de confidentialité</Link>
            <span>·</span>
            <Link to="/a-propos" className="hover:text-muted transition-colors">Mentions légales</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
