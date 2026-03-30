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
    <section id="servicios" className="py-28 relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">Sectores</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            Soluciones para <span className="text-gradient-primary italic">cada sector</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Adaptamos cada tratamiento a las necesidades de tu espacio.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto">
          {sectors.map((sector, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="bg-card border border-border rounded-2xl p-6 text-center shadow-card hover:border-primary/30 hover:shadow-glow hover:-translate-y-1 transition-all duration-200 cursor-default"
            >
              <div className="text-4xl mb-3">{sector.emoji}</div>
              <h3 className="font-display font-bold text-sm mb-1">{sector.title}</h3>
              <p className="text-xs text-muted-foreground">{sector.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sectors;
