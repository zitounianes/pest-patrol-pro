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
    <section id="articulos" className="py-28 relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">Blog</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            Guías sobre <span className="text-gradient-primary italic">prevención</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Mantente informado sobre cómo proteger tu hogar.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {articles.map((article, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="group bg-card border border-border rounded-3xl overflow-hidden shadow-card hover:shadow-cinematic hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              {/* Color bar */}
              <div className="h-2 bg-primary" />
              <div className="p-7">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-4xl">{article.emoji}</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {article.tag}
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg mb-3 group-hover:text-primary transition-colors leading-tight">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{article.desc}</p>
                <p className="text-xs text-muted-foreground font-medium">{article.date}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
