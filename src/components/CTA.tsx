import { Shield } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const CTA = () => {
  const ref = useReveal();

  return (
    <section id="contacto" className="py-28 relative overflow-hidden bg-primary" ref={ref}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[hsl(0,0%,100%)] blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[hsl(0,0%,100%)] blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto reveal">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-primary-foreground">
            ¿Listo para eliminar<br /><span className="italic">el problema?</span>
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-lg mx-auto">
            No dejes que una infestación se convierta en una crisis. Recupera la tranquilidad hoy mismo.
          </p>
          <a href="#reservar" className="inline-flex items-center gap-3 bg-primary-foreground text-primary px-10 py-5 rounded-full font-display font-bold text-xl hover:scale-[1.03] active:scale-[0.98] transition-transform duration-200 shadow-cinematic">
            <Shield className="w-6 h-6" />
            Solicitar Intervención
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
