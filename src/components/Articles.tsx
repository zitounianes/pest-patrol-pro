import { useReveal } from "@/hooks/use-reveal";
import { Link } from "react-router-dom";
import { ArrowRight, Bug, Rat, TreeDeciduous } from "lucide-react";

const articles = [
  { icon: Bug, tag: "Prevención", title: "Cómo prevenir una infestación de cucarachas", desc: "Instrucciones detalladas para sellar accesos, gestionar residuos y aplicar medidas pasivas.", link: "/plagas/cucarachas", accent: "from-emerald-500/20 to-teal-500/10" },
  { icon: Rat, tag: "Guía Técnica", title: "Identificación de nidos de roedores", desc: "Aprende a localizar rápidamente los puntos críticos de anidación y zonas de tránsito habitual.", link: "/plagas/roedores", accent: "from-amber-500/20 to-orange-500/10" },
  { icon: TreeDeciduous, tag: "Análisis", title: "Termitas: el enemigo silencioso", desc: "Detección temprana de daños estructurales antes de que requieran intervenciones invasivas.", link: "/plagas/termitas", accent: "from-rose-500/20 to-pink-500/10" },
];

const Articles = () => {
  const ref = useReveal();

  return (
    <section id="articulos" className="py-24 md:py-32 relative overflow-hidden bg-[hsl(150,20%,97%)]" ref={ref}>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="text-primary/70 text-[11px] font-bold uppercase tracking-[0.3em] mb-4 block">Nuestro Blog</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-5 leading-[1.1] tracking-tight text-foreground">
            Guías de prevención<span className="text-primary">.</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            Artículos técnicos para asegurar la protección completa de tu entorno.
          </p>
        </div>

        <div className="flex md:grid md:grid-cols-3 gap-5 max-w-5xl mx-auto reveal reveal-delay-1 overflow-x-auto pb-6 -mx-4 px-4 md:overflow-visible md:pb-0 md:mx-auto md:px-0 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {articles.map((article, i) => {
            const Icon = article.icon;
            return (
              <Link
                key={i}
                to={article.link}
                className="group relative shrink-0 w-[80vw] sm:w-[340px] md:w-auto snap-center block rounded-2xl bg-white border border-border/60 p-7 md:p-8 hover:border-primary/30 hover:shadow-[0_8px_30px_-12px_hsl(152,40%,40%,0.15)] transition-all duration-400"
              >
                {/* Gradient blob background */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${article.accent} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon + Tag row */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/70 bg-secondary/80 px-2.5 py-1 rounded-md">{article.tag}</span>
                  </div>

                  <h3 className="font-display font-bold text-lg md:text-xl mb-3 text-foreground group-hover:text-primary transition-colors duration-300 leading-snug">{article.title}</h3>

                  <p className="text-[13px] md:text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">{article.desc}</p>

                  <div className="flex items-center gap-2 text-primary/70 group-hover:text-primary text-xs font-semibold uppercase tracking-wider transition-colors duration-300 mt-auto">
                    <span>Leer más</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Articles;
