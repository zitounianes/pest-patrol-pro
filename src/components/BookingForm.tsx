import { useState } from "react";
import { ArrowRight, Shield, CheckCircle2 } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const pestTypes = [
  { emoji: "🐀", label: "Ratas" },
  { emoji: "🪳", label: "Cucarachas" },
  { emoji: "🐜", label: "Hormigas" },
  { emoji: "🦟", label: "Mosquitos" },
  { emoji: "🪲", label: "Termitas" },
  { emoji: "🔬", label: "Otros" },
];

const BookingForm = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const ref = useReveal();

  return (
    <section id="reservar" className="py-28 relative bg-muted/50" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className="reveal">
            <span className="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">Reservar</span>
            <h2 className="font-display text-4xl md:text-5xl font-black mb-6">
              Tu tranquilidad<br /><span className="text-gradient-primary italic">comienza aquí.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Proceso rápido y sencillo. Selecciona el tipo de plaga y te contactamos en menos de 30 minutos.
            </p>
            <div className="space-y-3">
              {["Presupuesto gratuito", "Sin compromiso", "Respuesta inmediata"].map((text) => (
                <div key={text} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal reveal-delay-1">
            <div className="bg-card border border-border rounded-3xl p-8 shadow-cinematic">
              <p className="font-display font-bold text-xl mb-6 text-center">¿Qué plaga tienes?</p>
              <div className="grid grid-cols-3 gap-3 mb-8">
                {pestTypes.map((pest) => (
                  <button key={pest.label} onClick={() => setSelected(pest.label)}
                    className={`flex flex-col items-center gap-2 p-5 rounded-2xl border-2 transition-all duration-150 ${
                      selected === pest.label ? "border-primary bg-primary/10 shadow-glow" : "border-border hover:border-primary/30 bg-card"
                    }`}>
                    <span className="text-3xl">{pest.emoji}</span>
                    <span className="text-sm font-semibold">{pest.label}</span>
                  </button>
                ))}
              </div>
              <button className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-body font-semibold text-base shadow-glow hover:shadow-glow-strong hover:brightness-110 transition-all disabled:opacity-40 disabled:cursor-not-allowed" disabled={!selected}>
                <Shield className="w-5 h-5" />
                Solicitar presupuesto
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
