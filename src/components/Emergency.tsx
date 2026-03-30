import { motion } from "framer-motion";
import { Zap, MapPin } from "lucide-react";
import emergencyImg from "@/assets/emergency-response.jpg";

const cities = [
  "Murcia", "Cartagena", "Lorca", "Molina", "Alcantarilla",
  "Torre-Pacheco", "San Javier", "Cieza",
];

const Emergency = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={emergencyImg}
          alt="Servicio de emergencia"
          className="w-full h-full object-cover img-cinematic"
          loading="lazy"
          width={1024}
          height={1024}
        />
        <div className="absolute inset-0 bg-foreground/85" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 bg-destructive/20 border border-destructive/30 rounded-full px-4 py-1.5 mb-6">
            <Zap className="w-4 h-4 text-destructive" />
            <span className="text-sm text-destructive font-medium">Servicio de Urgencia</span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-background">
            Emergencias en toda la Región de Murcia
          </h2>

          <div className="bg-background/10 backdrop-blur-md border border-background/20 rounded-2xl p-8 mt-10 mb-8">
            <div className="font-display text-6xl font-bold text-primary mb-2">60 min</div>
            <p className="text-background/90 text-lg mb-6">Tiempo máximo de llegada</p>
            <p className="text-background/70 text-sm max-w-md mx-auto">
              Nuestro equipo está distribuido por toda la región para garantizar una respuesta rápida. Disponibles 24/7, incluyendo festivos.
            </p>
          </div>

          <a
            href="#reservar"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-display font-semibold text-lg shadow-glow-strong hover:brightness-110 transition-all mb-10"
          >
            <Zap className="w-5 h-5" />
            Solicitar intervención urgente
          </a>

          <div className="flex items-center justify-center gap-2 text-background/70 text-sm mb-4">
            <MapPin className="w-4 h-4 text-primary" />
            <span>Región de Murcia</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {cities.map((city) => (
              <span key={city} className="bg-background/10 backdrop-blur-sm border border-background/20 px-3 py-1.5 rounded-full text-xs text-background/80">
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
