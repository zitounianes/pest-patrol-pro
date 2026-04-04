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
        <div className="flex md:grid md:grid-cols-3 gap-5 max-w-5xl mx-auto reveal reveal-delay-1 overflow-x-auto pb-6 -mx-4 px-4 md:overflow-visible md:pb-0 md:mx-auto md:px-0 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {articles.map((article, i) => (
            <Link
              key={i}
              to={article.link}
              className="group relative shrink-0 w-[82vw] sm:w-[340px] md:w-auto snap-center block rounded-2xl overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-56 md:h-60 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  width={800}
                  height={512}
                />
                {/* Gradient overlay on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,15%,8%)] via-[hsl(220,15%,8%,0.4)] to-transparent" />
                {/* Tag positioned on image */}
                <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-widest text-white/90 bg-primary/80 px-3 py-1.5 rounded-md">
                  {article.tag}
                </span>
              </div>

              {/* Content */}
              <div className="relative bg-[hsl(220,15%,10%)] border border-white/[0.06] border-t-0 rounded-b-2xl p-6 md:p-7">
                <h3 className="font-display font-bold text-lg md:text-xl text-white group-hover:text-primary transition-colors duration-300 leading-snug mb-3">
                  {article.title}
                </h3>
                <p className="text-[13px] text-white/35 leading-relaxed mb-5">
                  {article.desc}
                </p>
                <div className="flex items-center gap-2 text-primary/70 group-hover:text-primary text-xs font-semibold uppercase tracking-wider transition-colors duration-300">
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
