export default function ServiceCard({ icon, title, description, badges, iconColor = "text-accent", iconBg = "bg-accent/20", badgeClass = "border-accent/40 text-accent", hoverBorder = "hover:border-accent/60", hoverShadow = "hover:shadow-accent/15" }) {
  return (
    <div className={`group relative bg-gradient-to-br from-secondary/30 to-primary/60 border border-white/10 ${hoverBorder} rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${hoverShadow}`}>
      {/* Ligne accent animée en haut */}
      <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-accent to-yellow-300 transition-all duration-500" />

      <div className="p-6">
        <div className={`w-12 h-12 ${iconBg} rounded-xl flex items-center justify-center mb-5 transition-colors duration-300 group-hover:opacity-80`}>
          <span className={`${iconColor} text-2xl`}>{icon}</span>
        </div>
        <h3 className="font-poppins font-bold text-light text-base mb-3 leading-snug">{title}</h3>
        <p className="text-muted text-sm leading-relaxed mb-5">{description}</p>
        <div className="flex flex-wrap gap-2">
          {badges.map((b, i) => (
            <span
              key={i}
              className={`bg-white/5 border ${badgeClass} text-xs px-3 py-1 rounded-full`}
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
