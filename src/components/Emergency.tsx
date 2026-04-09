import { Zap, MapPin, Phone } from "lucide-react";
import emergencyVan from "@/assets/emergency-van.png";
import { useReveal } from "@/hooks/use-reveal";

const areas = ["Central London", "North London", "South London", "East London", "West London", "Fulham", "Chelsea", "Kensington"];

const Emergency = () => {
  const ref = useReveal();

  return (
    <section className="py-0 relative overflow-hidden" ref={ref}>
      <div className="relative min-h-[480px] flex items-center">
        <div className="absolute inset-0">
          <img src={emergencyVan} alt="Environ emergency service" className="w-full h-full object-cover" loading="lazy" width={1024} height={576} />
          <div className="absolute inset-0 overlay-dark" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 py-20">
          <div className="max-w-2xl mx-auto text-center reveal">
            <div className="inline-flex items-center gap-2 bg-destructive/15 border border-destructive/25 rounded-full px-4 py-1.5 mb-6">
              <Zap className="w-3.5 h-3.5 text-destructive" />
              <span className="text-xs text-destructive font-semibold uppercase tracking-wider">24/7 Emergency</span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[hsl(0,0%,100%)] leading-tight">
              Fast response for
              <br />
              <span className="text-primary italic">your emergency</span>
            </h2>

            <p className="text-[hsl(0,0%,100%,0.55)] text-base mb-8 max-w-md mx-auto">
              Our team covers all of London. Available including weekends and bank holidays.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
              <a href="tel:+442038758225" className="inline-flex items-center justify-center gap-2 bg-destructive text-destructive-foreground px-7 py-3.5 rounded-full font-body font-semibold text-sm hover:brightness-110 transition-all">
                <Phone className="w-4 h-4" />
                Call: 020 3875 8225
              </a>
              <a href={`https://wa.me/442038758225?text=${encodeURIComponent("Hi Environ, I have a pest emergency and need urgent help.")}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border border-[hsl(0,0%,100%,0.15)] text-[hsl(0,0%,100%,0.85)] px-7 py-3.5 rounded-full font-body font-medium text-sm hover:border-[hsl(0,0%,100%,0.3)] transition-colors">
                WhatsApp Us
              </a>
            </div>

            <div className="flex items-center justify-center gap-2 text-[hsl(0,0%,100%,0.45)] text-xs mb-3">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              <span>Coverage across Greater London</span>
            </div>
            <div className="flex flex-wrap justify-center gap-1.5">
              {areas.map((area) => (
                <span key={area} className="bg-[hsl(0,0%,100%,0.07)] px-3 py-1 rounded-full text-[11px] text-[hsl(0,0%,100%,0.5)]">{area}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Emergency;
