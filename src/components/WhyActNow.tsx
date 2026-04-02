import { AlertTriangle, TrendingUp } from "lucide-react";
import professionalService from "@/assets/professional-service.jpg";
import { useReveal } from "@/hooks/use-reveal";

const dangers = [
  "Crecimiento Exponencial: Multiplicación drástica de la población en cuestión de semanas.",
  "Riesgo Epidemiológico: Vectores de patógenos severos que comprometen la salud ambiental.",
  "Pérdidas Materiales: Deterioro de infraestructuras, cableado y contaminación de bienes.",
  "Ineficacia No Profesional: Soluciones domésticas que solo dispersan la plaga sin erradicarla.",
  "Agravamiento del Problema: La inacción prolongada requiere intervenciones mucho más invasivas.",
];

const WhyActNow = () => {
  const ref = useReveal();

  return (
    <section className="py-28 relative" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-20 reveal">
          <span className="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">Urgencia</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            La vital importancia de una intervención <span className="text-gradient-primary italic">profesional</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ignorar la presencia de vectores no solo agrava exponencialmente la infestación, sino que compromete de forma severa la bioseguridad y salubridad del entorno.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className="space-y-4 reveal reveal-delay-1">
            {dangers.map((danger, i) => (
              <div key={i} className="flex items-center gap-4 bg-card border border-border rounded-2xl p-5 shadow-card hover:border-destructive/20 transition-colors group">
                <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                </div>
                <span className="text-foreground font-medium">{danger}</span>
              </div>
            ))}
          </div>

          <div className="space-y-6 reveal reveal-delay-2">
            <div className="rounded-3xl overflow-hidden shadow-cinematic">
              <img src={professionalService} alt="Servicio profesional de control de plagas y diagnosis" className="w-full h-64 object-cover img-cinematic" loading="lazy" width={1024} height={1024} />
            </div>
            <div className="bg-card border border-border rounded-3xl p-8 text-center shadow-cinematic">
              <div className="flex items-center justify-center gap-3 mb-3">
                <TrendingUp className="w-8 h-8 text-destructive" />
                <span className="font-display text-6xl font-black text-gradient-primary">72%</span>
              </div>
              <p className="text-muted-foreground text-lg max-w-md mx-auto">
                de las incidencias críticas provienen de infestaciones iniciales que fueron subestimadas o mal tratadas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyActNow;
