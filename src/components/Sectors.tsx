import { useReveal } from "@/hooks/use-reveal";

const sectors = [
  { emoji: "🏠", title: "Particulares", desc: "Hogares y viviendas" },
  { emoji: "🏨", title: "Hoteles", desc: "Hostelería y turismo" },
  { emoji: "🏪", title: "Comercios", desc: "Tiendas y restaurantes" },
  { emoji: "🏢", title: "Oficinas", desc: "Espacios de trabajo" },
  { emoji: "🏥", title: "Sanidad", desc: "Clínicas y centros" },
  { emoji: "🎓", title: "Educación", desc: "Colegios y guarderías" },
  { emoji: "🏛️", title: "Administración", desc: "Edificios públicos" },
  { emoji: "🏘️", title: "Comunidades", desc: "Fincas y urbanizaciones" },
];

const Sectors = () => {
  const ref = useReveal();

  return (
    <section id="servicios" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-14 reveal">
          <span className="text-[hsl(var(--warm))] text-xs font-semibold uppercase tracking-[0.2em] mb-3 block">Sectores</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
            Soluciones para cada sector<span className="text-primary">.</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-lg mx-auto">Adaptamos cada tratamiento a las necesidades específicas de tu espacio.</p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 reveal reveal-delay-1">
          {sectors.map((sector, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-5 text-center shadow-card hover:border-primary/25 hover:-translate-y-0.5 transition-all duration-200 cursor-default">
              <div className="text-2xl mb-2">{sector.emoji}</div>
              <h3 className="font-body font-semibold text-sm mb-0.5">{sector.title}</h3>
              <p className="text-xs text-muted-foreground">{sector.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sectors;
