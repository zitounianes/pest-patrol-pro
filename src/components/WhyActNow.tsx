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
    <section className="py-28 relative" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-16 items-center">
            <div className="lg:col-span-3">
              <div className="mb-12 reveal">
                <span className="text-[hsl(var(--warm))] text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">Por qué actuar ahora</span>
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-5 leading-tight">
                  Las plagas no esperan<span className="text-primary">.</span>
                  <br />
                  <span className="text-muted-foreground font-normal italic">Tú tampoco deberías.</span>
                </h2>
              </div>

              <div className="space-y-4 reveal reveal-delay-1">
                {dangers.map((d, i) => (
                  <div key={i} className="flex items-start gap-5 p-5 rounded-2xl border border-border bg-card hover:border-destructive/20 transition-colors">
                    <div className="w-11 h-11 rounded-xl bg-destructive/8 flex items-center justify-center shrink-0 mt-0.5">
                      <AlertTriangle className="w-5 h-5 text-destructive" />
                    </div>
                    <div>
                      <h3 className="font-body font-semibold text-base mb-1">{d.title}</h3>
                      <p className="text-muted-foreground text-[15px] leading-relaxed">{d.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2 reveal reveal-delay-2">
              <div className="bg-accent text-accent-foreground rounded-3xl p-12 text-center shadow-cinematic">
                <TrendingUp className="w-10 h-10 text-[hsl(var(--warm))] mx-auto mb-5" />
                <span className="font-display text-7xl md:text-8xl font-bold block mb-3">72%</span>
                <p className="text-accent-foreground/60 text-base leading-relaxed max-w-xs mx-auto">
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
