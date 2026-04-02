import { useReveal } from "@/hooks/use-reveal";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const articles = [
  { emoji: "🪳", tag: "Prevención", title: "Cómo prevenir una infestación de cucarachas", desc: "Medidas preventivas eficaces para proteger tu hogar todo el año.", date: "Mar 2026", link: "/plagas/cucarachas" },
  { emoji: "🐀", tag: "Guía", title: "Señales de una plaga de roedores", desc: "Identifica los signos de presencia de ratas y ratones a tiempo.", date: "Feb 2026", link: "/plagas/roedores" },
  { emoji: "🪲", tag: "Información", title: "Termitas: el enemigo silencioso", desc: "Cómo detectarlas antes de que los daños sean irreversibles.", date: "Dic 2025", link: "/plagas/termitas" },
];

const Articles = () => {
  const ref = useReveal();

  return (
    <section id="articulos" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-14 reveal">
          <span className="text-[hsl(var(--warm))] text-xs font-semibold uppercase tracking-[0.2em] mb-3 block">Blog</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
            Guías de prevención<span className="text-primary">.</span>
          </h2>
          <p className="text-muted-foreground text-base">Mantente informado sobre cómo proteger tu hogar.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto reveal reveal-delay-1">
          {articles.map((article, i) => (
            <Link key={i} to={article.link} className="group bg-card border border-border rounded-2xl overflow-hidden shadow-card hover:shadow-cinematic hover:-translate-y-0.5 transition-all duration-300 block">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{article.emoji}</span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[hsl(var(--warm))] bg-[hsl(var(--warm),0.08)] px-2.5 py-0.5 rounded-full">{article.tag}</span>
                </div>
                <h3 className="font-body font-semibold text-base mb-2 group-hover:text-primary transition-colors leading-snug">{article.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{article.desc}</p>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-muted-foreground">{article.date}</p>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
