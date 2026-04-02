import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const faqs = [
  { q: "¿Cuánto tarda el tratamiento?", a: "Depende del tipo de plaga y la superficie afectada. En general, una intervención estándar tarda entre 30 minutos y 2 horas." },
  { q: "¿Es seguro para niños y mascotas?", a: "Absolutamente. Utilizamos productos homologados y protocolos certificados completamente seguros para su familia y mascotas." },
  { q: "¿Ofrecen garantía?", a: "Sí, todos nuestros tratamientos incluyen garantía. Si la plaga reaparece, volvemos sin coste adicional." },
  { q: "¿Qué zonas cubrís?", a: "Cubrimos toda la Región de Murcia: Murcia, Cartagena, Lorca, Molina, Alcantarilla, Torre-Pacheco, San Javier, Cieza y alrededores." },
  { q: "¿Cuánto cuesta una intervención?", a: "El precio varía según el tipo de plaga y nivel de infestación. Ofrecemos presupuestos gratuitos y sin compromiso." },
  { q: "¿Trabajáis fines de semana?", a: "Sí, estamos disponibles 24/7, incluyendo festivos." },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);
  const ref = useReveal();

  return (
    <section className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-14 reveal">
          <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em] mb-3 block">FAQ</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Preguntas frecuentes<span className="text-primary">.</span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto space-y-2 reveal reveal-delay-1">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-card border border-border rounded-xl overflow-hidden shadow-card">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
                <span className="font-body font-semibold pr-4 text-base">{faq.q}</span>
                <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${open === i ? 'bg-primary' : 'bg-muted'}`}>
                  {open === i ? <Minus className="w-3.5 h-3.5 text-primary-foreground" /> : <Plus className="w-3.5 h-3.5 text-muted-foreground" />}
                </div>
              </button>
              <div className={`overflow-hidden transition-all duration-200 ${open === i ? 'max-h-40' : 'max-h-0'}`}>
                <p className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
