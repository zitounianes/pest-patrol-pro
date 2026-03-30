import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const dangers = [
  "Se reproducen hasta 400 crías por ciclo",
  "Transmiten enfermedades como salmonelosis",
  "Dañan estructuras, cables y alimentos",
  "Los productos domésticos no eliminan el foco",
  "Cada día sin tratamiento agrava la situación",
];

const WhyActNow = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background" />
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
                className="flex items-start gap-3 bg-gradient-card border border-border rounded-xl p-4 hover:border-destructive/30 transition-colors"
              >
                <AlertTriangle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-foreground">{danger}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-gradient-card border border-border rounded-2xl p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-destructive/5" />
              <div className="relative z-10">
                <div className="text-6xl mb-4">🪳 🐀 🐜</div>
                <div className="font-display text-5xl font-bold text-accent mb-2">72%</div>
                <p className="text-muted-foreground text-lg">
                  de hogares en zonas urbanas han sufrido alguna plaga
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyActNow;
