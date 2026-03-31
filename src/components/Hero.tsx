import { Shield, ArrowDown, CheckCircle2, Phone } from "lucide-react";
import heroPestControl from "@/assets/hero-pest-control.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroPestControl}
          alt="Técnico profesional de control de plagas tratando una cocina moderna"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        {/* Dark cinematic overlay - right side fades to show image */}
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(150,30%,6%,0.92)] via-[hsl(150,25%,8%,0.75)] to-[hsl(150,20%,10%,0.35)]" />
        {/* Bottom vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(150,30%,5%,0.6)] via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-28 pb-16">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="hero-fade-in inline-flex items-center gap-2 bg-primary/15 border border-primary/25 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-primary font-semibold tracking-wide">Disponible 24/7 — Región de Murcia</span>
          </div>

          {/* Heading */}
          <h1 className="hero-fade-in hero-fade-in-delay-1 font-display text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6 text-white">
            Protegemos lo que
            <br />
            <span className="text-primary italic">más valoras.</span>
          </h1>

          {/* Subheading */}
          <p className="hero-fade-in hero-fade-in-delay-2 text-lg text-white/70 max-w-lg mb-8 leading-relaxed">
            Control de plagas profesional en Murcia. Resultados garantizados con técnicas seguras para tu familia.
          </p>

          {/* Trust badges */}
          <div className="hero-fade-in hero-fade-in-delay-3 flex flex-col sm:flex-row gap-4 mb-10">
            {["Técnicos certificados", "Respuesta en 45 min", "Garantía incluida"].map((text) => (
              <span key={text} className="flex items-center gap-2 text-sm text-white/80">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                {text}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hero-fade-in hero-fade-in-delay-4 flex flex-col sm:flex-row gap-4">
            <a
              href="#reservar"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-body font-semibold text-base shadow-glow hover:shadow-glow-strong hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <Shield className="w-5 h-5" />
              Solicitar presupuesto gratis
            </a>
            <a
              href="tel:+34600000000"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white px-8 py-4 rounded-full font-body font-medium text-base hover:border-primary/50 hover:text-primary transition-all duration-200"
            >
              <Phone className="w-5 h-5" />
              Llamar ahora
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="hero-fade-in hero-fade-in-delay-5 mt-16 flex flex-wrap gap-8 md:gap-16">
          {[
            { value: "24/7", label: "Disponibilidad total" },
            { value: "<60", label: "Minutos de respuesta" },
            { value: "100%", label: "Garantía de resultado" },
          ].map((stat, i) => (
            <div key={i} className="text-left">
              <div className="font-display text-4xl md:text-5xl font-black text-primary">{stat.value}</div>
              <div className="text-sm text-white/60 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 hero-fade-in hero-fade-in-delay-5">
          <span className="text-xs text-white/50 tracking-widest uppercase">Descubre más</span>
          <ArrowDown className="w-5 h-5 text-primary bounce-arrow" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
