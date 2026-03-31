import { useState, useEffect, useCallback } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const testimonials = [
  { name: "Angela Lopez Sanchez", initial: "A", text: "Servicio impecable. Tenía una infestación de cucarachas y todo quedó limpio a la perfección. Muy profesionales, rápidos y eficaces.", time: "Hace 1 mes" },
  { name: "Maria Angeles García", initial: "M", text: "Andrés fue increíblemente eficaz, rápido y amable. Era un sábado y llegaron inmediatamente. Resolvieron el problema al instante.", time: "Hace 2 meses" },
  { name: "Mardie Linares", initial: "M", text: "Tras probar muchos productos, contraté esta empresa. En tres semanas no quedaba ni una cucaracha. José fue muy eficaz.", time: "Hace 1 mes" },
  { name: "Aga", initial: "A", text: "Lo había intentado todo sin éxito. Gracias a esta empresa, los insectos desaparecieron por completo. Los recomiendo 100%.", time: "Hace 2 meses" },
  { name: "CROSS 94", initial: "C", text: "Servicio muy profesional. 10 sobre 10. Reactividad, puntualidad, calidad y profesionalismo impecables.", time: "Local Guide" },
  { name: "Kevin Montalvo", initial: "K", text: "Personal altamente cualificado y profesional. Muy puntual, educado y eficiente. Una empresa seria y de confianza.", time: "Local Guide" },
];

const Testimonials = () => {
  const ref = useReveal();
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((p) => (p + 1) % testimonials.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  return (
    <section id="opiniones" className="py-28 relative bg-muted/50" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 reveal">
          <span className="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">Opiniones</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            Lo que dicen nuestros <span className="text-gradient-primary italic">clientes</span>
          </h2>
          <p className="text-muted-foreground text-lg">Más de 500 familias ya confían en MONTCARRE.</p>
        </div>

        <div className="max-w-2xl mx-auto reveal reveal-delay-1">
          <div className="bg-card border border-border rounded-3xl p-10 shadow-cinematic relative min-h-[280px] flex flex-col justify-between">
            <Quote className="w-10 h-10 text-primary/10 absolute top-6 right-6" />

            <div>
              <div className="flex gap-0.5 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed text-lg mb-8">"{t.text}"</p>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center font-display font-bold text-primary-foreground text-base">
                  {t.initial}
                </div>
                <div>
                  <div className="font-display font-bold">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.time}</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button onClick={prev} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary/40 transition-colors" aria-label="Anterior">
                  <ChevronLeft className="w-5 h-5 text-muted-foreground" />
                </button>
                <button onClick={next} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary/40 transition-colors" aria-label="Siguiente">
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${i === current ? "bg-primary w-6" : "bg-border hover:bg-primary/30"}`}
                aria-label={`Opinión ${i + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
