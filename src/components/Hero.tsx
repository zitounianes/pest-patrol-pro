import { motion } from "framer-motion";
import { Shield, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-pest-control.jpg";

const stats = [
  { value: "500+", label: "Intervenciones" },
  { value: "98%", label: "Satisfacción" },
  { value: "45 min", label: "Respuesta media" },
  { value: "10 años", label: "Experiencia" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Hero background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Profesional de control de plagas inspeccionando un hogar"
          className="w-full h-full object-cover img-cinematic"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-32 pb-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-sm text-primary font-medium">Disponible 24/7 — Región de Murcia</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-6"
          >
            Elimina las plagas.
            <br />
            <span className="text-gradient-primary">Recupera tu hogar.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
          >
            Intervención profesional en Murcia con resultados garantizados.
            Técnicos certificados y más de 500 intervenciones exitosas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#reservar"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-display font-semibold text-lg shadow-glow hover:shadow-glow-strong hover:brightness-110 transition-all"
            >
              <Shield className="w-5 h-5" />
              Reservar intervención
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 border border-border bg-card/80 text-foreground px-8 py-4 rounded-lg font-display font-medium text-lg hover:border-primary/40 hover:bg-primary/5 transition-all backdrop-blur-sm"
            >
              Explorar servicios
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 text-center hover:border-primary/30 hover:shadow-soft transition-all"
            >
              <div className="font-display text-3xl md:text-4xl font-bold text-gradient-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
