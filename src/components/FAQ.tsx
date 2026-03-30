import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "¿Cuánto tarda el tratamiento?", a: "Depende del tipo de plaga y la superficie afectada. En general, una intervención estándar tarda entre 30 minutos y 2 horas." },
  { q: "¿Es seguro para niños y mascotas?", a: "Absolutamente. Utilizamos productos homologados y protocolos certificados completamente seguros para su familia y mascotas." },
  { q: "¿Ofrecen garantía?", a: "Sí, todos nuestros tratamientos incluyen garantía. Si la plaga reaparece, volvemos sin coste adicional." },
  { q: "¿Qué zonas cubrís?", a: "Cubrimos toda la Región de Murcia: Murcia, Cartagena, Lorca, Molina, Alcantarilla, Torre-Pacheco, San Javier, Cieza y alrededores." },
  { q: "¿Cuánto cuesta una intervención?", a: "El precio varía según el tipo de plaga y nivel de infestación. Ofrecemos presupuestos gratuitos y sin compromiso." },
  { q: "¿Trabajáis fines de semana?", a: "Sí, estamos disponibles 24/7, incluyendo festivos. Las emergencias no entienden de horarios." },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-28 relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">FAQ</span>
          <h2 className="font-display text-4xl md:text-5xl font-black">
            Preguntas <span className="text-gradient-primary italic">frecuentes</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-2xl overflow-hidden shadow-card"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-display font-bold pr-4 text-lg">{faq.q}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${open === i ? 'bg-primary' : 'bg-muted'}`}>
                  {open === i ? (
                    <Minus className="w-4 h-4 text-primary-foreground" />
                  ) : (
                    <Plus className="w-4 h-4 text-muted-foreground" />
                  )}
                </div>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
