import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import cleanHome from "@/assets/clean-home.jpg";

const dangers = [
  "Se reproducen hasta 400 crías por ciclo",
  "Transmiten enfermedades como salmonelosis",
  "Dañan estructuras, cables y alimentos",
  "Los productos domésticos no eliminan el foco",
  "Cada día sin tratamiento agrava la situación",
];

const WhyActNow = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-section-alt">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            ¿Por qué actuar <span className="text-gradient-primary">ahora</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Las plagas no esperan. Tú tampoco deberías. Una infestación no tratada se multiplica exponencialmente.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {dangers.map((danger, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-3 bg-card border border-border rounded-xl p-4 shadow-card hover:border-destructive/30 transition-colors"
              >
                <AlertTriangle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-foreground">{danger}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="rounded-2xl overflow-hidden shadow-soft border border-border">
              <img
                src={cleanHome}
                alt="Hogar protegido en Murcia"
                className="w-full h-56 object-cover img-cinematic"
                loading="lazy"
                width={1024}
                height={1024}
              />
            </div>
            <div className="bg-card border border-border rounded-2xl p-8 text-center shadow-card">
              <div className="text-5xl mb-3">🪳 🐀 🐜</div>
              <div className="font-display text-5xl font-bold text-gradient-primary mb-2">72%</div>
              <p className="text-muted-foreground text-lg">
                de hogares en zonas urbanas han sufrido alguna plaga
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyActNow;
