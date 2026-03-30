import { motion } from "framer-motion";
import { Zap, MapPin } from "lucide-react";

const cities = [
  "Murcia", "Cartagena", "Lorca", "Molina", "Alcantarilla",
  "Torre-Pacheco", "San Javier", "Cieza",
];

const Emergency = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-destructive/5 blur-[100px]" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 bg-destructive/10 border border-destructive/20 rounded-full px-4 py-1.5 mb-6">
            <Zap className="w-4 h-4 text-destructive" />
            <span className="text-sm text-destructive font-medium">Servicio de Urgencia</span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Emergencias en toda la <span className="text-gradient-primary">Región de Murcia</span>
          </h2>

          <div className="bg-gradient-card border border-border rounded-2xl p-8 mt-10 mb-8">
            <div className="font-display text-6xl font-bold text-accent mb-2">60 min</div>
            <p className="text-muted-foreground text-lg mb-6">Tiempo máximo de llegada</p>
            <p className="text-muted-foreground text-sm max-w-md mx-auto">
              Nuestro equipo está distribuido por toda la región para garantizar una respuesta rápida. Disponibles 24/7, incluyendo festivos.
            </p>
          </div>

          <a
            href="#reservar"
            className="inline-flex items-center gap-2 bg-destructive text-destructive-foreground px-8 py-4 rounded-lg font-display font-semibold text-lg hover:brightness-110 transition-all mb-10"
          >
            <Zap className="w-5 h-5" />
            Solicitar intervención urgente
          </a>

          <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm mb-4">
            <MapPin className="w-4 h-4 text-primary" />
            <span>Región de Murcia</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {cities.map((city) => (
              <span key={city} className="bg-secondary px-3 py-1.5 rounded-full text-xs text-secondary-foreground">
                {city}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Emergency;
