import { useParams, Link } from "react-router-dom";
import { ArrowLeft, AlertTriangle, Phone, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const pestsData: Record<string, { title: string; image: string; description: string[]; signs: string[]; risks: string[]; solution: string }> = {
  cucarachas: {
    title: "Control Integral de Cucarachas",
    image: "/expressive/cucarachas.jpg",
    description: [
      "Las cucarachas son, sin lugar a dudas, uno de los insectos más persistentes y peligrosos sanitariamente hablando. Poseen una asombrosa capacidad de adaptación y una tasa de reproducción vertiginosa; una sola hembra puede dar lugar a miles de individuos en apenas unos meses. Este nivel de infestación no solo genera rechazo, sino que compromete la viabilidad de cualquier hábitat.",
      "Estos artrópodos suelen esconderse en zonas cálidas, oscuras y con altos niveles de humedad, como detrás de electrodomésticos, en falsos techos, sumideros y grietas diminutas. Al ser de hábitos estrictamente nocturnos, si detectas una o varias cucarachas a plena luz del día, es un indicador alarmante de que la población oculta ha crecido hasta saturar sus refugios, forzando a los individuos a salir.",
      "Biológicamente, son portadoras mecánicas de más de 30 tipos de bacterias patógenas, incluyendo E. coli y Salmonella, además de diversos parásitos. Sus cuerpos y secreciones están cubiertos de microorganismos letales recogidos en las alcantarillas que transfieren instantáneamente al caminar sobre los utensilios de cocina y superficies en contacto con alimentos, provocando desde intoxicaciones severas hasta brotes de asma crónico, especialmente en niños, debido a los alérgenos presentes en sus exoesqueletos mudados.",
      "El error más común es recurrir a aerosoles domésticos. Estos productos comerciales contienen piretroides de muy baja concentración que solo actúan por choque térmico, matando únicamente a la cucaracha visible. Lejos de resolver el problema, estos olores químicos estresan a la colonia principal oculta tras las paredes, provocando un efecto de estampida (fagocitosis) donde la plaga se dispersa hacia nuevas habitaciones, agravando exponencialmente la invasión original."
    ],
    signs: [
      "Presencia de excrementos oscuros similares a polvo de café negro",
      "Olor a humedad desagradable, rancio e inusual en la habitación",
      "Avistamientos regulares durante la noche cerca de fuentes de agua",
      "Aparición de estuches de huevos (ootecas) en rincones estructurales"
    ],
    risks: [
      "Transmisión de graves enfermedades como Salmonelosis y disentería",
      "Contaminación directa de alimentos en despensas y almacenes",
      "Reacciones alérgicas severas y brotes de asma por inhalación",
      "Clausura de locales comerciales y daño extremo a la reputación"
    ],
    solution: "Implementamos un plan de erradicación mediante geles biológicos de última generación y reguladores de crecimiento (IGR), garantizando la eliminación total de la colonia desde el nido mismo sin paralizar tu actividad.",
  },
  roedores: {
    title: "Erradicación de Roedores",
    image: "/expressive/roedores.jpg",
    description: [
      "Las ratas y ratones son mucho más que una simple molestia; representan una de las amenazas más críticas para la sanidad estructural y humana. Con una inteligencia superior a la de otros vertebrados invasores, los roedores aprenden rápidamente a evadir las trampas caseras y los cebos mal colocados.",
      "Un par de ratones sin control puede multiplicarse hasta formar una vasta colonia en menos de un año. Se desplazan a través de cámaras de aire y tuberías, llevando consigo patógenos letales directamente hacia tus despensas y superficies higiénicas. Actuar con profesionalidad es innegociable.",
      "La biología de los roedores comensales (como la rata gris y la rata negra) les exige roer incesantemente para desgastar sus incisivos de crecimiento continuo. Esta necesidad fisiológica incontrolable los lleva a destruir cables de alta tensión, aislamientos ignífugos, vigas estructurales e incluso tuberías hidrosanitarias de PVC. De hecho, se estima que un alarmante porcentaje de los incendios urbanos de origen \"desconocido\" son provocados por cortocircuitos tras el deterioro roedor en la red eléctrica.",
      "Afrontar una plaga de roedores con remedios caseros o raticidas de ferretería resulta extremadamente imprudente. Los roedores envían a individuos jóvenes o débiles como \"catadores\"; si el cebo actúa instantáneamente, el resto de la colonia aprende y eludirá categóricamente el peligro (neofobia). Las soluciones profesionales requieren mapeo perimetral, sellado arquitectónico, e instalación de potentes raticidas anticoagulantes de tercera generación de acción retardada, garantizando así un letal e indetectable golpe maestro que colapsa la colonia."
    ],
    signs: [
      "Ruidos persistentes de rasguños tras paredes o bajo el suelo",
      "Pequeños excrementos oscuros y alargados como arroz",
      "Cables o envases plásticos con marcas frescas de roeduras incisivas",
      "Olor amoniacal acre a orina o madrigueras ocultas evidentes"
    ],
    risks: [
      "Transmisión de virus letales como Leptospirosis y Hantavirus",
      "Riesgo de incendios por cortocircuitos al roer cables eléctricos",
      "Pérdidas económicas gravísimas por destrucción de mercancía",
      "Daños estructurales muy costosos en aislamientos térmicos"
    ],
    solution: "Ejecutamos un plan perimetral de exclusión hermético seguido de la instalación estratégica de portacebos de máxima seguridad y monitorización constante hasta certificar un espacio estructuralmente intocable.",
  },
  hormigas: {
    title: "Eliminación de Hormigas",
    image: "/expressive/hormigas.jpg",
    description: [
      "Las hormigas coordinan a millones de individuos en supercolonias que operan bajo un solo organismo. Intentar detenerlas con aerosoles convencionales no solo es inútil, sino contraproducente; el estrés provocado hace que la colonia se asuste y se fracture (gemación) multiplicando los nidos activos en tu propiedad.",
      "Identificar la especie exacta es el primer paso vital para escoger la molécula biocida adecuada para que ellas mismas la reintroduzcan al nido matriz. Nuestra táctica devuelve el dominio a tu familia, logrando que los espacios interiores se mantengan perpetuamente limpios.",
      "Poseen un sofisticado sistema de comunicación por feromonas. Cuando una hormiga exploradora localiza una simple miga de pan o una gota de jugo, traza rápidamente un sendero químico invisible. Este trazado convoca inmediatamente a miles de obreras formadas en perfectas líneas de asedio logístico. Muchas especies, como la hormiga argentina, no compiten entre sí, formando \"mega-colonias\" que pueden extenderse bajo los cimientos de calles enteras compartiendo miles de reinas simultáneas.",
      "La fumigación descontrolada con espray de supermercado condena la infestación a perpetuidad. Al percibir letalidad rápida superficial, las hormigas reinas en el búnker subterráneo paralizan a las obreras y optan por dividir el imperio en múltiples sub-colonias emergentes en otras partes de tu casa. Nuestro método científico manipula su propia logística estomacal (trofalaxia): ofrecemos un néctar formulado tecnológicamente que las obreras devoran y regurgitan en la boca de las reinas, desencadenando la hecatombe química definitiva sin que se percaten del peligro."
    ],
    signs: [
      "Tránsito denso y altamente organizado hacia fuentes de nutrientes",
      "Montículos de excavación o tierra muy fina en grietas de baldosas",
      "Aparición repentina de enjambres de hormigas reproductoras aladas",
      "Rastros misteriosos de micro-aserrín cerca de zócalos de madera"
    ],
    risks: [
      "Invasión caótica y estéticamente demoledora de grandes cocinas",
      "Contaminación cruzada masiva obligando a desechar existencias",
      "Daños tangibles destructivos en el entorno agrícola o ajardinado",
      "Molestas picaduras que pueden derivar en shock en alergias locales"
    ],
    solution: "Utilizamos innovadores y palatables cebos biocidas de acción retardada. Engañamos a su sistema logístico logrando que las obreras alimenten con el producto a la reina subyugando y colapsando toda la colonia en días.",
  },
  termitas: {
    title: "Control Avanzado de Termitas",
    image: "/expressive/termitas.jpg",
    description: [
      "Conocida comúnmente como 'la plaga invisible', las termitas devoran incesantemente la madera desde su núcleo interior eludiendo la detección visual durante años. Su ferocidad asombrosa y silenciosa es la causa real de la ruina y derrumbes históricos de incontables edificios.",
      "Cuando finalmente logras percibir el daño crujiendo exteriormente, el núcleo estructural ya se encuentra bajo una fatiga crítica. Restaurar y garantizar tu fortificación rústica requiere métodos ecográficos no invasivos e ingeniería perimetral contundente.",
      "Estos xilófagos laboran sin descanso las 24 horas del día. A diferencia de la carcoma (que es una larva escarabajo), las termitas son organismos sociales estrechamente emparentados con las cucarachas. Habitan en formidables termiteros subterráneos de humedad controlada, desplazándose hacia el patrimonio de tu hogar mediante tubos estalactitas de lodo constructivo para evitar la deshidratación y la luz solar. Tienen en su intestino protozoos simbióticos que les confieren la rara habilidad de procesar y digerir celulosa transformando muebles nobles en mera esponja vacía.",
      "La detección precoz es el arte de la alta biotecnología. Depender de la pura observación ocular garantiza el fracaso; a menudo los falsos marcos o vigas aparentan estar intactos simplemente porque la termita respeta una microscópica película superficial de pintura o barniz, dejando que la madera por dentro caiga hecha un polvo fino. Nuestro equipo despliega radares termográficos, biosensores acústicos y sistemas de monitoreo perimetral inyectando implacables micelios de hongos e inhibidores de la hormona de la muda (hexaflumurón) directamente en su santuario letal."
    ],
    signs: [
      "Vigas estructurales o cercos de puertas que suenan a papel hueco",
      "Extensos tubos constructivos de barro a lo largo de cimientos y sótanos",
      "Agrupaciones de diminutas alas translúcidas desechadas en cornisas",
      "Paneles de madera o mobiliario que se hunde o deforma súbitamente"
    ],
    risks: [
      "Colapso inminente de techumbres pesadas sin mediar vibración",
      "Pérdida trágica del valor patrimonial irremplazable e histórico",
      "Devaluación comercial de tasación de la propiedad hasta en un 60%",
      "Absoluta obligación legal de costear colosales reformas arquitectónicas"
    ],
    solution: "Instalamos eficaces radares acústicos de detección biológica acoplados a sistemas de cebos y trufas inhibidoras subterráneas que exterminan al 100% de la colonia principal desde las entrañas de la tierra.",
  },
  mosquitos: {
    title: "Exterminio de Mosquitos",
    image: "/expressive/mosquitos.jpg",
    description: [
      "Lejos de catalogarse hoy como un simple incordio veraniego rutinario, han irrumpido brutalmente especies invasoras letales como el sanguinario Mosquito Tigre, transformando jardines privados en impracticables zonas hostiles de exclusión humana.",
      "Su resiliencia es formidable; requieren de apenas una insignificante gota estancada sobre una hoja para iniciar un enjambre invasor. Rociar vulgares insecticidas no roza siquiera la raíz del problema poblacional que te asalta la vida.",
      "El mosquito hembra es indudablemente el animal más letal del planeta Tierra según las métricas de la OMS. Su radar sensorial biológico es impecable: te detectan a más de 50 metros rastreando las exhalaciones precisas de dióxido de carbono, combinadas con ácidos lácticos emanados por el sudor y tu temperatura corporal. Una vez posada, utiliza una trompa micro-serrada para cortar capilares e inyectar saliva anticoagulantte, el vector perfecto para transmitir virus temibles a un ritmo espeluznante durante olas de calor bochornoso.",
      "Nuestra estrategia de control va infinitamente más allá. Los foggeos estéticos de las fumigaciones tradicionales duran días en el aire pero jamás cortan el origen: el útero acuático. Una cuadrilla táctica identifica sistemáticamente cada criadero latente minúsculo (sumideros bloqueados, raíces ahuecadas o platillos de tiesto) e implanta letales bio-larvicidas como Bti (Bacillus thuringiensis israelensis) completamente inofensivo en mamíferos, además de impregnar las lindes perimetrales con barreras de choque en microcápsulas aniquiladoras de larga persistencia."
    ],
    signs: [
      "Oleadas incesantes y sofocantes de dolorosas picaduras al caer el crepúsculo",
      "Nubes negras reposando estratégicamente ocultas en paredes sombrías",
      "Densas concentraciones larvales microscópicas serpenteando en charcos",
      "Silbidos y zumbidos intermitentes de alta vibración que anulan el descanso"
    ],
    risks: [
      "Severas inflamaciones cutáneas crónicas y shock alérgico por inoculación",
      "Estadística de contagio elevado de fiebres como Dengue, Chikungunya y Zika",
      "Cuantiosa devaluación de disfrute al inutilizarse costosísimas zonas exteriores",
      "Transmisión silenciosamente letal de la Leishmaniasis a cánidos y felinos"
    ],
    solution: "Acometemos formidables tratamientos paramétricos de pulverización termo-nebulizada combinados asimétricamente con rigurosos reguladores larvicidas biológicos disueltos focalmente en aguas retenidas.",
  },
  chinches: {
    title: "Erradicación de Chinches",
    image: "/expressive/chinches.jpg",
    description: [
      "Las chinches de cama encarnan el puro terror y fobia nocturna. Ostentan una biológica muralla impenetrable y se cobijan magistralmente en la luz. Emergen atraídas únicamente por el vector de CO2 exhalado cuando duermes, invadiéndote en la oscuridad.",
      "Infiltran infraestructuras y hogares adhiriéndose imperceptiblemente a equipajes, ropas y envíos. Carecen de toda vinculación con la falta de higiene; incluso la habitación de lencería dorada padece flagrantes infestaciones masivas sumidas en opacidad silenciosa.",
      "Poseen una fisiología plana acorazada que les permite deslizarse por grietas del grosor de una tarjeta de crédito, desapareciendo en los enchufes eléctricos, apliques de cabeceras, costuras diminutas del somier o rodapiés de tarima flotante. Pueden subsistir heroicamente bajo un estado semialetargado durante doce largos meses privándose por completo de alimento en la helada espera de una víctima durmiente. El tormento físico es severo sumado a una pesadilla mental: la sensación de impensable asedio enclaustra a los afectados en el agotamiento extremo.",
      "Eliminar a la Cimex lectularius exige el pináculo metodológico que rechaza firmemente cualquier paliativo comercial temporal. Dado el alto recubrimiento evolutivo de sus cutículas contra moléculas toxicológicas, nosotros abrazamos el exterminio polivalente: proyectamos un infierno térmico con vapor sobrecalentado presurizado de uso clínico (superando ampliamente los 140°C letales que coagula los huevecillos adheridos), secundado por minuciosas nieblas silíceas diatomeas y rociados residuales en profundas cámaras invisibles imposibilitando absolutamente la supervivencia."
    ],
    signs: [
      "Ronchas sanguinolentas trazadas espeluznantemente en línea recta",
      "Manchones de sangre coagulada (oxidada) y micro-heces negras",
      "Hallazgo minucioso de pieles vacías desprendidas tras las costuras capitoné",
      "Percepción de un penetrante resabio hediondo a dulzón rancio a puerta cerrada"
    ],
    risks: [
      "Trágico hundimiento de tu salud mental motivado por la vigilia forzosa",
      "Cuadros dermatológicos desgarradores que abren fisuras de alta infección",
      "Migración invisible descontrolada filtrándose hasta unidades vecinas por rodapiés",
      "Sentencias virales en portales web colapsando reservas de hostales y turismo"
    ],
    solution: "Descerrajamos un ofensivo protocolo de triple fase térmica y barrido químico, fundiendo de tajo y sin merced hasta el escondite del microscópico huevecillo latente, liberándote con un 100% de fiabilidad garantizada.",
  },
  palomas: {
    title: "Erradicación de Plagas de Palomas",
    image: "/expressive/aves.jpg",
    description: [
      "Las palomas urbanas (Columba livia) han dejado de ser simples aves inofensivas para convertirse en auténticas plagas aéreas, apodadas frecuentemente como 'ratas voladoras'. Su adaptación extrema a la vida urbana ha provocado un crecimiento poblacional explosivo que satura cornisas, balcones y patios interiores, convirtiéndolos en focos de profunda insalubridad.",
      "El instinto gregario de estas aves las impulsa a formar colonias masivas que regresan tenazmente a los mismos lugares de pernoctación año tras año. Al establecerse, su canto arrullador se convierte en un suplicio acústico diario, y su presencia atrae inevitablemente a otros depredadores urbanos y parásitos que terminan infiltrándose en el interior de las viviendas colindantes.",
      "A nivel biológico, el mayor peligro reside en su excremento (guano). El guano fresco es altamente resbaladizo y peligroso, pero al secarse, el viento levanta esporas microscópicas (Histoplasma capsulatum y Cryptococcus) que se inhalan fácilmente provocando gravísimas neumonías neumínicas. Además, su alta acidez calcárea corroe el acero, desintegra la piedra caliza monumental y perfora irreversiblemente las carrocerías de los automóviles y las placas solares.",
      "Intentar ahuyentarlas con falsos búhos o búhos de plástico, CDs colgantes o ruidos estruendosos es una farsa comercial que las palomas desestiman en cuestión de días. Nuestra intervención demanda rigor técnico: procedemos primero con una desinfección biocida profunda disolviendo el letal guano, y seguidamente instalamos barreras físicas impenetrables, tensores electrificados e innovadores repelentes tácticos en gel estabilizado que erradican para siempre su posado sin lastimarlas legalmente."
    ],
    signs: [
      "Acumulación diaria e inmanejable de excrementos ácidos (guano) en suelos y repisas",
      "Arrullos y aleteos estruendosos y constantes en buhardillas al amanecer",
      "Aparición inexplicable de micro-garrapatas (Argas reflexus) dentro de casa",
      "Obturación severa de canalones de desagüe con plumas y nidos malolientes"
    ],
    risks: [
      "Infecciones pulmonares muy graves y potencialmente mortales (Histoplasmosis)",
      "Destrucción estética y corrosión química irreversible de patrimonios arquitectónicos",
      "Responsabilidad civil millonaria por daños a transeúntes debido al desprendimiento de repisas",
      "Bloqueo y posterior inundación catastrófica de canalizaciones pluviales"
    ],
    solution: "Ejecutamos un plan de asedio disuasorio instalando cortinas de polietileno UV reforzado, púas de acero inoxidable incisivas y un saneamiento químico extremo del foco infeccioso, garantizando el abandono definitivo.",
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
            <h1 className="font-display text-4xl font-black mb-4">Plaga no encontrada</h1>
            <Link to="/" className="text-primary hover:underline">Volver al inicio</Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col">
      <Navbar />
      
      {/* MAGNIFICENT HERO SECTION */}
      <div className="pt-32 pb-16 border-b border-border/40 relative">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] aspect-square bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 sm:mb-12 font-medium">
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wider uppercase mb-6 border border-primary/20">
                Experiencia Profesional Asegurada
              </div>
              <h1 className="font-display text-5xl md:text-6xl font-black mb-6 leading-tight text-foreground">
                {pest.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                {pest.description[0]}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+34643395654" className="inline-flex items-center justify-center gap-2 bg-destructive hover:bg-destructive/90 text-destructive-foreground px-8 py-4 rounded-xl font-body font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-destructive/20">
                  <Phone className="w-5 h-5" /> Llamada Urgente
                </a>
                <a href={`https://wa.me/34643395654?text=${encodeURIComponent(`Hola, requiero ayuda inmediata con un problema técnico de ${pest.title}.`)}`} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-card hover:bg-muted/80 border border-border text-foreground px-8 py-4 rounded-xl font-body font-semibold transition-all hover:scale-105 active:scale-95">
                  <MessageCircle className="w-5 h-5" /> Iniciar WhatsApp
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

      {/* CONTENT ANALYSIS SECTION */}
      <div className="py-20 relative bg-muted/20 border-t border-border/50 flex-1">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-between">
              <div>
                <h2 className="font-display text-3xl font-bold mb-6 text-foreground">Comportamiento Vital e Invasión</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-medium text-foreground/90">
                  {pest.description[1]}
                </p>
                {pest.description[2] && (
                  <p className="text-lg text-muted-foreground flex items-start gap-4 mb-6 leading-relaxed">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-3" />
                    <span>{pest.description[2]}</span>
                  </p>
                )}
                {pest.description[3] && (
                  <p className="text-lg text-muted-foreground flex items-start gap-4 mb-8 leading-relaxed">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-3" />
                    <span>{pest.description[3]}</span>
                  </p>
                )}
              </div>

              <div className="mt-8 bg-primary/5 border border-primary/20 rounded-[2rem] p-8 md:p-10 relative overflow-hidden shadow-sm">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
                <h3 className="font-display text-2xl font-bold mb-4 text-foreground relative z-10">Metódica de Erradicación Certificada</h3>
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
                  <h3 className="font-display text-xl font-bold">Señales Alarmantes</h3>
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
                  <h3 className="font-display text-xl font-bold">Riesgos Críticos</h3>
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
