import { useReveal } from "@/hooks/use-reveal";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const articles = [
  { emoji: "🪳", tag: "Prevención", title: "Cómo prevenir una infestación \nde cucarachas", desc: "Instrucciones detalladas para sellar accesos, gestionar residuos y aplicar medidas pasivas.", link: "/plagas/cucarachas" },
  { emoji: "🐀", tag: "Guía Técnica", title: "Identificación de nidos \nde roedores", desc: "Aprende a localizar rápidamente los puntos críticos de anidación y zonas de tránsito habitual.", link: "/plagas/roedores" },
  { emoji: "🪲", tag: "Análisis", title: "Termitas: el enemigo \nsilencioso", desc: "Detección temprana de daños estructurales antes de que requieran intervenciones invasivas.", link: "/plagas/termitas" },
];

const Articles = () => {
  const ref = useReveal();

  return (
    <section id="articulos" className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-background via-secondary/30 to-background" ref={ref}>
      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="text-[hsl(var(--warm))] text-[11px] font-bold uppercase tracking-[0.3em] mb-4 block">Nuestro Blog</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold mb-5 leading-[1.1] tracking-tight">
            Guías de prevención<span className="text-primary">.</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-[17px] leading-relaxed max-w-xl mx-auto">
            Mantente informado con nuestros artículos técnicos sobre cómo asegurar la protección completa de tu entorno.
          </p>
        </div>

        <div className="flex md:grid md:grid-cols-3 gap-6 max-w-6xl mx-auto reveal reveal-delay-1 overflow-x-auto pb-8 -mx-4 px-4 md:overflow-visible md:pb-0 md:mx-auto md:px-0 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {articles.map((article, i) => (
            <Link key={i} to={article.link} className="group bg-card border border-border/80 rounded-[1.5rem] overflow-hidden shadow-soft hover:shadow-cinematic transition-all duration-500 shrink-0 w-[85vw] sm:w-[360px] md:w-auto snap-center block relative">
              {/* Dynamic top bar on hover */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary to-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />
              
              <div className="p-8 md:p-10 relative z-10 flex flex-col h-full bg-card group-hover:bg-primary/[0.02] transition-colors duration-500">
                <div className="flex items-start justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-3xl group-hover:scale-110 group-hover:bg-primary/20 group-hover:-rotate-3 transition-all duration-500 shadow-sm">
                    {article.emoji}
                  </div>
                  <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-[#1c6946] border border-[#1c6946]/20 bg-white/50 px-3 py-1.5 rounded-full shadow-sm">{article.tag}</span>
                </div>
                
                <h3 className="font-display font-bold text-xl md:text-2xl mb-4 group-hover:text-primary transition-colors leading-[1.3] whitespace-pre-line">{article.title}</h3>
                
                <p className="text-[14px] md:text-[15px] text-muted-foreground leading-relaxed mb-8 flex-grow">{article.desc}</p>
                
                <div className="flex items-center gap-2.5 pt-6 border-t border-border/50 mt-auto text-primary font-bold text-[13px] tracking-wide uppercase">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Leer artículo</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
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
