import { useReveal } from "@/hooks/use-reveal";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import articleCockroach from "@/assets/article-cockroach.jpg";
import articleRodent from "@/assets/article-rodent.jpg";
import articleTermite from "@/assets/article-termite.jpg";

const articles = [
  {
    image: articleCockroach,
    tag: "Prevención",
    title: "Cómo prevenir una infestación de cucarachas",
    desc: "Instrucciones detalladas para sellar accesos, gestionar residuos y aplicar medidas pasivas.",
    link: "/plagas/cucarachas",
  },
  {
    image: articleRodent,
    tag: "Guía Técnica",
    title: "Identificación de nidos de roedores",
    desc: "Aprende a localizar los puntos críticos de anidación y zonas de tránsito habitual.",
    link: "/plagas/roedores",
  },
  {
    image: articleTermite,
    tag: "Análisis",
    title: "Termitas: el enemigo silencioso",
    desc: "Detección temprana de daños estructurales antes de que requieran intervenciones invasivas.",
    link: "/plagas/termitas",
  },
];

const Articles = () => {
  const ref = useReveal();

  return (
    <section id="articulos" className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-[hsl(150,30%,96%)] via-[hsl(150,20%,94%)] to-[hsl(150,15%,97%)]" ref={ref}>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="text-primary/60 text-[11px] font-bold uppercase tracking-[0.3em] mb-4 block">Nuestro Blog</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-5 leading-[1.1] tracking-tight text-foreground">
            Guías de prevención<span className="text-primary">.</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-lg mx-auto">
            Artículos técnicos para proteger tu entorno de forma eficaz.
          </p>
        </div>

        {/* Cards */}
        <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-5 max-w-5xl mx-auto reveal reveal-delay-1 overflow-x-auto pb-6 pl-4 pr-4 -mx-4 md:mx-auto md:px-0 md:overflow-visible md:pb-0 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] after:content-[''] after:w-1 after:shrink-0 md:after:hidden">
          {articles.map((article, i) => (
            <Link
              key={i}
              to={article.link}
              className="group relative shrink-0 w-[85vw] sm:w-[340px] md:w-auto snap-start flex flex-col rounded-2xl overflow-hidden bg-white border border-border/50 shadow-[0_4px_20px_-6px_hsl(0,0%,0%,0.06)] hover:shadow-[0_8px_30px_-8px_hsl(152,40%,40%,0.15)] hover:border-primary/30 transition-all duration-400"
            >
              {/* Image - fixed height, no overlay */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  width={800}
                  height={512}
                />
                <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-widest text-white bg-primary px-3 py-1.5 rounded-md shadow-sm">
                  {article.tag}
                </span>
              </div>

              {/* Content - flex-grow to equalize */}
              <div className="flex flex-col flex-grow p-6 md:p-7">
                <h3 className="font-display font-bold text-lg md:text-xl text-foreground group-hover:text-primary transition-colors duration-300 leading-snug mb-3">
                  {article.title}
                </h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed mb-5 flex-grow">
                  {article.desc}
                </p>
                <div className="flex items-center gap-2 text-primary/70 group-hover:text-primary text-xs font-semibold uppercase tracking-wider transition-colors duration-300 mt-auto">
                  <span>Leer más</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
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
