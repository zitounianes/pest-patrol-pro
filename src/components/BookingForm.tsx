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

const PHONE_NUMBER = "+34643395654";
const WHATSAPP_NUMBER = "34643395654";

const BookingForm = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const ref = useReveal();

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hola MONTCARRE, necesito ayuda para un control de plagas. Me gustaría solicitar un presupuesto gratuito.`
  )}`;

  return (
    <section id="reservar" className="py-16 md:py-24 relative" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="bg-gradient-to-br from-[hsl(220,15%,12%)] to-[hsl(220,15%,6%)] border border-[hsl(0,0%,100%,0.08)] rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] p-5 sm:p-8 md:p-12 lg:p-16 shadow-cinematic text-[hsl(0,0%,100%)] relative overflow-hidden max-w-6xl mx-auto">
          {/* Background glows */}
          <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-primary/30 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-80 h-80 bg-[hsl(var(--warm))]/20 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="grid lg:grid-cols-2 gap-10 xl:gap-14 items-center relative z-10">
            <div className="reveal">
              <span className="text-primary text-xs font-bold uppercase tracking-[0.25em] mb-4 block drop-shadow-sm">Reservar</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-[1.15]">
                Tu tranquilidad
                <br /><span className="text-[hsl(0,0%,100%,0.6)] font-normal italic">comienza aquí.</span>
              </h2>
              <p className="text-[hsl(0,0%,100%,0.7)] text-[15px] sm:text-base leading-relaxed mb-8 max-w-md">
                Contacta directamente con nuestros especialistas de la forma que prefieras. Sin formularios largos ni esperas.
              </p>
              <div className="space-y-4">
                {["Presupuesto gratuito", "Sin compromiso", "Atención rápida y profesional"].map((text) => (
                  <div key={text} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-[15px] font-medium text-[hsl(0,0%,100%,0.85)]">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal reveal-delay-1 scroll-mt-28" id="contacto-directo">
              <div className="bg-[hsl(0,0%,100%,0.03)] backdrop-blur-xl border border-[hsl(0,0%,100%,0.1)] rounded-[1.5rem] md:rounded-[2rem] p-5 sm:p-8 md:p-10 shadow-cinematic h-full flex flex-col justify-center">
                
                <div className="text-center mb-8 md:mb-10">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-[hsl(220,15%,12%)] rounded-full flex items-center justify-center mx-auto mb-4 md:mb-5 border border-[hsl(0,0%,100%,0.08)] shadow-soft relative">
                    <div className="absolute inset-0 rounded-full bg-primary/20 blur-md" />
                    <Phone className="w-6 h-6 md:w-8 md:h-8 text-primary relative z-10" />
                  </div>
                  <h3 className="font-display font-bold text-xl md:text-2xl text-[hsl(0,0%,100%,0.95)] mb-2 md:mb-3">Contacto Directo</h3>
                  <p className="text-[13px] md:text-[15px] text-[hsl(0,0%,100%,0.6)] px-1 md:px-6 leading-relaxed">
                    Nuestros expertos están listos para atenderte 24/7. Llámanos o escríbenos para recibir asistencia inmediata.
                  </p>
                </div>

                <div className="space-y-3.5 mt-auto">
                  <a href={`tel:${PHONE_NUMBER}`}
                    className="w-full relative group overflow-hidden inline-flex items-center justify-center gap-2 bg-[hsl(var(--destructive))] text-white px-4 py-3.5 md:px-6 md:py-4 rounded-full font-body font-bold text-[13px] md:text-[14px] shadow-lg hover:shadow-[0_0_20px_hsl(var(--destructive)/0.4)] transition-all duration-300 transform hover:-translate-y-0.5 whitespace-nowrap">
                    <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    <Phone className="w-4 h-4 relative z-10 shrink-0" />
                    <span className="relative z-10">Llamar: {PHONE_NUMBER}</span>
                  </a>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                    className="w-full relative group overflow-hidden inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-3.5 md:px-6 md:py-4 rounded-full font-body font-bold text-[13px] md:text-[14px] shadow-glow hover:shadow-glow-strong transition-all duration-300 transform hover:-translate-y-0.5 whitespace-nowrap">
                    <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    <MessageCircle className="w-4 h-4 relative z-10 shrink-0" />
                    <span className="relative z-10">WhatsApp: +{WHATSAPP_NUMBER}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
