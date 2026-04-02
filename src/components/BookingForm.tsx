import { useState } from "react";
import { Phone, MessageCircle, CheckCircle2 } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const pestTypes = [
  { emoji: "🐀", label: "Ratas" },
  { emoji: "🪳", label: "Cucarachas" },
  { emoji: "🐜", label: "Hormigas" },
  { emoji: "🦟", label: "Mosquitos" },
  { emoji: "🪲", label: "Termitas" },
  { emoji: "🔬", label: "Otros" },
];

const PHONE_NUMBER = "+34000000000";
const WHATSAPP_NUMBER = "34000000000";

const BookingForm = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const ref = useReveal();

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hola MONTCARRE, necesito ayuda con: ${selected || "plagas"}. Me gustaría reservar una cita.`
  )}`;

  return (
    <section id="reservar" className="py-28 relative bg-secondary/50" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className="reveal">
            <span className="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">Reservar</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-5 leading-tight">
              Tu tranquilidad
              <br /><span className="text-muted-foreground font-normal italic">comienza aquí.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Elige el tipo de plaga y contacta con nosotros de la forma que prefieras.
            </p>
            <div className="space-y-3">
              {["Presupuesto gratuito", "Sin compromiso", "Respuesta inmediata"].map((text) => (
                <div key={text} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-base font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal reveal-delay-1">
            <div className="bg-card border border-border rounded-3xl p-8 shadow-cinematic">
              <p className="font-body font-semibold text-lg mb-6 text-center">¿Qué plaga tienes?</p>
              <div className="grid grid-cols-3 gap-3 mb-8">
                {pestTypes.map((pest) => (
                  <button key={pest.label} onClick={() => setSelected(pest.label)}
                    className={`flex flex-col items-center gap-2 p-5 rounded-2xl border-2 transition-all duration-150 ${
                      selected === pest.label ? "border-primary bg-primary/8 shadow-glow" : "border-border hover:border-primary/20 bg-card"
                    }`}>
                    <span className="text-3xl">{pest.emoji}</span>
                    <span className="text-sm font-semibold">{pest.label}</span>
                  </button>
                ))}
              </div>

              <div className="space-y-3">
                <a href={`tel:${PHONE_NUMBER}`}
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-destructive text-destructive-foreground px-8 py-4 rounded-full font-body font-semibold text-base hover:brightness-110 transition-all">
                  <Phone className="w-5 h-5" />
                  Urgencia — Llamar ahora
                </a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-primary text-primary-foreground px-8 py-4 rounded-full font-body font-semibold text-base shadow-glow hover:shadow-glow-strong hover:brightness-105 transition-all">
                  <MessageCircle className="w-5 h-5" />
                  Reservar cita por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
