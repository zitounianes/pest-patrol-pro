import { useReveal } from "@/hooks/use-reveal";
import equipment from "@/assets/equipment.jpg";

const sectors = [
  { emoji: "🏠", title: "Particulares", desc: "Hogares y viviendas" },
  { emoji: "🏨", title: "Hoteles", desc: "Hostelería y turismo" },
  { emoji: "🏪", title: "Comercios", desc: "Tiendas y restaurantes" },
  { emoji: "🏢", title: "Oficinas", desc: "Espacios de trabajo" },
  { emoji: "🏥", title: "Sanidad", desc: "Clínicas y centros" },
  { emoji: "🎓", title: "Educación", desc: "Colegios y guarderías" },
  { emoji: "🏛️", title: "Administración", desc: "Edificios públicos" },
  { emoji: "🏘️", title: "Fincas", desc: "Gestores y comunidades" },
];

const Sectors = () => {
  const ref = useReveal();

  return (
    <section id="servicios" className="py-28 relative" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 reveal">
          <span className="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">Sectores</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            Soluciones para <span className="text-gradient-primary italic">cada sector</span>
          </h2>
          <p className="text-muted-foreground text-lg">Adaptamos cada tratamiento a las necesidades de tu espacio.</p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4 reveal reveal-delay-1">
            {sectors.map((sector, i) => (
              <div key={i} className="bg-card border border-border rounded-2xl p-5 text-center shadow-card hover:border-primary/30 hover:shadow-glow hover:-translate-y-1 transition-all duration-200 cursor-default">
                <div className="text-3xl mb-2">{sector.emoji}</div>
                <h3 className="font-display font-bold text-sm mb-0.5">{sector.title}</h3>
                <p className="text-xs text-muted-foreground">{sector.desc}</p>
              </div>
            ))}
          </div>

          <div className="reveal reveal-delay-2 rounded-3xl overflow-hidden shadow-cinematic">
            <img src={equipment} alt="Equipamiento profesional de control de plagas" className="w-full h-[420px] object-cover img-cinematic" loading="lazy" width={1024} height={1024} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sectors;
