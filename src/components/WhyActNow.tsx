import { motion } from "framer-motion";
import { AlertTriangle, TrendingUp } from "lucide-react";
import cleanHome from "@/assets/clean-home.jpg";

const dangers = [
  { text: "Se reproducen hasta 400 crías por ciclo", icon: "🔴" },
  { text: "Transmiten enfermedades como salmonelosis", icon: "🔴" },
  { text: "Dañan estructuras, cables y alimentos", icon: "🔴" },
  { text: "Los productos domésticos no eliminan el foco", icon: "🔴" },
  { text: "Cada día sin tratamiento agrava la situación", icon: "🔴" },
];

const WhyActNow = () => {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">Urgencia</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            ¿Por qué actuar <span className="text-gradient-primary italic">ahora</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Una infestación no tratada se multiplica exponencialmente. Lo que hoy es una molestia, mañana puede ser un riesgo sanitario grave.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Dangers list */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {dangers.map((danger, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-card border border-border rounded-2xl p-5 shadow-card hover:border-destructive/20 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center shrink-0 group-hover:bg-destructive/15 transition-colors">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                </div>
                <span className="text-foreground font-medium">{danger.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="rounded-3xl overflow-hidden shadow-cinematic">
              <img
                src={cleanHome}
                alt="Hogar protegido en Murcia"
                className="w-full h-64 object-cover img-cinematic"
                loading="lazy"
                width={1024}
                height={1024}
              />
            </div>
            <div className="bg-card border border-border rounded-3xl p-8 text-center shadow-cinematic">
              <div className="flex items-center justify-center gap-3 mb-3">
                <TrendingUp className="w-8 h-8 text-destructive" />
                <span className="font-display text-6xl font-black text-gradient-primary">72%</span>
              </div>
              <p className="text-muted-foreground text-lg max-w-xs mx-auto">
                de hogares urbanos han sufrido alguna plaga
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyActNow;
