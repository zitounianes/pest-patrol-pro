import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield } from "lucide-react";

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

  return (
    <section id="reservar" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/20" />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Reserva tu <span className="text-gradient-primary">Intervención</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Tu tranquilidad comienza aquí. Proceso rápido y sencillo.
          </p>

          <div className="bg-gradient-card border border-border rounded-2xl p-8">
            <p className="font-display font-semibold mb-6 text-lg">¿Qué plaga tienes?</p>
            <div className="grid grid-cols-3 gap-3 mb-8">
              {pestTypes.map((pest) => (
                <button
                  key={pest.label}
                  onClick={() => setSelected(pest.label)}
                  className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-all duration-200 ${
                    selected === pest.label
                      ? "border-primary bg-primary/10 shadow-glow"
                      : "border-border hover:border-primary/30"
                  }`}
                >
                  <span className="text-2xl">{pest.emoji}</span>
                  <span className="text-sm font-medium">{pest.label}</span>
                </button>
              ))}
            </div>

            <button
              className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-display font-semibold text-lg shadow-glow hover:shadow-glow-strong hover:brightness-110 transition-all disabled:opacity-40"
              disabled={!selected}
            >
              <Shield className="w-5 h-5" />
              Siguiente
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingForm;
