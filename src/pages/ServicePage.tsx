import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Shield, CheckCircle2, Phone, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const servicesData: Record<string, { title: string; image: string; description: string[]; details: string[] }> = {
  "rodent-control": {
    title: "Professional Rodent Control",
    image: "/expressive/desratizacion.jpg",
    description: [
      "Our professional rodent control service is meticulously designed to restore your peace of mind, guaranteeing a permanently rodent-free environment using advanced strategies and cutting-edge methodologies.",
      "We understand that every infestation is unique. Our tactical team first conducts a thorough perimeter survey, validating vulnerabilities before any application. We ensure uncompromising hygiene with minimal disruption.",
      "We base our approach on the behavioural study of urban rodents. We design undetectable capture systems and install perimeter bait stations with safety-certified locks. This strategic matrix paralyses the rodent's vital corridors, forcing lethal isolation.",
      "Handling rodenticides requires forensic rigour. Unlike reckless DIY practices, we follow strict World Health Organisation guidelines. Our third-generation wax rodenticides incorporate chemical bittering agents, saving accidental lives while eradicating the urban invader."
    ],
    details: [
      "Pre-treatment forensic monitoring mapping complex blind logistical corridors",
      "Reinforced architectural exclusion and biometric thermoplastic sealing of critical gaps",
      "Robust perimeter bait boxes anchored with patented lock and paraffin bait",
      "Continuous telemetry guaranteeing maximum humane mechanical interventions",
      "Express logistical coverage ideal for critical food manufacturing or processing facilities",
      "Atmospheric chemical purification neutralising feared trail pheromones",
    ],
  },
  "insect-control": {
    title: "Professional Insect Control",
    image: "/expressive/desinsectacion.jpg",
    description: [
      "Our professional insect control service is meticulously designed to restore absolute tranquillity, guaranteeing an environment permanently free of crawling and flying insects through advanced strategies.",
      "We understand that each infestation is as unique as the habitat itself. Our tactical team first conducts a millimetric sweep validating vulnerabilities before application, ensuring uncompromising hygiene with minimal disruption.",
      "At the core of our excellence is the categorical rejection of obsolete blind spraying. Instead, we use sequential capture traps, microencapsulated formulations and species-specific food attractants with a spectacular 'cascade effect'.",
      "Biosecurity is our crown. We execute these rigorous biocide protocols while respecting the immediate wellbeing of sensitive individuals, immunosuppressed patients and domestic pets."
    ],
    details: [
      "Certified environmental diagnosis revealing primary nested hotspots",
      "Focused application of powerful triple-action enzymatic gels",
      "Invisible protocols designed to avoid residual safety intervals",
      "Complete extraction across the entire pyramid of domestic and industrial species",
      "Parallel bio-engineering to erect repellent border exclusion shields",
      "Technical documentation endorsed administratively for any health inspection",
    ],
  },
  "bed-bug-treatment": {
    title: "Bed Bug Eradication",
    image: "/expressive/chinches.jpg",
    description: [
      "Bed bugs embody pure nocturnal terror. They emerge attracted solely by the CO2 exhaled while you sleep, invading you in darkness. They infiltrate homes by clinging imperceptibly to luggage, clothing and deliveries.",
      "They possess an armoured flat physiology that allows them to slip through cracks the thickness of a credit card, disappearing into electrical sockets, headboard fixtures and skirting boards. They can survive in a semi-dormant state for twelve months without feeding.",
      "Eliminating bed bugs demands the pinnacle of methodology that firmly rejects any temporary commercial palliative. Given the high evolutionary covering of their cuticles against toxicological molecules, we embrace polyvalent extermination.",
      "We project a thermal inferno with pressurised superheated clinical-grade steam, followed by meticulous siliceous diatomaceous fogs and deep residual sprays in invisible chambers, making survival absolutely impossible."
    ],
    details: [
      "Multi-phase thermal and chemical sweep protocol",
      "Clinical-grade superheated steam treatment exceeding 140°C",
      "Diatomaceous earth application in all harbourage points",
      "Residual spray treatment in deep crevices and voids",
      "Follow-up monitoring and prevention programme",
      "100% reliability guarantee on complete eradication",
    ],
  },
  "bird-proofing": {
    title: "Bird Proofing & Deterrent Systems",
    image: "/expressive/aves.jpg",
    description: [
      "We humanely deter persistent flocks of pigeons and invasive gulls, resettling them in viable habitats while rectifying the unbearable sanitary damage, all in strict compliance with European conservation law.",
      "The corrosive ornithological guano engulfs and strips costly finishes and is the perfect niche for dangerous microscopic pulmonary pathogens. We reconquer the acoustic and dimensional peace of your rooftops without harming the flying flock.",
      "The biological obstinacy of pigeons in returning to their original nesting sites surpasses traditional methods. Our tactical front establishes a multi-vectorial deterrent siege, meticulously tensioning translucent reinforced polyethylene nylon mesh curtains.",
      "When carved cornices become pestilent besieged watchtowers, we fuse acoustic engineering and silent shock physics. We install precise electrified micro-amperage cables, flexible-base spikes and robust magneto-stroboscopic deterrent systems."
    ],
    details: [
      "Ultra-altitude drone photogrammetric survey modelling flight tunnels",
      "Tensioned naval nylon mesh nets with UV ray resistance",
      "Blunt invisible needles and pendular rollers installed on precious ledges",
      "Sonic-stroboscopic repellent profiles at high or very low frequency",
      "Meticulous sanitisation and biologically aseptic removal of infectious guano",
      "Comprehensive roof sweep policies for photovoltaic panel protection",
    ],
  },
  fumigation: {
    title: "Industrial-Grade Fumigation",
    image: "/expressive/fumigacion.jpg",
    description: [
      "We operate under immense architectural pressures, articulating colossal containment tarps and pressurised inert gas bubbles with devastating infiltrating capacity and zero margin of vital retreat for pathogens.",
      "Treated operationally as the 'final and irreversible remedy', this procedure is ordered for unmanageable logistical nightmares such as customs control in commercial ports, export shipping and continental food storage facilities.",
      "Our doctrine encompasses rigorous mathematical chemical orchestration injecting phosphine or powerful condensed dioxides in hermetically sealed monumental environments. These lethal volatiles traverse every crack in cement and every porous lamina of cardboard.",
      "This operation, by its extreme lethal nature, is managed solely under the strict supervision of Level 3 technicians wearing autonomous breathing apparatus. We design parametric exclusion rings radiating contiguous telemetric readings."
    ],
    details: [
      "Precise mathematical doses of lethal halogenated gases saturating atmospheres",
      "Exhaustive purge annihilating pests in massive cereal silos and heavy logistical foundations",
      "Systematic suffocation paralysing the respiratory rhythm of grain weevils",
      "Chronometric telematic evacuation readings ensuring 100% molecular restoration",
      "Strict customs codes scrupulously obeyed regarding ISPM-15 global transit framework",
      "Tactical units clad in Level-3 armour breathing only encapsulated atmospheres",
    ],
  },
  disinfection: {
    title: "Certified Clinical Disinfection",
    image: "/expressive/desinfeccion.jpg",
    description: [
      "We project and guarantee a microbiologically sterile force field that annihilates all pathology, surpassing 99.99% of bacteria, covert viral agents and tenacious mould strains.",
      "In post-pandemic times, ensuring clean surfaces is no longer mere courtesy. Using powerful aerial disinfection, we inject biocide formulations approved by health authorities, volatilised to the millimetre.",
      "We approach epidemiological eradication with spatial thermonebulisation and colossal electrostatic aspersion systems. These infinitesimal biomagnetic droplets float weightlessly, irremediably attracted to every exposed surface.",
      "This brutal atmospheric purge generates no harmful distillation or condensation on extremely sensitive electronics. We offer photocatalytic oxidising shields or cold dissipable aqueous-base peroxides."
    ],
    details: [
      "3D spectrum saturation by micro-nebulisation ensuring massive cellular penetration",
      "Lightning-fast destruction of lethal pathogenic chains by terminal contact",
      "Rigorous sanitary files including direct prophylactic assaults against Legionella",
      "Hygienic shock surpassing the worst tragedies from aseptic overflows",
      "Zero residual atmospheric phytotoxicity applying officially approved solutions",
      "Formal undeniable technical endorsement stamping your impeccable certification",
    ],
  },
};

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesData[slug] : null;

  if (!service) {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-4xl font-black mb-4">Service not found</h1>
            <Link to="/" className="text-primary hover:underline">Back to home</Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col">
      <Navbar />
      
      <div className="pt-32 pb-16 relative">
        <div className="absolute top-0 right-0 w-[80%] md:w-[60%] h-[120%] bg-gradient-to-l from-primary/10 to-transparent -z-10 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 sm:mb-12 font-medium">
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wider uppercase mb-6 border border-primary/20">
                <Shield className="w-4 h-4" /> Methodological Excellence
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-foreground leading-tight">
                {service.title}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">
                {service.description[0]}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+442038758225" className="inline-flex items-center justify-center gap-2 bg-foreground text-background hover:bg-foreground/90 px-8 py-4 rounded-xl font-body font-bold transition-all hover:scale-105 active:scale-95 shadow-lg">
                  <Phone className="w-5 h-5" /> Call Now
                </a>
                <a href={`https://wa.me/442038758225?text=${encodeURIComponent(`Hi, I'd like to enquire about your ${service.title} service.`)}`} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-xl font-body font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20">
                  <MessageCircle className="w-5 h-5" /> WhatsApp Us
                </a>
              </div>
            </div>

            <div className="order-1 lg:order-2 w-full max-w-lg mx-auto lg:max-w-none relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent rounded-[3rem] blur-2xl -z-10" />
              <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-cinematic border border-border/50 bg-muted group">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-bottom transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-in-out" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 relative bg-muted/20 border-t border-border/50 flex-1">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2 className="font-display text-4xl font-bold mb-8 text-foreground tracking-tight">Professional Expertise & Execution</h2>
                <p className="text-lg text-muted-foreground leading-relaxed font-medium text-foreground/90">
                  {service.description[1]}
                </p>
                {service.description[2] && (
                  <div className="flex items-start gap-4 mt-8">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-3" />
                    <p className="text-lg text-muted-foreground leading-relaxed m-0">
                      {service.description[2]}
                    </p>
                  </div>
                )}
                {service.description[3] && (
                  <div className="flex items-start gap-4 mt-6">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-3" />
                    <p className="text-lg text-muted-foreground leading-relaxed m-0">
                      {service.description[3]}
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-card border border-border rounded-[2rem] p-8 md:p-10 shadow-md hover:shadow-xl transition-all duration-500 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-16 -mt-16 transition-colors group-hover:bg-primary/10" />
                <h3 className="font-display text-2xl font-bold mb-8 border-b border-border/60 pb-4 relative z-10 text-foreground">Service Guarantees</h3>
                <ul className="space-y-6 relative z-10">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground/90 mt-1 leading-snug">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ServicePage;
