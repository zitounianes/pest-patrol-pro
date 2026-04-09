import { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const testimonials = [
  { name: "Georgie Davies", initial: "G", text: "I had an excellent experience with Patrick from Environ. He was incredibly professional, kind, and genuinely trustworthy. His knowledge and expertise were obvious from the moment he arrived, and he handled the mice issue at my property perfectly.", time: "4 months ago", location: "London" },
  { name: "Ami Awan", initial: "A", text: "Really impressed with the service. I called up for some advice and they were so helpful and reassuring. They explained everything clearly and didn't make me feel silly for asking questions. Someone came out straight away.", time: "2 months ago", location: "London" },
  { name: "Alanna O'Brien", initial: "A", text: "I had a great experience from start to finish over the phone and in person. Keeley was extremely helpful and took the time to answer all my questions and made the process easy and stress free.", time: "2 months ago", location: "London" },
  { name: "Jeneil Camron", initial: "J", text: "Really happy with my experience with Environ Pest Control. The proofing they did was impressive — we haven't seen any mice at all since, which is a huge result. Overall, a smooth, stress-free experience and definitely 5 stars.", time: "4 months ago", location: "London" },
  { name: "Sandra", initial: "S", text: "I had a mice infestation and contacted Environ for help. I spoke with Natalie L, who was extremely helpful and professional. She took the time to listen to me. Her support made a stressful situation much easier to handle.", time: "5 months ago", location: "London" },
  { name: "Aaron Zaken", initial: "A", text: "Environ Pest Control provided outstanding service from start to finish. We had a persistent rodent issue that other companies couldn't fully resolve, but their team quickly identified the entry points and implemented a thorough solution.", time: "8 months ago", location: "London" },
  { name: "Samantha Carrizales", initial: "S", text: "I had Environ come out to rat proof my house. Since their visit, I haven't seen any signs of rats on my property! One of a kind service. They talked me through the whole process and gave me reassurance all the way through.", time: "1 year ago", location: "London" },
  { name: "Saskia Manners", initial: "S", text: "They are, as ever, friendly and efficient. Explaining what they have done and where the traps are left. I am very happy with my four-season package, knowing that there is continuity with keeping on top of the little beasts.", time: "6 months ago", location: "London" },
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
    <section id="reviews" className="py-24 relative bg-accent overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <div className="text-center mb-14 reveal">
          <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em] mb-3 block">Reviews</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-accent-foreground">
            What our clients say<span className="text-primary">.</span>
          </h2>
        </div>

        <div className="reveal reveal-delay-1 relative">
          <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-14 z-20 w-10 h-10 rounded-full bg-[hsl(0,0%,100%,0.08)] border border-[hsl(0,0%,100%,0.1)] flex items-center justify-center hover:bg-[hsl(0,0%,100%,0.15)] transition-all" aria-label="Previous">
            <ChevronLeft className="w-4 h-4 text-accent-foreground/70" />
          </button>
          <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-14 z-20 w-10 h-10 rounded-full bg-[hsl(0,0%,100%,0.08)] border border-[hsl(0,0%,100%,0.1)] flex items-center justify-center hover:bg-[hsl(0,0%,100%,0.15)] transition-all" aria-label="Next">
            <ChevronRight className="w-4 h-4 text-accent-foreground/70" />
          </button>

          <div className="overflow-hidden rounded-2xl">
            <div key={current} className={direction === "right" ? "slide-in-right" : "slide-in-left"}>
              <div className="bg-[hsl(0,0%,100%,0.05)] border border-[hsl(0,0%,100%,0.08)] rounded-2xl p-8 md:p-12 text-center">
                <Quote className="w-8 h-8 text-primary/50 mx-auto mb-6" />

                <div className="flex gap-1 justify-center mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[hsl(var(--warm))] text-[hsl(var(--warm))]" />
                  ))}
                </div>

                <blockquote className="font-display text-lg md:text-xl font-medium leading-relaxed text-accent-foreground/90 mb-8 max-w-xl mx-auto">
                  {t.text}
                </blockquote>

                <div className="flex items-center justify-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <span className="font-body font-semibold text-primary-foreground text-sm">{t.initial}</span>
                  </div>
                  <div className="text-left">
                    <div className="font-body font-semibold text-sm text-accent-foreground">{t.name}</div>
                    <div className="text-xs text-accent-foreground/40">{t.location} · {t.time}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-8 reveal reveal-delay-2">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => slide(i, i > current ? "right" : "left")}
              className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-primary" : "w-2 bg-accent-foreground/20 hover:bg-accent-foreground/30"}`}
              aria-label={`Review ${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
