import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const CTA = () => {
  return (
    <section id="contacto" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px]" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para eliminar <span className="text-gradient-primary">el problema</span>?
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            No dejes que una infestación se convierta en una crisis. Recupera la tranquilidad de tu espacio hoy mismo.
          </p>
          <a
            href="#reservar"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-5 rounded-lg font-display font-bold text-xl shadow-glow-strong hover:brightness-110 transition-all"
          >
            <Shield className="w-6 h-6" />
            Solicitar Intervención
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
