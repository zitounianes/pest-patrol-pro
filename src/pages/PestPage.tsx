import { useParams, Link } from "react-router-dom";
import { ArrowLeft, AlertTriangle, Phone, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const pestsData: Record<string, { title: string; image: string; description: string[]; signs: string[]; risks: string[]; solution: string }> = {
  mice: {
    title: "Mice Control & Proofing",
    image: "/expressive/roedores.jpg",
    description: [
      "Mice are far more than a simple nuisance; they represent one of the most critical threats to structural and human sanitary safety. With superior intelligence, mice quickly learn to evade household traps and poorly placed baits.",
      "A single pair of mice can multiply into a vast colony in less than a year. They travel through air chambers and pipes, carrying lethal pathogens directly to your food stores and hygienic surfaces. Professional action is non-negotiable.",
      "Mice must gnaw incessantly to wear down their continuously growing incisors. This uncontrollable physiological need drives them to destroy electrical cables, fire-retardant insulation, structural beams and even PVC pipes.",
      "Tackling a mouse problem with DIY remedies or hardware store rodenticides is extremely imprudent. Mice send young or weak individuals as 'tasters'; if the bait acts instantly, the rest of the colony learns and will categorically avoid the danger."
    ],
    signs: [
      "Persistent scratching sounds behind walls or under floors",
      "Small dark droppings resembling rice grains",
      "Cables or plastic containers with fresh gnaw marks",
      "Sharp ammonia-like urine odour or hidden nests"
    ],
    risks: [
      "Transmission of dangerous diseases like Leptospirosis and Hantavirus",
      "Fire risk from short circuits caused by gnawed electrical cables",
      "Serious economic losses from destruction of merchandise",
      "Costly structural damage to thermal insulation"
    ],
    solution: "We execute a hermetic perimeter exclusion plan followed by strategic installation of maximum-security bait stations and constant monitoring until certifying a structurally impenetrable space.",
  },
  rats: {
    title: "Rat Eradication",
    image: "/expressive/roedores.jpg",
    description: [
      "Rats are among the most dangerous urban pests, carrying severe diseases and causing significant property damage. Their intelligence and adaptability make them particularly challenging to control without professional intervention.",
      "Norway rats and roof rats are the most common species in London. They contaminate food supplies, damage structures, and can even cause fires by gnawing through electrical wiring. A single rat can produce up to 84 offspring per year.",
      "Rats exhibit neophobia — a fear of new objects — which makes DIY trapping extremely difficult. They will avoid new items in their environment for days, and if one rat is harmed by a trap, others learn to avoid it entirely.",
      "Our professional approach uses behavioural knowledge to outsmart rat colonies. We map their runways, identify entry points, and deploy a combination of tamper-resistant bait stations and proofing measures for complete eradication."
    ],
    signs: [
      "Droppings approximately 12mm long, dark and spindle-shaped",
      "Greasy rub marks along walls and baseboards",
      "Gnaw marks on wood, cables, and food packaging",
      "Burrow holes around foundations and garden areas"
    ],
    risks: [
      "Transmission of Weil's disease, Salmonella and E. coli",
      "Significant fire hazard from damaged electrical wiring",
      "Contamination of food stores and preparation areas",
      "Structural damage to buildings and insulation"
    ],
    solution: "We implement a comprehensive rat control programme including perimeter proofing, strategic bait station placement, and ongoing monitoring to ensure complete colony elimination and prevent re-entry.",
  },
  cockroaches: {
    title: "Cockroach Eradication",
    image: "/expressive/cucarachas.jpg",
    description: [
      "Cockroaches are among the most persistent and sanitarily dangerous insects. They possess an astonishing capacity for adaptation and a vertiginous reproduction rate; a single female can give rise to thousands of individuals in just a few months.",
      "These arthropods typically hide in warm, dark areas with high humidity levels — behind appliances, in false ceilings, drains and tiny cracks. Being strictly nocturnal, if you spot cockroaches in broad daylight, it's an alarming indicator that the hidden population has grown to saturation.",
      "Biologically, they are mechanical carriers of more than 30 types of pathogenic bacteria, including E. coli and Salmonella. Their bodies and secretions are covered in lethal microorganisms that they transfer instantly when walking over kitchen utensils and food-contact surfaces.",
      "The most common mistake is using domestic aerosols. These commercial products contain very low concentration pyrethroids that only kill the visible cockroach. Far from solving the problem, these chemicals stress the main colony hidden behind walls, causing a stampede effect where the pest disperses to new rooms."
    ],
    signs: [
      "Dark droppings resembling ground coffee",
      "Unpleasant, musty, rancid odour in rooms",
      "Regular sightings at night near water sources",
      "Egg cases (oothecae) appearing in structural corners"
    ],
    risks: [
      "Transmission of serious diseases like Salmonellosis and dysentery",
      "Direct contamination of food in pantries and stores",
      "Severe allergic reactions and asthma outbreaks",
      "Closure of commercial premises and extreme reputational damage"
    ],
    solution: "We implement an eradication plan using cutting-edge biological gels and insect growth regulators (IGR), guaranteeing total colony elimination from the nest itself without disrupting your daily operations.",
  },
  "bed-bugs": {
    title: "Bed Bug Treatment",
    image: "/expressive/chinches.jpg",
    description: [
      "Bed bugs embody pure nocturnal terror. They emerge attracted solely by the CO2 vector exhaled when you sleep, invading you in darkness. They infiltrate homes by clinging imperceptibly to luggage, clothing and deliveries.",
      "They possess an armoured flat physiology allowing them to slip through cracks the thickness of a credit card, disappearing into electrical sockets, headboard fixtures, mattress seams or skirting boards. They can survive in a semi-dormant state for twelve months without feeding.",
      "The physical torment is severe, compounded by mental anguish: the sensation of being under siege traps affected individuals in extreme exhaustion and sleep deprivation.",
      "We project a thermal inferno with pressurised superheated clinical-grade steam exceeding 140°C, followed by meticulous siliceous diatomaceous fogs and deep residual sprays in invisible chambers, making survival absolutely impossible."
    ],
    signs: [
      "Itchy red welts arranged in straight lines on skin",
      "Blood spots and micro-faeces on bedding",
      "Shed skins found behind mattress seams and headboards",
      "Sweet, musty odour in enclosed bedrooms"
    ],
    risks: [
      "Severe mental health impact from forced sleeplessness",
      "Distressing dermatological conditions opening infection pathways",
      "Invisible uncontrolled migration to neighbouring units",
      "Devastating online reviews collapsing hotel and hostel bookings"
    ],
    solution: "We unleash an offensive triple-phase thermal and chemical sweep protocol, melting away even the microscopic dormant egg, liberating you with 100% guaranteed reliability.",
  },
  wasps: {
    title: "Wasp Nest Removal",
    image: "/expressive/mosquitos.jpg",
    description: [
      "Wasp nests pose a serious danger, particularly during summer months when colonies reach peak population. A single nest can house thousands of aggressive wasps that will attack if they perceive a threat to their colony.",
      "Common wasps and German wasps build nests in loft spaces, wall cavities, garden sheds, and underground. The nests can grow to the size of a football or larger, and attempting DIY removal without proper equipment is extremely dangerous.",
      "Wasp stings can cause severe allergic reactions including anaphylaxis, which can be life-threatening. Multiple stings from an agitated colony defending their nest can overwhelm even those without allergies.",
      "Our trained technicians use professional-grade insecticidal dust applied directly to the nest entrance. This method ensures the entire colony is eliminated within 24-48 hours, including the queen, preventing future re-establishment."
    ],
    signs: [
      "Increased wasp activity around a specific area of your property",
      "Visible nest structure in eaves, loft, or garden",
      "Wasps entering and exiting a hole in walls or roof",
      "Buzzing sounds coming from wall cavities or loft space"
    ],
    risks: [
      "Severe allergic reactions and potential anaphylactic shock",
      "Multiple sting attacks when nest is disturbed",
      "Property damage from large nests in wall cavities",
      "Ongoing risk throughout summer as colony grows"
    ],
    solution: "We safely destroy wasp nests using professional insecticidal treatments applied directly to the nest, ensuring complete colony elimination within 24-48 hours with minimal disruption.",
  },
  moths: {
    title: "Moth Control & Prevention",
    image: "/expressive/termitas.jpg",
    description: [
      "Clothes moths and pantry moths cause significant damage to textiles, carpets, and stored food products. The larvae, not the adult moths, are responsible for the destruction — silently eating through wool, silk, cashmere and other natural fibres.",
      "A female clothes moth can lay up to 200 eggs, which hatch into voracious larvae that feed for weeks or months. By the time you notice the damage — holes in favourite garments or bare patches on carpets — the infestation is already well established.",
      "Pantry moths infest dried goods including flour, cereals, pasta, nuts and dried fruit. Their larvae spin silken webbing throughout contaminated food, making entire pantry contents unusable and requiring complete clearance.",
      "Effective moth control requires identifying the species, locating all breeding sites, and applying targeted treatments. Moth balls and cedar blocks provide only temporary deterrence and cannot eliminate an active infestation."
    ],
    signs: [
      "Small holes appearing in woollen or silk garments",
      "Bare patches on natural fibre carpets and rugs",
      "Silken webbing or cocoons in stored food products",
      "Small golden or brown moths flying around the home"
    ],
    risks: [
      "Irreversible damage to expensive clothing and textiles",
      "Destruction of valuable antique rugs and carpets",
      "Contamination of entire food stores requiring disposal",
      "Continuous reproduction cycle causing ongoing damage"
    ],
    solution: "We deploy targeted pheromone monitoring systems combined with residual insecticidal treatments to eliminate all life stages, followed by preventive measures to protect your belongings long-term.",
  },
  pigeons: {
    title: "Pigeon Control & Proofing",
    image: "/expressive/aves.jpg",
    description: [
      "Urban pigeons have become genuine aerial pests, frequently dubbed 'flying rats'. Their extreme adaptation to city life has caused explosive population growth that saturates cornices, balconies and interior courtyards, turning them into hotbeds of profound insalubrity.",
      "The gregarious instinct of these birds drives them to form massive colonies that tenaciously return to the same roosting spots year after year. Once established, their cooing becomes a daily acoustic ordeal, and their presence inevitably attracts other urban predators and parasites.",
      "The greatest danger lies in their excrement (guano). Fresh guano is highly slippery and dangerous, but when dried, the wind lifts microscopic spores that are easily inhaled, causing serious pneumonic conditions. Additionally, its high calcareous acidity corrodes steel and disintegrates limestone.",
      "Attempting to scare them with fake owls, hanging CDs or loud noises is a commercial farce that pigeons dismiss within days. Our intervention demands technical rigour: we first conduct deep biocide disinfection, then install impenetrable physical barriers and innovative stabilised gel repellents."
    ],
    signs: [
      "Daily unmanageable accumulation of acidic droppings on floors and ledges",
      "Cooing and wing-flapping from loft spaces at dawn",
      "Unexplained appearance of micro-ticks inside the property",
      "Severe blockage of drainage gutters with feathers and malodorous nests"
    ],
    risks: [
      "Very serious and potentially fatal lung infections (Histoplasmosis)",
      "Irreversible aesthetic destruction and chemical corrosion of architectural heritage",
      "Millionaire civil liability for damage to pedestrians from falling ledge material",
      "Blockage and subsequent catastrophic flooding of rainwater systems"
    ],
    solution: "We execute a deterrent siege plan installing reinforced UV polyethylene curtains, stainless steel spikes and extreme chemical sanitisation of the infectious hotspot, guaranteeing definitive abandonment.",
  },
};

const PestPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const pest = slug ? pestsData[slug] : null;

  if (!pest) {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-4xl font-black mb-4">Pest not found</h1>
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
      
      <div className="pt-32 pb-16 border-b border-border/40 relative">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] aspect-square bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 sm:mb-12 font-medium">
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wider uppercase mb-6 border border-primary/20">
                Professional Expertise Assured
              </div>
              <h1 className="font-display text-5xl md:text-6xl font-black mb-6 leading-tight text-foreground">
                {pest.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                {pest.description[0]}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+442038758225" className="inline-flex items-center justify-center gap-2 bg-destructive hover:bg-destructive/90 text-destructive-foreground px-8 py-4 rounded-xl font-body font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-destructive/20">
                  <Phone className="w-5 h-5" /> Emergency Call
                </a>
                <a href={`https://wa.me/442038758225?text=${encodeURIComponent(`Hi, I need urgent help with a ${pest.title} problem.`)}`} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-card hover:bg-muted/80 border border-border text-foreground px-8 py-4 rounded-xl font-body font-semibold transition-all hover:scale-105 active:scale-95">
                  <MessageCircle className="w-5 h-5" /> WhatsApp Us
                </a>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 w-full max-w-lg mx-auto lg:max-w-none">
              <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border border-border/50 bg-muted group">
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent z-10 pointer-events-none" />
                <img 
                  src={pest.image} 
                  alt={pest.title} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 relative bg-muted/20 border-t border-border/50 flex-1">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-between">
              <div>
                <h2 className="font-display text-3xl font-bold mb-6 text-foreground">Behaviour & Invasion Pattern</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-medium text-foreground/90">
                  {pest.description[1]}
                </p>
                {pest.description[2] && (
                  <div className="text-lg text-muted-foreground flex items-start gap-4 mb-6 leading-relaxed">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-3" />
                    <span>{pest.description[2]}</span>
                  </div>
                )}
                {pest.description[3] && (
                  <div className="text-lg text-muted-foreground flex items-start gap-4 mb-8 leading-relaxed">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-3" />
                    <span>{pest.description[3]}</span>
                  </div>
                )}
              </div>

              <div className="mt-8 bg-primary/5 border border-primary/20 rounded-[2rem] p-8 md:p-10 relative overflow-hidden shadow-sm">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
                <h3 className="font-display text-2xl font-bold mb-4 text-foreground relative z-10">Certified Eradication Method</h3>
                <p className="text-foreground/90 leading-relaxed text-lg relative z-10">
                  {pest.solution}
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 xl:col-span-4 space-y-6">
              
              <div className="bg-card border border-border rounded-[2rem] p-8 shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-destructive/10 flex items-center justify-center shrink-0">
                    <AlertTriangle className="w-6 h-6 text-destructive" />
                  </div>
                  <h3 className="font-display text-xl font-bold">Warning Signs</h3>
                </div>
                <ul className="space-y-4">
                  {pest.signs.map((sign, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-destructive shrink-0 mt-2" />
                      <span className="text-foreground/80 leading-snug">{sign}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card border border-border rounded-[2rem] p-8 shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center shrink-0">
                    <AlertTriangle className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="font-display text-xl font-bold">Critical Risks</h3>
                </div>
                <ul className="space-y-4">
                  {pest.risks.map((risk, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-orange-500 shrink-0 mt-2" />
                      <span className="text-foreground/80 leading-snug">{risk}</span>
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

export default PestPage;
