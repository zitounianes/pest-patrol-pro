import { motion } from "framer-motion";
import { Zap, MapPin, Clock, Phone } from "lucide-react";
import emergencyImg from "@/assets/emergency-response.jpg";

const cities = ["Murcia", "Cartagena", "Lorca", "Molina", "Alcantarilla", "Torre-Pacheco", "San Javier", "Cieza"];

const Emergency = () => {
  return (
    <section className="py-0 relative overflow-hidden">
      <div className="relative min-h-[600px] flex items-center">
        {/* Background */}
        <div className="absolute inset-0">
          <img src={emergencyImg} alt="Servicio de emergencia" className="w-full h-full object-cover" loading="lazy" width={1024} height={1024} />
          <div className="absolute inset-0 overlay-dark" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-destructive/20 border border-destructive/30 rounded-full px-5 py-2 mb-8">
              <Zap className="w-4 h-4 text-destructive" />
              <span className="text-sm text-destructive font-semibold">Servicio de Urgencia 24/7</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-[hsl(0,0%,100%)]">
              Llegamos en menos de
              <br />
              <span className="text-primary italic">60 minutos</span>
            </h2>

            <p className="text-[hsl(0,0%,80%)] text-lg mb-10 max-w-lg mx-auto">
              Equipo distribuido por toda la Región de Murcia. Disponibles incluyendo festivos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="#reservar"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-body font-semibold text-base shadow-glow-strong hover:brightness-110 transition-all"
              >
                <Zap className="w-5 h-5" />
                Solicitar intervención urgente
              </a>
              <a
                href="tel:+34000000000"
                className="inline-flex items-center justify-center gap-2 border-2 border-[hsl(0,0%,100%)]/20 text-[hsl(0,0%,100%)] px-8 py-4 rounded-full font-body font-medium text-base hover:border-primary/50 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Llamar ahora
              </a>
            </div>

            <div className="flex items-center justify-center gap-2 text-[hsl(0,0%,70%)] text-sm mb-4">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Cobertura en toda la Región de Murcia</span>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {cities.map((city) => (
                <span key={city} className="bg-[hsl(0,0%,100%)]/10 px-3 py-1.5 rounded-full text-xs text-[hsl(0,0%,85%)]">
                  {city}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Emergency;
