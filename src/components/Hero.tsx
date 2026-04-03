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

      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-28 pb-20">
        <div className="max-w-2xl flex flex-col items-center text-center sm:items-start sm:text-left mx-auto sm:mx-0">
          {/* Subtle label */}
          <div className="hero-fade-in inline-flex items-center gap-2.5 border border-[hsl(0,0%,100%,0.12)] rounded-full px-5 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[11px] text-[hsl(0,0%,100%,0.7)] font-medium tracking-wide">Disponible 24/7 · Región de Murcia</span>
          </div>

          {/* Heading - refined typography */}
          <h1 className="hero-fade-in hero-fade-in-delay-1 font-display text-[2.4rem] sm:text-[3rem] lg:text-[3.7rem] font-bold leading-[1.1] sm:leading-[1.08] tracking-tight mb-6 text-[hsl(0,0%,100%)]">
            Protegemos lo que
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>más valoras<span className="text-primary">.</span>
          </h1>

          {/* Description */}
          <p className="hero-fade-in hero-fade-in-delay-2 text-[15px] sm:text-base text-[hsl(0,0%,100%,0.6)] max-w-[20rem] sm:max-w-md mb-8 sm:mb-10 leading-[1.6] sm:leading-relaxed font-light">
            Control de plagas profesional en Murcia. Intervención rápida, segura y con resultados garantizados.
          </p>

          {/* CTA Buttons */}
          <div className="hero-fade-in hero-fade-in-delay-3 flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
            <a
              href="#reservar"
              className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto bg-primary text-primary-foreground px-7 py-[14px] sm:py-3 rounded-full font-body font-semibold text-[13px] shadow-glow hover:shadow-glow-strong hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <Shield className="w-[18px] h-[18px]" />
              Solicitar presupuesto gratis
            </a>
            <a
              href="tel:+34600000000"
              className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto border border-[hsl(0,0%,100%,0.15)] text-[hsl(0,0%,100%,0.85)] px-7 py-[14px] sm:py-3 rounded-full font-body font-medium text-[13px] hover:border-[hsl(0,0%,100%,0.3)] hover:text-[hsl(0,0%,100%)] transition-all duration-200"
            >
              <Phone className="w-[18px] h-[18px]" />
              Llamar ahora
            </a>
          </div>

          {/* Minimal stats - just two key numbers */}
          <div className="hero-fade-in hero-fade-in-delay-4 mt-12 sm:mt-14 flex justify-between sm:justify-start gap-3 sm:gap-12 w-full text-center sm:text-left bg-[hsl(220,15%,6%,0.4)] sm:bg-transparent backdrop-blur-md sm:backdrop-blur-none p-4 sm:p-0 rounded-2xl border border-[hsl(0,0%,100%,0.05)] sm:border-none">
            <div>
              <div className="font-display text-[1.6rem] md:text-[2rem] font-bold text-[hsl(0,0%,100%)]">24<span className="text-primary">/</span>7</div>
              <div className="text-[10px] text-[hsl(0,0%,100%,0.4)] mt-1 uppercase tracking-widest">Disponible</div>
            </div>
            <div className="w-px bg-[hsl(0,0%,100%,0.1)]" />
            <div>
              <div className="font-display text-[1.6rem] md:text-[2rem] font-bold text-[hsl(0,0%,100%)]">&lt;60<span className="text-primary">'</span></div>
              <div className="text-[10px] text-[hsl(0,0%,100%,0.4)] mt-1 uppercase tracking-widest">Respuesta</div>
            </div>
            <div className="w-px bg-[hsl(0,0%,100%,0.1)]" />
            <div>
              <div className="font-display text-[1.6rem] md:text-[2rem] font-bold text-[hsl(0,0%,100%)]">100<span className="text-primary">%</span></div>
              <div className="text-[10px] text-[hsl(0,0%,100%,0.4)] mt-1 uppercase tracking-widest">Garantía</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
