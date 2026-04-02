import { Shield, Phone } from "lucide-react";
import heroPestControl from "@/assets/hero-pest-control.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroPestControl}
          alt="Técnico profesional de control de plagas"
          className="w-full h-full object-cover object-center"
          width={1920}
          height={1080}
        />
        {/* Bright overlay - light and airy, not dark */}
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(40,20%,98%,0.92)] via-[hsl(40,15%,97%,0.75)] to-[hsl(40,10%,96%,0.25)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(40,20%,98%,0.5)] via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-32 pb-24">
        <div className="max-w-2xl">
          {/* Subtle label */}
          <div className="hero-fade-in inline-flex items-center gap-2.5 border border-border rounded-full px-5 py-2.5 mb-8 bg-card/60">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground font-medium tracking-wide">Disponible 24/7 · Región de Murcia</span>
          </div>

          {/* Heading */}
          <h1 className="hero-fade-in hero-fade-in-delay-1 font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight mb-7 text-foreground">
            Protegemos lo que
            <br />
            más valoras<span className="text-primary">.</span>
          </h1>

          {/* Description */}
          <p className="hero-fade-in hero-fade-in-delay-2 text-lg md:text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed">
            Control de plagas profesional en Murcia. Intervención rápida, segura y con resultados garantizados.
          </p>

          {/* CTA Buttons */}
          <div className="hero-fade-in hero-fade-in-delay-3 flex flex-col sm:flex-row gap-4">
            <a
              href="#reservar"
              className="inline-flex items-center justify-center gap-2.5 bg-primary text-primary-foreground px-9 py-4 rounded-full font-body font-semibold text-base shadow-glow hover:shadow-glow-strong hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <Shield className="w-5 h-5" />
              Solicitar presupuesto gratis
            </a>
            <a
              href="tel:+34600000000"
              className="inline-flex items-center justify-center gap-2.5 border border-border text-foreground px-9 py-4 rounded-full font-body font-medium text-base hover:border-primary/40 hover:text-primary transition-all duration-200"
            >
              <Phone className="w-5 h-5" />
              Llamar ahora
            </a>
          </div>

          {/* Stats */}
          <div className="hero-fade-in hero-fade-in-delay-4 mt-16 flex gap-14">
            <div>
              <div className="font-display text-4xl md:text-5xl font-bold text-foreground">24<span className="text-primary">/</span>7</div>
              <div className="text-sm text-muted-foreground mt-1.5 uppercase tracking-widest">Disponible</div>
            </div>
            <div className="w-px bg-border" />
            <div>
              <div className="font-display text-4xl md:text-5xl font-bold text-foreground">&lt;60<span className="text-primary">'</span></div>
              <div className="text-sm text-muted-foreground mt-1.5 uppercase tracking-widest">Respuesta</div>
            </div>
            <div className="w-px bg-border" />
            <div>
              <div className="font-display text-4xl md:text-5xl font-bold text-foreground">100<span className="text-primary">%</span></div>
              <div className="text-sm text-muted-foreground mt-1.5 uppercase tracking-widest">Garantía</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
