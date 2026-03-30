import { motion } from "framer-motion";
import { Eye, Microscope, ShieldCheck } from "lucide-react";
import happyFamily from "@/assets/happy-family.jpg";

const pillars = [
  {
    icon: Eye,
    title: "Protección Invisible",
    description: "Métodos discretos que actúan sin alterar tu día a día.",
  },
  {
    icon: Microscope,
    title: "Precisión Científica",
    description: "Diagnóstico exacto y erradicación desde el origen.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad Total",
    description: "Protocolos inofensivos para tu entorno y familia.",
  },
];

const Excellence = () => {
  return (
    <section className="py-28 relative bg-muted/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="relative order-2 lg:order-1"
          >
            <div className="rounded-3xl overflow-hidden shadow-cinematic">
              <img
                src={happyFamily}
                alt="Familia feliz en su hogar protegido"
                className="w-full h-[450px] object-cover img-cinematic"
                loading="lazy"
                width={1024}
                height={1024}
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 left-8 bg-primary text-primary-foreground rounded-2xl px-6 py-4 shadow-glow-strong">
              <div className="font-display text-2xl font-black">+500</div>
              <div className="text-sm opacity-90">familias protegidas</div>
            </div>
          </motion.div>

          {/* Content side */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <span className="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">Excelencia</span>
              <h2 className="font-display text-4xl md:text-5xl font-black mb-4">
                Tu tranquilidad,{" "}
                <span className="text-gradient-primary italic">nuestra misión.</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                No vendemos tratamientos temporales. Restauramos la seguridad de tu entorno con resultados definitivos.
              </p>
            </motion.div>

            <div className="space-y-5">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="group flex gap-5 bg-card border border-border rounded-2xl p-5 shadow-card hover:border-primary/30 hover:shadow-glow transition-all duration-200"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
                    <pillar.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-200" />
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
