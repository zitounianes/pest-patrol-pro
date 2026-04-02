import { Shield } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const CTA = () => {
  const ref = useReveal();

  return (
    <section id="contacto" className="py-24 relative overflow-hidden bg-accent" ref={ref}>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-xl mx-auto reveal">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-accent-foreground leading-tight">
            ¿Listo para eliminar
            <br /><span className="italic">el problema<span className="text-primary">?</span></span>
          </h2>
          <p className="text-accent-foreground/50 text-base mb-8 max-w-md mx-auto">
            No dejes que una infestación se convierta en una crisis. Recupera la tranquilidad hoy mismo.
          </p>
          <a href="#reservar" className="inline-flex items-center gap-2.5 bg-primary text-primary-foreground px-9 py-4 rounded-full font-body font-semibold text-base hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200 shadow-glow hover:shadow-glow-strong">
            <Shield className="w-5 h-5" />
            Solicitar Intervención
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
