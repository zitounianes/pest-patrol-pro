import { motion } from "framer-motion";
import { Eye, Microscope, ShieldCheck } from "lucide-react";

const pillars = [
  {
    icon: Eye,
    title: "Protección Invisible",
    description: "Métodos discretos que actúan sin alterar tu día a día.",
  },
  {
    icon: Microscope,
    title: "Precisión Científica",
    description: "Diagnóstico exacto y erradicación desde el origen del problema.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad Total",
    description: "Protocolos estrictos inofensivos para tu entorno y familia.",
  },
];

const Excellence = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Excelencia Profesional</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Tranquilidad absoluta. <span className="text-gradient-primary">Cero compromisos.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            No vendemos tratamientos temporales. Restauramos la seguridad de tu entorno con precisión silenciosa y resultados definitivos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group bg-gradient-card border border-border rounded-2xl p-8 hover:border-primary/30 hover:shadow-glow transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <pillar.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">{pillar.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Excellence;
