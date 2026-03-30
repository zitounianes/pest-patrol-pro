import { motion } from "framer-motion";
import { Eye, Microscope, ShieldCheck } from "lucide-react";
import professionalImg from "@/assets/professional-service.jpg";

const pillars = [
  {
    icon: Eye,
    title: "Protección Invisible",
    description: "Métodos discretos que actúan sin alterar tu día a día.",
  },
  {
    icon: Microscope,
    title: "Precisión Científica",
    description: "Diagnóstico exacto y erradicación desde el origen del problema.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad Total",
    description: "Protocolos estrictos inofensivos para tu entorno y familia.",
  },
];

const Excellence = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-glow border border-primary/10">
              <img
                src={professionalImg}
                alt="Servicio profesional de control de plagas"
                className="w-full h-[400px] object-cover img-cinematic"
                loading="lazy"
                width={1024}
                height={1024}
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground rounded-xl px-6 py-3 font-display font-bold shadow-glow">
              +10 años de experiencia
            </div>
          </motion.div>

          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Excelencia Profesional</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
                Tranquilidad absoluta. <span className="text-gradient-primary">Cero compromisos.</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                No vendemos tratamientos temporales. Restauramos la seguridad de tu entorno con precisión silenciosa y resultados definitivos.
              </p>
            </motion.div>

            <div className="space-y-5">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="group flex gap-5 bg-card border border-border rounded-xl p-5 shadow-card hover:border-primary/30 hover:shadow-glow transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <pillar.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold mb-1">{pillar.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{pillar.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Excellence;
