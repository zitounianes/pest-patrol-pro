import { Eye, Microscope, ShieldCheck } from "lucide-react";
import technicianInspecting from "@/assets/tech_montcarre.png";
import { useReveal } from "@/hooks/use-reveal";

const pillars = [
  { icon: Eye, title: "Intervención estratégica", description: "Procedimientos de baja disrupción que preservan la operatividad de su hogar o empresa." },
  { icon: Microscope, title: "Diagnóstico técnico", description: "Análisis exhaustivo de vectores y focos para aplicar la metodología más eficiente." },
  { icon: ShieldCheck, title: "Bioseguridad certificada", description: "Protocolos regulados y biocidas de última generación, sin riesgo para el entorno." },
];

const Excellence = () => {
  const ref = useReveal();

  return (
    <section className="py-16 md:py-24 relative bg-secondary/50" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-center max-w-6xl mx-auto">
          <div className="relative order-2 lg:order-1 reveal">
            <div className="rounded-2xl overflow-hidden shadow-cinematic">
              <img 
                src={technicianInspecting} 
                alt="Técnico profesional realizando inspección" 
                className="w-full h-[320px] sm:h-[450px] lg:h-[500px] object-cover object-bottom scale-[1.3] origin-bottom img-cinematic" 
                loading="lazy" 
                width={1024} 
                height={1024} 
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="mb-8 sm:mb-10 reveal reveal-delay-1 flex flex-col items-center text-center md:items-start md:text-left">
              <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em] mb-3 block">Metodología</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 leading-[1.2] md:leading-tight">
                Estándares de calidad<span className="text-primary">.</span>
                <br />
                <span className="text-muted-foreground font-normal italic">Eficacia garantizada.</span>
              </h2>
              <p className="text-muted-foreground text-[15px] sm:text-base leading-[1.6] md:leading-relaxed max-w-sm md:max-w-none">
                Rechazamos soluciones paliativas. Ejecutamos protocolos de erradicación estructurados que garantizan la seguridad sanitaria de sus espacios.
              </p>
            </div>

            <div className="space-y-3 reveal reveal-delay-2">
              {pillars.map((pillar, i) => (
                <div key={i} className="group flex gap-4 bg-card border border-border rounded-xl p-4 shadow-card hover:border-primary/25 transition-all duration-200">
                  <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-200">
                    <pillar.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-200" />
                  </div>
                  <div>
                    <h3 className="font-body font-semibold text-sm mb-0.5">{pillar.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{pillar.description}</p>
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
