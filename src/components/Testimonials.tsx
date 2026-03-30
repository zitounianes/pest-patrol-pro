import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

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
    <section id="opiniones" className="py-28 relative bg-muted/50">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">Opiniones</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            Lo que dicen nuestros <span className="text-gradient-primary italic">clientes</span>
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
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              className="bg-card border border-border rounded-3xl p-7 shadow-card hover:shadow-cinematic transition-shadow duration-300 relative"
            >
              <Quote className="w-8 h-8 text-primary/15 absolute top-5 right-5" />
              <div className="flex gap-0.5 mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6 text-[15px]">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center font-display font-bold text-primary-foreground text-sm">
                  {t.initial}
                </div>
                <div>
                  <div className="font-display font-bold text-sm">{t.name}</div>
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
