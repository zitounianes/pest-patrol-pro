import { Shield, ArrowDown, CheckCircle2, Phone, Star } from "lucide-react";
import heroPestControl from "@/assets/hero-pest-control.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroPestControl}
          alt="Técnico profesional de control de plagas en acción"
          className="w-full h-full object-cover object-center"
          width={1920}
          height={1080}
        />
        {/* Cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(150,30%,5%)] via-[hsl(150,25%,6%,0.88)] to-[hsl(150,20%,10%,0.25)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(150,30%,4%,0.7)] via-transparent to-[hsl(150,20%,8%,0.3)]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-32 pb-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="hero-fade-in inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-5 py-2 mb-10">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-white/90 font-medium tracking-wide">Disponible 24/7 — Región de Murcia</span>
          </div>

          {/* Heading */}
          <h1 className="hero-fade-in hero-fade-in-delay-1 font-display text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-8 text-white">
            Protegemos lo que
            <br />
            <span className="relative">
              <span className="text-primary">más valoras.</span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/0 rounded-full" />
            </span>
          </h1>

          {/* Description */}
          <p className="hero-fade-in hero-fade-in-delay-2 text-lg md:text-xl text-white/65 max-w-lg mb-10 leading-relaxed">
            Control de plagas profesional en Murcia. Resultados garantizados con técnicas seguras para tu familia y tu negocio.
          </p>

          {/* Trust Badges */}
          <div className="hero-fade-in hero-fade-in-delay-3 flex flex-col sm:flex-row gap-x-6 gap-y-3 mb-12">
            {["Técnicos certificados", "Respuesta en 45 min", "Garantía incluida"].map((text) => (
              <span key={text} className="flex items-center gap-2 text-sm text-white/75">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                {text}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hero-fade-in hero-fade-in-delay-4 flex flex-col sm:flex-row gap-4">
            <a
              href="#reservar"
              className="inline-flex items-center justify-center gap-2.5 bg-primary text-primary-foreground px-8 py-4 rounded-full font-body font-semibold text-base shadow-glow hover:shadow-glow-strong hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <Shield className="w-5 h-5" />
              Solicitar presupuesto gratis
            </a>
            <a
              href="tel:+34600000000"
              className="inline-flex items-center justify-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-body font-medium text-base hover:bg-white/15 hover:border-white/30 transition-all duration-200"
            >
              <Phone className="w-5 h-5" />
              Llamar ahora
            </a>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="hero-fade-in hero-fade-in-delay-5 mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
          {[
            { value: "24/7", label: "Disponibilidad" },
            { value: "<60'", label: "Tiempo de respuesta" },
            { value: "100%", label: "Garantía de resultado" },
            { value: "4.9", label: "Valoración media", icon: true },
          ].map((stat, i) => (
            <div key={i} className={`text-left md:text-center ${i > 0 ? "md:border-l md:border-white/10" : ""} md:px-6`}>
              <div className="font-display text-3xl md:text-4xl font-black text-primary flex items-center gap-2 md:justify-center">
                {stat.value}
                {stat.icon && <Star className="w-5 h-5 fill-primary text-primary" />}
              </div>
              <div className="text-xs md:text-sm text-white/50 mt-1 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 hero-fade-in hero-fade-in-delay-5">
          <span className="text-[11px] text-white/40 tracking-[0.2em] uppercase font-medium">Descubre más</span>
          <ArrowDown className="w-4 h-4 text-primary bounce-arrow" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
