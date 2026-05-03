import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import { services } from "../data/services";

export default function ServicesSection({ preview }) {
  const displayed = preview ? services.slice(0, 4) : services;
  return (
    <section className="py-16 bg-[#010E2F] relative" id="services">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-light">
            Nos services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayed.map((cat, idx) => (
            <ServiceCard key={idx} {...cat} />
          ))}
        </div>

        <div className="text-center mt-12">
          {preview ? (
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-accent hover:bg-orange-600 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-accent/30 hover:scale-105"
            >
              Voir tous nos services
            </Link>
          ) : (
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-orange-600 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-accent/30 hover:scale-105"
            >
              Discuter de votre projet
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
