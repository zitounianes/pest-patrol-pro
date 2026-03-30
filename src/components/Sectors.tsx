import { motion } from "framer-motion";

const sectors = [
  { emoji: "🏠", title: "Particulares", desc: "Hogares y viviendas" },
  { emoji: "🏨", title: "Hoteles", desc: "Hostelería y turismo" },
  { emoji: "🏪", title: "Comercios", desc: "Tiendas y restaurantes" },
  { emoji: "🏢", title: "Oficinas", desc: "Espacios de trabajo" },
  { emoji: "🏥", title: "Sanidad", desc: "Clínicas y centros" },
  { emoji: "🎓", title: "Educación", desc: "Colegios y guarderías" },
  { emoji: "🏛️", title: "Administración", desc: "Edificios públicos" },
  { emoji: "🏘️", title: "Fincas", desc: "Gestores y comunidades" },
];

const Sectors = () => {
  return (
    <section id="servicios" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/20" />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Nuestros Clientes</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Soluciones para <span className="text-gradient-primary">cada sector</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Tanto para hogares como para grandes industrias, adaptamos cada tratamiento.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {sectors.map((sector, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-gradient-card border border-border rounded-xl p-6 text-center hover:border-primary/30 hover:shadow-glow transition-all duration-300 cursor-default"
            >
              <div className="text-3xl mb-3">{sector.emoji}</div>
              <h3 className="font-display font-semibold text-sm mb-1">{sector.title}</h3>
              <p className="text-xs text-muted-foreground">{sector.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sectors;
