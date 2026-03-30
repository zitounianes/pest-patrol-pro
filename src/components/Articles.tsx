import { motion } from "framer-motion";

const articles = [
  {
    emoji: "🪳",
    tag: "Prevención",
    title: "Cómo prevenir una infestación de cucarachas en tu hogar",
    desc: "Descubre las medidas preventivas más eficaces para proteger tu hogar todo el año.",
    date: "Mar 2026",
  },
  {
    emoji: "🐀",
    tag: "Guía",
    title: "Señales de una plaga de roedores",
    desc: "Identifica los signos de presencia de ratas y ratones a tiempo.",
    date: "Feb 2026",
  },
  {
    emoji: "🪲",
    tag: "Información",
    title: "Termitas: el enemigo silencioso",
    desc: "Los daños que causan y cómo detectarlas antes de que sea tarde.",
    date: "Dic 2025",
  },
];

const Articles = () => {
  return (
    <section id="articulos" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Artículos y Consejos</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Guías útiles sobre <span className="text-gradient-primary">prevención</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Mantente informado sobre cómo proteger tu hogar.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {articles.map((article, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group bg-gradient-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-glow transition-all duration-300 cursor-pointer"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{article.emoji}</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                    {article.tag}
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{article.desc}</p>
                <p className="text-xs text-muted-foreground">{article.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
