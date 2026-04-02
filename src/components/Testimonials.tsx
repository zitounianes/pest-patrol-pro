import { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const testimonials = [
  { name: "Angela Lopez Sanchez", initial: "A", text: "Servicio impecable. Tenía una infestación de cucarachas y todo quedó limpio a la perfección. Muy profesionales, rápidos y eficaces.", time: "Hace 1 mes", location: "Murcia" },
  { name: "Maria Angeles García", initial: "M", text: "Andrés fue increíblemente eficaz, rápido y amable. Era un sábado y llegaron inmediatamente. Resolvieron el problema al instante.", time: "Hace 2 meses", location: "Cartagena" },
  { name: "Mardie Linares", initial: "M", text: "Tras probar muchos productos, contraté esta empresa. En tres semanas no quedaba ni una cucaracha. José fue muy eficaz.", time: "Hace 1 mes", location: "Lorca" },
  { name: "Aga", initial: "A", text: "Lo había intentado todo sin éxito. Gracias a esta empresa, los insectos desaparecieron por completo. Los recomiendo 100%.", time: "Hace 2 meses", location: "Molina" },
  { name: "CROSS 94", initial: "C", text: "Servicio muy profesional. 10 sobre 10. Reactividad, puntualidad, calidad y profesionalismo impecables.", time: "Local Guide", location: "Murcia" },
  { name: "Kevin Montalvo", initial: "K", text: "Personal altamente cualificado y profesional. Muy puntual, educado y eficiente. Una empresa seria y de confianza.", time: "Local Guide", location: "Alcantarilla" },
];

const Testimonials = () => {
  const ref = useReveal();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isAnimating, setIsAnimating] = useState(false);

  const slide = useCallback((newIndex: number, dir: "left" | "right") => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(dir);
    setCurrent(newIndex);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const next = useCallback(() => {
    slide((current + 1) % testimonials.length, "right");
  }, [current, slide]);

  const prev = useCallback(() => {
    slide((current - 1 + testimonials.length) % testimonials.length, "left");
  }, [current, slide]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  return (
    <section id="opiniones" className="py-28 relative bg-accent overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="text-center mb-16 reveal">
          <span className="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">Opiniones</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-accent-foreground">
            Lo que dicen nuestros clientes<span className="text-primary">.</span>
          </h2>
        </div>

        <div className="reveal reveal-delay-1 relative">
          <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-14 z-20 w-12 h-12 rounded-full bg-[hsl(0,0%,100%,0.08)] border border-[hsl(0,0%,100%,0.1)] flex items-center justify-center hover:bg-[hsl(0,0%,100%,0.15)] transition-all" aria-label="Anterior">
            <ChevronLeft className="w-5 h-5 text-accent-foreground/70" />
          </button>
          <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-14 z-20 w-12 h-12 rounded-full bg-[hsl(0,0%,100%,0.08)] border border-[hsl(0,0%,100%,0.1)] flex items-center justify-center hover:bg-[hsl(0,0%,100%,0.15)] transition-all" aria-label="Siguiente">
            <ChevronRight className="w-5 h-5 text-accent-foreground/70" />
          </button>

          <div className="overflow-hidden rounded-3xl">
            <div key={current} className={direction === "right" ? "slide-in-right" : "slide-in-left"}>
              <div className="bg-[hsl(0,0%,100%,0.05)] border border-[hsl(0,0%,100%,0.08)] rounded-3xl p-10 md:p-14 text-center">
                <Quote className="w-10 h-10 text-primary/40 mx-auto mb-8" />

                <div className="flex gap-1.5 justify-center mb-8">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-[hsl(var(--warm))] text-[hsl(var(--warm))]" />
                  ))}
                </div>

                <blockquote className="font-display text-xl md:text-2xl font-medium leading-relaxed text-accent-foreground/90 mb-10 max-w-2xl mx-auto">
                  {t.text}
                </blockquote>

                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <span className="font-body font-semibold text-primary-foreground text-lg">{t.initial}</span>
                  </div>
                  <div className="text-left">
                    <div className="font-body font-semibold text-base text-accent-foreground">{t.name}</div>
                    <div className="text-sm text-accent-foreground/40">{t.location} · {t.time}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2.5 mt-10 reveal reveal-delay-2">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => slide(i, i > current ? "right" : "left")}
              className={`h-2.5 rounded-full transition-all duration-300 ${i === current ? "w-7 bg-primary" : "w-2.5 bg-accent-foreground/20 hover:bg-accent-foreground/30"}`}
              aria-label={`Opinión ${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
