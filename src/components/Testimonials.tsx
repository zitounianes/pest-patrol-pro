import { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
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
    <section id="opiniones" className="py-28 relative bg-muted/50 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="text-center mb-16 reveal">
          <span className="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">Opiniones Verificadas</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black">
            Experiencias <span className="text-gradient-primary italic">reales</span>
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="reveal reveal-delay-1 relative">
          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-14 z-20 w-12 h-12 rounded-full bg-card border border-border shadow-card flex items-center justify-center hover:border-primary/40 hover:shadow-glow transition-all"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-14 z-20 w-12 h-12 rounded-full bg-card border border-border shadow-card flex items-center justify-center hover:border-primary/40 hover:shadow-glow transition-all"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          {/* Card */}
          <div className="overflow-hidden rounded-[2rem]">
            <div
              key={current}
              className={`testimonial-slide ${direction === "right" ? "slide-in-right" : "slide-in-left"}`}
            >
              <div className="bg-card border border-border rounded-[2rem] shadow-cinematic relative overflow-hidden">
                {/* Top green accent line */}
                <div className="h-1 bg-gradient-to-r from-primary via-primary/60 to-transparent" />

                <div className="p-10 md:p-14">
                  {/* Stars */}
                  <div className="flex gap-1 mb-8">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="font-display text-xl md:text-2xl lg:text-[1.75rem] font-medium leading-relaxed text-foreground mb-10">
                    <span className="text-primary text-3xl font-black leading-none mr-1">"</span>
                    {t.text}
                    <span className="text-primary text-3xl font-black leading-none ml-1">"</span>
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-glow">
                      <span className="font-display font-bold text-primary-foreground text-xl">{t.initial}</span>
                    </div>
                    <div>
                      <div className="font-display font-bold text-lg text-foreground">{t.name}</div>
                      <div className="text-sm text-muted-foreground">{t.location} · {t.time}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress dots */}
        <div className="flex items-center justify-center gap-2.5 mt-10 reveal reveal-delay-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => slide(i, i > current ? "right" : "left")}
              className={`h-2.5 rounded-full transition-all duration-400 ${
                i === current
                  ? "w-8 bg-primary shadow-glow"
                  : "w-2.5 bg-border hover:bg-primary/30"
              }`}
              aria-label={`Ver opinión ${i + 1}`}
            />
          ))}
        </div>

        {/* Counter */}
        <div className="text-center mt-5">
          <span className="text-sm text-muted-foreground font-medium">
            {String(current + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
