import { useReveal } from "@/hooks/use-reveal";
import equipmentFlatlay from "@/assets/branded_equipment.png";

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
    <section id="servicios" className="py-16 md:py-24 relative" ref={ref}>
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Header */}
        <div className="mb-12 reveal flex flex-col items-center text-center md:items-start md:text-left">
          <span className="text-[hsl(var(--warm))] text-xs font-semibold uppercase tracking-[0.2em] mb-3 block">Sectores</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3 leading-[1.2] md:leading-tight">
            Soluciones para cada sector<span className="text-primary">.</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-lg">
            Adaptamos cada tratamiento a las necesidades específicas de tu espacio.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-14 items-stretch">
          {/* Left: Sectors Grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-5 reveal reveal-delay-1 content-start">
            {sectors.map((sector, i) => (
              <div key={i} className="bg-card border border-border rounded-2xl p-5 md:p-6 text-center shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-primary/25 transition-all duration-300 cursor-default flex flex-col items-center justify-center">
                <div className="text-3xl md:text-4xl mb-3 drop-shadow-sm">{sector.emoji}</div>
                <h3 className="font-body font-semibold text-sm md:text-base mb-1">{sector.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground">{sector.desc}</p>
              </div>
            ))}
          </div>

          {/* Right: Large cinematic image */}
          <div className="relative rounded-3xl overflow-hidden shadow-cinematic reveal reveal-delay-2 hidden lg:block h-full min-h-[500px]">
            <img 
              src={equipmentFlatlay} 
              alt="Equipamiento profesional de control de plagas" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sectors;
