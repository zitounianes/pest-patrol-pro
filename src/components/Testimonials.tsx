import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Angela Lopez Sanchez",
    initial: "A",
    text: "Servicio impecable. Tenía una infestación de cucarachas y todo quedó limpio a la perfección. Muy profesionales, rápidos y eficaces.",
    time: "Hace 1 mes",
  },
  {
    name: "Maria Angeles García",
    initial: "M",
    text: "Andrés fue increíblemente eficaz, rápido y amable. Era un sábado y llegaron inmediatamente. Resolvieron el problema al instante.",
    time: "Hace 2 meses",
  },
  {
    name: "Mardie Linares",
    initial: "M",
    text: "Tras probar muchos productos, contraté esta empresa. En tres semanas no quedaba ni una cucaracha. José fue muy eficaz.",
    time: "Hace 1 mes",
  },
  {
    name: "Aga",
    initial: "A",
    text: "Lo había intentado todo sin éxito. Gracias a esta empresa, los insectos desaparecieron por completo. Los recomiendo 100%.",
    time: "Hace 2 meses",
  },
  {
    name: "CROSS 94",
    initial: "C",
    text: "Servicio muy profesional. 10 sobre 10. Reactividad, puntualidad, calidad y profesionalismo impecables.",
    time: "Local Guide",
  },
  {
    name: "Kevin Montalvo",
    initial: "K",
    text: "Personal altamente cualificado y profesional. Muy puntual, educado y eficiente. Una empresa seria y de confianza.",
    time: "Local Guide",
  },
];

const Testimonials = () => {
  return (
    <section id="opiniones" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Opiniones Reales</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Lo que dicen nuestros <span className="text-gradient-primary">clientes</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Más de 500 familias ya confían en MONTCARRE.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 shadow-card hover:border-primary/20 hover:shadow-glow transition-all"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6 text-sm">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center font-display font-bold text-primary text-sm">
                  {t.initial}
                </div>
                <div>
                  <div className="font-display font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.time}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
