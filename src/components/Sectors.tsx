import { useReveal } from "@/hooks/use-reveal";
import equipmentFlatlay from "@/assets/branded_equipment.png";

const sectors = [
  { emoji: "🏠", title: "Residential", desc: "Homes & flats" },
  { emoji: "🏨", title: "Hotels", desc: "Hospitality & tourism" },
  { emoji: "🏪", title: "Restaurants", desc: "Food & retail" },
  { emoji: "🏢", title: "Offices", desc: "Workspaces" },
  { emoji: "🏥", title: "Healthcare", desc: "Clinics & hospitals" },
  { emoji: "🎓", title: "Education", desc: "Schools & nurseries" },
  { emoji: "🏛️", title: "Public Sector", desc: "Government buildings" },
  { emoji: "🏘️", title: "Property Mgmt", desc: "Landlords & agents" },
];

const Sectors = () => {
  const ref = useReveal();

  return (
    <section id="services" className="py-16 md:py-24 relative" ref={ref}>
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="mb-12 reveal flex flex-col items-center text-center md:items-start md:text-left">
          <span className="text-[hsl(var(--warm))] text-xs font-semibold uppercase tracking-[0.2em] mb-3 block">Sectors</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3 leading-[1.2] md:leading-tight">
            Solutions for every sector<span className="text-primary">.</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-lg">
            We tailor each treatment to the specific needs of your space.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-14 items-stretch">
          <div className="grid grid-cols-2 gap-3 md:gap-4 reveal reveal-delay-1 content-start">
            {sectors.map((sector, i) => (
              <div key={i} className="bg-card border border-border rounded-[1.25rem] p-4 md:p-5 text-center shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-primary/25 transition-all duration-300 cursor-default flex flex-col items-center justify-center">
                <div className="text-2xl md:text-3xl mb-2 drop-shadow-sm">{sector.emoji}</div>
                <h3 className="font-body font-semibold text-[13px] md:text-sm mb-0.5">{sector.title}</h3>
                <p className="text-[11px] md:text-xs text-muted-foreground">{sector.desc}</p>
              </div>
            ))}
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-cinematic reveal reveal-delay-2 hidden lg:block h-full min-h-[500px]">
            <img 
              src={equipmentFlatlay} 
              alt="Professional pest control equipment" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sectors;
