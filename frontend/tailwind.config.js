module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#021343",
        secondary: "#1A3A65",
        accent: "#F5A623",
        light: "#FDFCFD",
        muted: "#98A0AD",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(40px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideLeft: {
          from: { opacity: "0", transform: "translateX(40px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out both",
        "slide-up": "slideUp 0.8s ease-out both",
        "slide-left": "slideLeft 0.8s ease-out 0.2s both",
        "fade-in-1": "fadeIn 0.8s ease-out 0.1s both",
        "fade-in-2": "fadeIn 0.8s ease-out 0.3s both",
        "fade-in-3": "fadeIn 0.8s ease-out 0.5s both",
        "slide-up-1": "slideUp 0.8s ease-out 0.1s both",
        "slide-up-2": "slideUp 0.8s ease-out 0.3s both",
        "slide-up-3": "slideUp 0.8s ease-out 0.5s both",
        float: "float 3s ease-in-out infinite",
      },
      boxShadow: {
        glow: "0 0 20px rgba(245,166,35,0.3)",
        "glow-lg": "0 0 40px rgba(245,166,35,0.4)",
      },
    },
  },
  plugins: [],
};
