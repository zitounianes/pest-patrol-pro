import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "¿Cuánto tarda el tratamiento?", a: "Depende del tipo de plaga y la superficie afectada. En general, una intervención estándar tarda entre 30 minutos y 2 horas. Le informaremos con antelación del tiempo estimado." },
  { q: "¿Es seguro para niños y mascotas?", a: "Absolutamente. Utilizamos productos homologados y protocolos certificados que son completamente seguros para su familia y mascotas. Le daremos instrucciones específicas para cada caso." },
  { q: "¿Ofrecen garantía?", a: "Sí, todos nuestros tratamientos incluyen garantía. Si la plaga reaparece durante el período de garantía, volvemos sin coste adicional." },
  { q: "¿Qué zonas cubrís?", a: "Cubrimos toda la Región de Murcia: Murcia, Cartagena, Lorca, Molina, Alcantarilla, Torre-Pacheco, San Javier, Cieza y alrededores." },
  { q: "¿Cuánto cuesta una intervención?", a: "El precio varía según el tipo de plaga, superficie y nivel de infestación. Ofrecemos presupuestos gratuitos y sin compromiso tras una inspección inicial." },
  { q: "¿Trabajáis fines de semana?", a: "Sí, estamos disponibles 24 horas, 7 días a la semana, incluyendo festivos. Las emergencias no entienden de horarios y nosotros tampoco." },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

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
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Preguntas Frecuentes</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Todo lo que necesitas <span className="text-gradient-primary">saber</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="bg-card border border-border rounded-xl overflow-hidden shadow-card"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-display font-semibold pr-4">{faq.q}</span>
                {open === i ? (
                  <Minus className="w-5 h-5 text-primary shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-muted-foreground shrink-0" />
                )}
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-muted-foreground leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
