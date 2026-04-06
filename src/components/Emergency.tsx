import { Zap, MapPin, Phone } from "lucide-react";
import emergencyVan from "@/assets/emergency-van.png";
import { useReveal } from "@/hooks/use-reveal";

const cities = ["Murcia", "Cartagena", "Lorca", "Molina", "Alcantarilla", "Torre-Pacheco", "San Javier", "Cieza"];

const Emergency = () => {
  const ref = useReveal();

  return (
    <section className="py-0 relative overflow-hidden" ref={ref}>
      <div className="relative min-h-[480px] flex items-center">
        <div className="absolute inset-0">
          <img src={emergencyVan} alt="Servicio de emergencia MONTCARRE" className="w-full h-full object-cover" loading="lazy" width={1024} height={576} />
          <div className="absolute inset-0 overlay-dark" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 py-20">
          <div className="max-w-2xl mx-auto text-center reveal">
            <div className="inline-flex items-center gap-2 bg-destructive/15 border border-destructive/25 rounded-full px-4 py-1.5 mb-6">
              <Zap className="w-3.5 h-3.5 text-destructive" />
              <span className="text-xs text-destructive font-semibold uppercase tracking-wider">Urgencia 24/7</span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[hsl(0,0%,100%)] leading-tight">
              Atención rápida para
              <br />
              <span className="text-primary italic">su emergencia</span>
            </h2>

            <p className="text-[hsl(0,0%,100%,0.55)] text-base mb-8 max-w-md mx-auto">
              Equipo distribuido por toda la Región de Murcia. Disponibles incluyendo festivos.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
              <a href="tel:+34643395654" className="inline-flex items-center justify-center gap-2 bg-destructive text-destructive-foreground px-7 py-3.5 rounded-full font-body font-semibold text-sm hover:brightness-110 transition-all">
                <Phone className="w-4 h-4" />
                Llamar: +34 643 39 56 54
              </a>
              <a href={`https://wa.me/34643395654?text=${encodeURIComponent("Hola MONTCARRE, tengo una urgencia de plagas.")}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border border-[hsl(0,0%,100%,0.15)] text-[hsl(0,0%,100%,0.85)] px-7 py-3.5 rounded-full font-body font-medium text-sm hover:border-[hsl(0,0%,100%,0.3)] transition-colors">
                WhatsApp: +34 643 39 56 54
              </a>
            </div>

            <div className="flex items-center justify-center gap-2 text-[hsl(0,0%,100%,0.45)] text-xs mb-3">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              <span>Cobertura en toda la Región de Murcia</span>
            </div>
            <div className="flex flex-wrap justify-center gap-1.5">
              {cities.map((city) => (
                <span key={city} className="bg-[hsl(0,0%,100%,0.07)] px-3 py-1 rounded-full text-[11px] text-[hsl(0,0%,100%,0.5)]">{city}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Emergency;
