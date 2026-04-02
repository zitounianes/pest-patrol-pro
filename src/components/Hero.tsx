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
        {/* Deep charcoal cinematic overlay - NOT green */}
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,15%,6%)] via-[hsl(220,12%,8%,0.88)] to-[hsl(220,10%,12%,0.3)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,15%,5%,0.6)] via-transparent to-[hsl(220,10%,10%,0.2)]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-32 pb-24">
        <div className="max-w-2xl">
          {/* Subtle label */}
          <div className="hero-fade-in inline-flex items-center gap-2.5 border border-[hsl(0,0%,100%,0.12)] rounded-full px-5 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[13px] text-[hsl(0,0%,100%,0.7)] font-medium tracking-wide">Disponible 24/7 · Región de Murcia</span>
          </div>

          {/* Heading - refined typography */}
          <h1 className="hero-fade-in hero-fade-in-delay-1 font-display text-[2.75rem] md:text-[3.5rem] lg:text-[4.25rem] font-bold leading-[1.08] tracking-tight mb-6 text-[hsl(0,0%,100%)]">
            Protegemos lo que
            <br />
            más valoras<span className="text-primary">.</span>
          </h1>

          {/* Description */}
          <p className="hero-fade-in hero-fade-in-delay-2 text-base md:text-lg text-[hsl(0,0%,100%,0.55)] max-w-md mb-10 leading-relaxed font-light">
            Control de plagas profesional en Murcia. Intervención rápida, segura y con resultados garantizados.
          </p>

          {/* CTA Buttons */}
          <div className="hero-fade-in hero-fade-in-delay-3 flex flex-col sm:flex-row gap-3.5">
            <a
              href="#reservar"
              className="inline-flex items-center justify-center gap-2.5 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-body font-semibold text-[15px] shadow-glow hover:shadow-glow-strong hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <Shield className="w-[18px] h-[18px]" />
              Solicitar presupuesto gratis
            </a>
            <a
              href="tel:+34600000000"
              className="inline-flex items-center justify-center gap-2.5 border border-[hsl(0,0%,100%,0.15)] text-[hsl(0,0%,100%,0.85)] px-8 py-3.5 rounded-full font-body font-medium text-[15px] hover:border-[hsl(0,0%,100%,0.3)] hover:text-[hsl(0,0%,100%)] transition-all duration-200"
            >
              <Phone className="w-[18px] h-[18px]" />
              Llamar ahora
            </a>
          </div>

          {/* Minimal stats - just two key numbers */}
          <div className="hero-fade-in hero-fade-in-delay-4 mt-16 flex gap-12">
            <div>
              <div className="font-display text-3xl md:text-4xl font-bold text-[hsl(0,0%,100%)]">24<span className="text-primary">/</span>7</div>
              <div className="text-xs text-[hsl(0,0%,100%,0.4)] mt-1 uppercase tracking-widest">Disponible</div>
            </div>
            <div className="w-px bg-[hsl(0,0%,100%,0.1)]" />
            <div>
              <div className="font-display text-3xl md:text-4xl font-bold text-[hsl(0,0%,100%)]">&lt;60<span className="text-primary">'</span></div>
              <div className="text-xs text-[hsl(0,0%,100%,0.4)] mt-1 uppercase tracking-widest">Respuesta</div>
            </div>
            <div className="w-px bg-[hsl(0,0%,100%,0.1)]" />
            <div>
              <div className="font-display text-3xl md:text-4xl font-bold text-[hsl(0,0%,100%)]">100<span className="text-primary">%</span></div>
              <div className="text-xs text-[hsl(0,0%,100%,0.4)] mt-1 uppercase tracking-widest">Garantía</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
