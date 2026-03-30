import { motion } from "framer-motion";
import { Shield, ArrowDown, CheckCircle2 } from "lucide-react";
import heroCinematic from "@/assets/hero-cinematic.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full cinematic background */}
      <div className="absolute inset-0">
        <img
          src={heroCinematic}
          alt="Villa mediterránea protegida en Murcia"
          className="w-full h-full object-cover img-cinematic"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 overlay-hero" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-28 pb-16">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-primary font-semibold">Disponible 24/7 — Región de Murcia</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6 text-foreground"
          >
            Protegemos lo que
            <br />
            <span className="text-gradient-primary italic">más valoras.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed"
          >
            Control de plagas profesional en Murcia. Resultados garantizados con técnicas seguras para tu familia.
          </motion.p>

          {/* Trust points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            {["Técnicos certificados", "Respuesta en 45 min", "Garantía incluida"].map((text) => (
              <span key={text} className="flex items-center gap-2 text-sm text-foreground/80">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                {text}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#reservar"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-body font-semibold text-base shadow-glow hover:shadow-glow-strong hover:scale-[1.02] transition-all duration-200"
            >
              <Shield className="w-5 h-5" />
              Solicitar presupuesto gratis
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 border-2 border-foreground/15 text-foreground px-8 py-4 rounded-full font-body font-medium text-base hover:border-primary/40 hover:text-primary transition-all duration-200"
            >
              Ver servicios
            </a>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 flex flex-wrap gap-8 md:gap-16"
        >
          {[
            { value: "500+", label: "Intervenciones exitosas" },
            { value: "98%", label: "Clientes satisfechos" },
            { value: "10+", label: "Años de experiencia" },
          ].map((stat, i) => (
            <div key={i} className="text-left">
              <div className="font-display text-4xl md:text-5xl font-black text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground tracking-widest uppercase">Descubre más</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ArrowDown className="w-5 h-5 text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
