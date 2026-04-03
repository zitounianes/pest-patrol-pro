import { AlertTriangle, TrendingUp } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const dangers = [
  { title: "Crecimiento exponencial", desc: "Multiplicación drástica de la población en cuestión de semanas." },
  { title: "Riesgo sanitario", desc: "Vectores de patógenos que comprometen la salud de tu entorno." },
  { title: "Daños materiales", desc: "Deterioro de infraestructuras, cableado y contaminación de bienes." },
  { title: "Soluciones ineficaces", desc: "Los remedios caseros solo dispersan la plaga sin erradicarla." },
];

const WhyActNow = () => {
  const ref = useReveal();

  return (
    <section className="py-16 md:py-24 relative" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-10 md:gap-14 items-center">
            {/* Left: Content */}
            <div className="lg:col-span-3">
              <div className="mb-10 reveal flex flex-col items-center text-center md:items-start md:text-left">
                <span className="text-[hsl(var(--warm))] text-xs font-semibold uppercase tracking-[0.2em] mb-3 block">Por qué actuar ahora</span>
                <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold mb-4 leading-[1.2] md:leading-tight">
                  Las plagas no esperan<span className="text-primary">.</span>
                  <br />
                  <span className="text-muted-foreground font-normal italic">Tú tampoco deberías.</span>
                </h2>
              </div>

              <div className="space-y-3 reveal reveal-delay-1">
                {dangers.map((d, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-border bg-card hover:border-destructive/20 transition-colors group">
                    <div className="w-9 h-9 rounded-lg bg-destructive/8 flex items-center justify-center shrink-0 mt-0.5">
                      <AlertTriangle className="w-4 h-4 text-destructive" />
                    </div>
                    <div>
                      <h3 className="font-body font-semibold text-sm mb-0.5">{d.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{d.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Statistic card */}
            <div className="lg:col-span-2 reveal reveal-delay-2">
              <div className="bg-gradient-to-b from-accent to-accent/90 border border-primary/20 text-accent-foreground rounded-3xl p-8 md:p-10 text-center shadow-cinematic relative overflow-hidden">
                <div className="absolute top-0 right-0 -m-8 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
                <TrendingUp className="w-8 h-8 text-[hsl(var(--warm))] mx-auto mb-4 relative z-10" />
                <span className="font-display text-6xl md:text-7xl font-bold block mb-2 relative z-10">72%</span>
                <p className="text-accent-foreground/60 text-sm leading-relaxed max-w-xs mx-auto relative z-10">
                  de las infestaciones críticas provienen de problemas iniciales que fueron subestimados.
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
