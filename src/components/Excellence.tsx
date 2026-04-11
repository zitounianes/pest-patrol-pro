import { Eye, Microscope, ShieldCheck, CheckCircle2 } from "lucide-react";
import technicianInspecting from "@/assets/tech_environ.png";
import { useReveal } from "@/hooks/use-reveal";

const pillars = [
  { icon: Eye, title: "Strategic Intervention", description: "Low-disruption procedures that preserve the operability of your home or business.", color: "bg-blue-500/10 text-blue-600 group-hover:bg-blue-500" },
  { icon: Microscope, title: "Technical Diagnosis", description: "Thorough analysis of vectors and hotspots to apply the most efficient methodology.", color: "bg-amber-500/10 text-amber-600 group-hover:bg-amber-500" },
  { icon: ShieldCheck, title: "Certified Biosecurity", description: "Regulated protocols and cutting-edge biocides, safe for your environment.", color: "bg-emerald-500/10 text-emerald-600 group-hover:bg-emerald-500" },
];

const Excellence = () => {
  const ref = useReveal();

  return (
    <section className="py-20 md:py-28 relative bg-secondary/50 overflow-hidden" ref={ref}>
      {/* Decorative circle */}
      <div className="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-primary/[0.03] blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Image side */}
          <div className="relative order-2 lg:order-1 reveal">
            <div className="rounded-3xl overflow-hidden shadow-cinematic group">
              <img 
                src={technicianInspecting} 
                alt="Professional technician performing inspection" 
                className="w-full h-[320px] sm:h-[420px] lg:h-[480px] object-cover object-bottom group-hover:scale-[1.02] transition-transform duration-700" 
                loading="lazy" 
                width={1024} 
                height={1024} 
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-2 sm:bottom-6 sm:right-6 bg-white rounded-2xl p-3.5 sm:p-4 shadow-lg border border-border/50 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-body font-bold text-sm text-foreground">100%</p>
                <p className="text-muted-foreground text-xs">Satisfaction guaranteed</p>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div className="order-1 lg:order-2">
            <div className="mb-8 sm:mb-10 reveal reveal-delay-1 flex flex-col items-center text-center md:items-start md:text-left">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 mb-5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span className="text-[11px] font-bold uppercase tracking-[0.15em]">Methodology</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold mb-4 leading-[1.15]">
                Quality standards<span className="text-primary">.</span>
                <br />
                <span className="text-muted-foreground font-normal italic">Guaranteed effectiveness.</span>
              </h2>
              <p className="text-muted-foreground text-[15px] sm:text-base leading-[1.7] max-w-sm md:max-w-none">
                We reject palliative solutions. We execute structured eradication protocols that guarantee the sanitary safety of your spaces.
              </p>
            </div>

            <div className="space-y-3 reveal reveal-delay-2">
              {pillars.map((pillar, i) => (
                <div key={i} className="group flex gap-4 bg-card border border-border rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${pillar.color}`}>
                    <pillar.icon className="w-5 h-5 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-body font-semibold text-[15px] mb-1 text-foreground">{pillar.title}</h3>
                    <p className="text-muted-foreground text-[13px] sm:text-sm leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Excellence;