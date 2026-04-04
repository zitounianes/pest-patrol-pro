import { AlertTriangle, TrendingUp } from "lucide-react";
import heroPestSpray from "@/assets/branded_sprayer.png";
import { useReveal } from "@/hooks/use-reveal";

const dangers = [
  { title: "Crecimiento Exponencial", desc: "Multiplicación drástica de la población en cuestión de semanas." },
  { title: "Riesgo Epidemiológico", desc: "Vectores de patógenos severos que comprometen la salud ambiental." },
  { title: "Pérdidas Materiales", desc: "Deterioro de infraestructuras, cableado y contaminación de bienes." },
  { title: "Ineficacia No Profesional", desc: "Soluciones domésticas que solo dispersan la plaga sin erradicarla." },
  { title: "Agravamiento del Problema", desc: "La inacción prolongada requiere intervenciones mucho más invasivas." },
];

const WhyActNow = () => {
  const ref = useReveal();

  return (
    <section className="py-16 md:py-24 relative" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-10 reveal flex flex-col items-center text-center md:items-start md:text-left">
            <span className="text-[hsl(var(--warm))] text-xs font-semibold uppercase tracking-[0.2em] mb-3 block">Por qué actuar ahora</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.2] md:leading-tight">
              Las plagas no esperan<span className="text-primary">.</span>
              <br />
              <span className="text-muted-foreground font-normal italic">Tú tampoco deberías.</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-14">
            {/* Left: Dangers List */}
            <div className="flex flex-col gap-4 reveal reveal-delay-1">
              {dangers.map((d, i) => (
                <div key={i} className="flex items-center gap-4 p-5 md:p-6 rounded-2xl border border-border bg-card hover:border-destructive/20 transition-all duration-300 group shadow-sm hover:shadow-md">
                  <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center shrink-0">
                    <AlertTriangle className="w-5 h-5 text-destructive" />
                  </div>
                  <div>
                    <p className="text-sm md:text-base leading-relaxed text-foreground">
                      <span className="font-body font-semibold">{d.title}: </span>
                      <span className="text-muted-foreground">{d.desc}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Image and Statistic card */}
            <div className="flex flex-col gap-6 reveal reveal-delay-2 h-full lg:h-auto justify-center">
              {/* Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-cinematic h-[280px] md:h-[360px] lg:h-[400px] shrink-0">
                <img 
                  src={heroPestSpray} 
                  alt="Técnico aplicando tratamiento especializado" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* 72% Card */}
              <div className="bg-card border border-border rounded-3xl p-8 md:p-10 text-center shadow-card relative overflow-hidden flex-shrink-0">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <TrendingUp className="w-8 h-8 text-[hsl(var(--destructive))]" />
                  <span className="font-display text-5xl md:text-7xl font-bold text-[hsl(var(--primary))]">72%</span>
                </div>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-sm mx-auto font-medium">
                  de las incidencias críticas provienen de infestaciones iniciales que fueron subestimadas o mal tratadas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyActNow;
