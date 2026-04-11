import { AlertTriangle, TrendingUp, ChevronRight } from "lucide-react";
import heroPestSpray from "@/assets/branded_sprayer.png";
import { useReveal } from "@/hooks/use-reveal";

const dangers = [
  { title: "Exponential Growth", desc: "Pest populations can multiply dramatically within just a few weeks." },
  { title: "Health Risks", desc: "Pests carry dangerous pathogens that compromise your family's health." },
  { title: "Property Damage", desc: "Structural damage to wiring, insulation and contamination of goods." },
  { title: "DIY Ineffectiveness", desc: "Over-the-counter solutions often disperse pests without eliminating them." },
  { title: "Escalating Problem", desc: "Delayed action leads to far more invasive and costly interventions." },
];

const WhyActNow = () => {
  const ref = useReveal();

  return (
    <section className="py-20 md:py-28 relative overflow-hidden" ref={ref}>
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-destructive/[0.03] to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8 relative">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12 md:mb-16 reveal flex flex-col items-center text-center md:items-start md:text-left">
            <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive rounded-full px-4 py-1.5 mb-5">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span className="text-[11px] font-bold uppercase tracking-[0.15em]">Why act now</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold leading-[1.15]">
              Pests don't wait<span className="text-primary">.</span>
              <br />
              <span className="text-muted-foreground font-normal italic">Neither should you.</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Danger cards */}
            <div className="flex flex-col gap-3 reveal reveal-delay-1">
              {dangers.map((d, i) => (
                <div 
                  key={i} 
                  className="group flex items-start gap-4 p-4 md:p-5 rounded-2xl border border-border bg-card/80 backdrop-blur-sm hover:border-destructive/30 hover:bg-destructive/[0.02] transition-all duration-300 cursor-default"
                >
                  <div className="w-9 h-9 rounded-xl bg-destructive/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-destructive/15 transition-colors">
                    <AlertTriangle className="w-4 h-4 text-destructive" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-body font-semibold text-sm text-foreground mb-0.5">{d.title}</h3>
                    <p className="text-muted-foreground text-[13px] md:text-sm leading-relaxed">{d.desc}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground/30 shrink-0 mt-1 group-hover:text-destructive/50 group-hover:translate-x-0.5 transition-all" />
                </div>
              ))}
            </div>

            {/* Visual side */}
            <div className="flex flex-col gap-5 reveal reveal-delay-2">
              {/* Image with floating stat overlay */}
              <div className="relative rounded-3xl overflow-hidden shadow-cinematic group">
                <img 
                  src={heroPestSpray} 
                  alt="Professional technician applying treatment" 
                  className="w-full h-[300px] sm:h-[340px] lg:h-[380px] object-cover group-hover:scale-[1.02] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                
                {/* Floating stat badge */}
                <div className="absolute bottom-5 left-5 right-5 sm:left-6 sm:right-auto">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-lg max-w-[260px]">
                    <div className="flex items-center gap-3 mb-2">
                      <TrendingUp className="w-5 h-5 text-destructive" />
                      <span className="font-display text-3xl sm:text-4xl font-bold text-primary">72%</span>
                    </div>
                    <p className="text-foreground/70 text-xs sm:text-[13px] leading-relaxed">
                      of critical pest incidents originate from infestations that were underestimated.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA card */}
              <a 
                href="#book" 
                className="group/cta flex items-center justify-between bg-primary/5 hover:bg-primary/10 border border-primary/15 rounded-2xl p-5 md:p-6 transition-all duration-300"
              >
                <div>
                  <p className="font-body font-semibold text-sm text-foreground mb-1">Don't let it escalate</p>
                  <p className="text-muted-foreground text-[13px]">Get a free assessment today</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0 group-hover/cta:scale-110 transition-transform">
                  <ChevronRight className="w-5 h-5 text-primary-foreground" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyActNow;