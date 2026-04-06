import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Shield, CheckCircle2, Phone, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const servicesData: Record<string, { title: string; image: string; description: string[]; details: string[] }> = {
  desinsectacion: {
    title: "Desinsectación Profesional",
    image: "/expressive/desinsectacion.jpg",
    description: [
      "Nuestro servicio de desinsectación profesional está meticulosamente diseñado para devolverte la tranquilidad absoluta, garantizando un entorno permanentemente libre de insectos rastreros y voladores. Desplegamos poderosas estrategias y metodologías de choque avanzadas.",
      "Comprendemos con rigor científico que cada infestación es tan única y evolutiva como el propio hábitat. Por tanto, nuestro equipo táctico ejecuta primero un rastreo milimétrico validando vulnerabilidades antes de la aplicación. Aseguramos higiene innegociable con mínima disrupción de olores.",
      "En el núcleo de nuestra excelencia metodológica se halla el rechazo categórico hacia las pulverizaciones ciegas obsoletas. En su lugar, hemos perfeccionado el uso maestro de trampas ecográficas de captura secuencial, formulaciones microencapsuladas y atrayentes alimenticios específicos para cada cepa biológica. Estos compuestos activos (como Fipronil o Indoxacarb) presentan un espectacular 'efecto cascada' a nivel neural, logrando erradicaciones masivas sin generar resistencia molecular en la progenie invasora futura.",
      "La bioseguridad es nuestra corona de laurel. Ejecutamos estos rigurosos protocolos biocidas respetando devotamente el bienestar inmediato de personas altamente sensibles, pacientes inmunosuprimidos y pequeños mamíferos domingueros. Elaboramos detalladas matrices de análisis de puntos críticos (APPCC) blindando de inmediato la sanidad inviolable de cocinas maestras, salones preescolares o laboratorios higiénicos mediante tratamientos sin 'plazo de seguridad', permitiéndote retomar la rutina productiva sin paradas letíficas."
    ],
    details: [
      "Diagnóstico ambiental certificado desvelando focos primarios anidados",
      "Aplicación focalizada de potentes geles enzimáticos de triple acción",
      "Protocolos invisibles diseñados minuciosamente para evitar plazo de seguridad residual",
      "Extirpación completa en toda la pirámide de especies domésticas e industriales",
      "Biongeniería paralela para erigir escudos repelentes fronterizos de exclusión",
      "Documentación técnica avalada administrativamente ante cualquier inspección Sanitaria",
    ],
  },
  desratizacion: {
    title: "Desratización Integral",
    image: "/expressive/desratizacion.jpg",
    description: [
      "Quebramos de cuajo y de forma implacable toda colonización de roedores introduciendo un sofisticadísimo cinturón de blindaje letal. Neutralizamos todo riesgo y colapso higiénico que imponen al núcleo vital, garantizando la seguridad extrema para individuos ajenos y nobles mascotas.",
      "Nos negamos profundamente a vender remedios genéricos temporales. Combinamos minuciosamente tecnología de capturas vectoriales múltiples con bioseguridad perimetral. Transformamos tu frágil recinto en una estricta fortaleza técnica e infranqueable a oleadas venideras.",
      "Basamos nuestro letal asedio en el estudio conductista etológico de los roedores murales y de alcantarillas. Comprendemos cómo se trazan sus 'autopistas de feromonas invisibles' a través de cámaras aislantes y cielo rasos oscuros. Diseñamos trampas de captura viva electromortal indetectable que envían pulsos telemétricos o instalamos portacebos perimetrales con cierres de seguridad patentados nivel titanio anti-fuerza mecánica. Esta matriz estratégica paraliza los corredores vitales del roedor obligándolo a un aislamiento estomacal letal.",
      "Manejar raticidas exige un rigor forense inquebrantable. A diferencia de las temerarias prácticas caseras que derivan en envenenamientos catastróficos cruzados, nosotros nos regimos por directrices restrictivas de la Organización Mundial de la Salud (OMS). Nuestros raticidas cerosos de tercera generación no solo evitan que el animal desprenda lixiviados olorosos mortuorios post-mortem (efecto momificador instantáneo), sino que incorporan amargantes químicos (Bitrex) extremadamente reactivos al gusto humano y perruno salvando vidas accidentales y extirpando radicalmente al usurpador urbano."
    ],
    details: [
      "Monitorización forense pre-tratamiento dibujando los complejos corredores logísticos ciegos",
      "Exclusión arquitectónica reforzada y sellado biométrico termoplástico de hendiduras críticas",
      "Robustos cajones perimetrales fijados y anclados con patente de cierre y cebo parafinado",
      "Telemetría continua garantizando intervenciones mecánicas de máxima humanidad",
      "Cobertura logística Express ideal blindando fábricas críticas de matriz alimenticia o cárnica",
      "Ultrapurificación química atmosférica e higienizante de superficie neutralizando las temidas feromonas de rastro",
    ],
  },
  desinfeccion: {
    title: "Desinfección Clínica Certificada",
    image: "/expressive/desinfeccion.jpg",
    description: [
      "Proyectamos y garantizamos un campo de fuerza estéril microbiológicamente aniquilador de toda patología. Arrasamos superando sobradamente el 99.99% del índice de bacterias, agentes víricos encubiertos y tenaces cepas de moho, depurando pabellones hospitalarios o estancias corporativas críticas.",
      "En tiempos post pandémicos, asegurar recubrimientos limpios dejó de ser simple cortesía. Utilizando desinfección aérea rotunda, inyectamos formulaciones biocidas amparadas por Sanidad volatilizadas al milímetro para revestir cualquier superficie volumétrica cóncava minimizando el riesgo vital de infecciones intrahospitalarias.",
      "Imagina una tormenta seca, un micro-vórtice de pureza suspendido estáticamente en los aires. Abordamos la erradicación epidemiológica con sistemas espaciales de termonebulización y aspersión electrotstática colosal. Estas gotas biomagnéticas infinitesimales flotan ingrávidas atrayéndose ineludiblemente hacia toda superficie expuesta o recodo microscópico sombrío al poseer cargas eléctricas inversas, sepultando letalmente a patógenos letales como Norwalk, COVID virulento, Estafilococos multi-resistentes o la temible Clostridium difficile.",
      "Esta purga atmosférica brutal no genera destilación ni condensación perjudicial sobre la electrónica extremadamente sensible o los tejidos rústicos dorados. Ofrecemos escudos fotocatalíticos oxidantes o peróxidos fríos disipables de base acuosa, que logran neutralizar las colonias miasmáticas disolviéndose sin dejar metales pesados volátiles. Al completarse el choque higiénico, procedemos al sellado analítico documentado expidiendo los folios de Trazabilidad Clínica requerida incondicionalmente por la Sanidad Pública Europea."
    ],
    details: [
      "Saturación de espectro 3D por micro-nebulización nebulográfica asegurando penetración celular masiva",
      "Destrucción relámpago contundente de mortíferas cadenas patógenas por contacto terminal",
      "Rigurosos expedientes sanitarios incluyendo asaltos directos profilácticos anti Legionela en conductos hídricos",
      "Shock higienizante colosal superando las peores tragedias por fallecimiento u horrorosos desbordes asépticos",
      "Cero fitotoxicidad atmosférica residual aplicando soluciones oficialmente despachadas por ministerios nacionales",
      "Estampación de aval técnico formal innegable, rubricando en libro tu certificación impecable y de confianza pública",
    ],
  },
  fumigacion: {
    title: "Fumigación a Nivel Industrial",
    image: "/expressive/fumigacion.jpg",
    description: [
      "Operamos bajo presiones y demandas arquitectónicas inmensurables acometiendo inmensos operativos técnicos. Articulamos colosales lonas blindadas, burbujas de contención mediante gases presurizados e inertes con una demoledora capacidad infiltrante y sin margen de retroceso vital para patógenos.",
      "Tratado operativamente como el 'remedio final e irreversible', este proceder es ordenado ante pesadillas logísticas inabarcables como el control aduanero en puertos comerciales, navieras de exportación y santuarios de acopio alimentario continental. Operaciones de alto factor restrictivo resueltas por ingenieros.",
      "Nuestra doctrina abarca la orquestación química matemática rigurosa inyectando fosfamina (Fosfuro de aluminio) o potentes dióxidos condensados en entornos monumentales heréticamente sellados. Estos volátiles mortales atraviesan por su peso molecular liviano cada fisura del cemento, cada lámina porosa del cartón o cada pulgada de un container marítimo reventando los sacos respiratorios letales de gorgojos, isópteros recónditos o plagas cuarentenarias ocultas, asegurando una pureza cero-supervivientes demandada globalmente.",
      "Este operativo, por naturaleza letal extremada, es regentado únicamente bajo la tutela estricta de una jerarquía de técnicos Nivel 3 portando escafandras autónomas de respiración ERA (Equipos de Respiración Autocontenida). Diseñamos anillos paramétricos de exclusión civil radiando lecturas telemétricas contiguas del gas infundido en PPM. La desorción controlada garantiza la volatilidad íntegra logrando reentregar un santuario inmenso y purificado para el comercio internacional bajo los estrictos convenios NIMF-15 aduaneros."
    ],
    details: [
      "Dosis precisas matemáticas de gases halogenados mortales saturando las atmósferas y midiendo curvas logarítmicas",
      "Purga exhaustiva aniquilando alimañas acartonadas en mastodónticas tolvas cerealísticas y cimientos logísticos pesados",
      "Sofocación sistemática paralizante del latido respiratorio del escurridizo gorgojo del grano y la silófaga tenaz",
      "Lecturas cronométricas telemáticas de evacuación asegurando la reposición cristalina al 100% molecular del dióxido natural",
      "Rígidos códigos arancelarios obedecidos escrupulosamente al milímetro respecto al vital marco de transito global NIMF-15",
      "Destacamentos Tácticos enfundados bajo corazas Nivel-3 respirando únicamente atmósferas encapsuladas (Unidades ERA)",
    ],
  },
  "tratamiento-madera": {
    title: "Preservación Vital e Histórica en Madera",
    image: "/expressive/madera.jpg",
    description: [
      "Rescatamos de la consunción y la irremediable sepultura a patrimonios invalorables. Sentenciamos el vergonzoso y cobarde apetito estructural propiciado por legiones de isópteros silófagos (termitas) y devastadores carcomas silenciosos. Le inyectamos una longeva eternidad a todo tipo de carpintería noble existente.",
      "Nos separamos de las superficiales barnicerías de bajo costo. Con tecnología de vanguardia y radar milimétrico, extirpamos la actividad destructora restituyendo el alma portante original. Salvemos las venas latientes de maderas maestras antiquísimas, o de tu amado parqué moderno recién expoliado.",
      "El esqueleto vital portante o los retablos ornamentados centenarios esconden patologías que no admiten parches. Nuestros curadores aplican el prestigioso 'Método de Inyección Profunda Multiválvula'. Consiste en taladrar la fibra de tensión con brocas quirúrgicas insertando tacos presurizados donde maquinamos bombas de compresión disparando geles insecticidas-fungicidas letales a 150 bares de presión. Esta marea tóxica fluídica inunda hasta el último laberinto roído petrificando a los nefastos gusanos o larvas comedoras.",
      "Complementariamente blindamos el perímetro inyectando potentes velos anti-retorno rodeando las vigas sustentantes que tocan muretes portantes. No conformes con sanar lo irreparable, fortificamos la oquedad destructiva rellenando cicatrices profundas con masillas epxo-resinadas restaurando matemáticamente la tensión mecánica perdida y salvando así tu patrimonio, tu familia y los majestuosos techos de la tragedia rotunda del desmoronamiento irreversible."
    ],
    details: [
      "Mapeado tomográfico 3D acústico penetrante de las vigas localizando los infartos por vacío y grietas silófagas",
      "Válvulas esqueléticas incrustadas disparando chorros altísima presión de veneno polimérico al tupido y blando duramen interno",
      "Instalación soterrada de anillos concéntricos defensivos y perimetrales sembrados de poderosísimo cebo inhibidor hormonal",
      "Impregnaciones protectoras espesas aplicadas saturando capilares cortando estrepitosamente la amenaza colonizadora micótica",
      "Regeneradores epoxi vertidos consolidando asombrosamente astillas destrozadas salvándolas del quiebre cataclísmico inminente",
      "El más firme y solemne pacto escrito multianual rubricando un insondable muro y resguardo blindando fiduciariamente tu inmueble",
    ],
  },
  "control-de-aves": {
    title: "Sistemas Disuasorios Integrales de Aves Urbanas",
    image: "/expressive/aves.jpg",
    description: [
      "Destronamos incruenta y educadamente a persistentes regimientos de asfixiantes palomas y estruendosas gaviotas invasivas reasentándolas en hábitats viables. Subsanamos los inaguantables desgastes sanitarios al amparo escrupuloso de toda ley conservacionista europea existente contra toda avifauna.",
      "El corrosivo y calcáreo guano ornitológico engulle y despelleja revestimientos costosos y es el nicho perfecto de microscópicos patógenos pulmonares peligrosísimos (como Histoplasmosis). Re-conquistamos la paz acústica y dimensional de tus cubiertas y bellos rosetones sin lastimar al rebaño volante.",
      "La obstinación biológica de las palomas en regresar a pernoctar a sus nidos de forja original rebasa los métodos obsoletos tradicionales. Nuestro frente táctico instaura un asedio disuasorio multi-vectorial vanguardista. Tensamos meticulosamente y al milímetro cortinas de mallas traslúcidas de nylon reforzado en polietileno UV, aislando colosales atrios o claraboyas cenitales desorientando irremediablemente la embestida aviar mientras protegemos escrupulosamente la estética purista de la monumental fachada arquitectónica europea.",
      "Cuando las cornisas labradas se convierten en pestilentes atalayas asediadas, fusionamos ingeniería acústica y física de choque silenciosa. Instalamos certeros cables electrizados de micromperajes innocuos para saltos repelentes inobjetables, púas de base dúctil y robustos sistemas de disuasión magneto-estroboscópico. Finalmente asaltamos la insostenible herencia del guano ácido anquilosado, saneando agresivamente los bloques pétreos mediante biocidas fungicónicos erradicando definitivamente piojillos aéreos trágicamente perjudiciales incrustados."
    ],
    details: [
      "Levantamiento fotogramétrico por dron de ultra-altitud modelando túneles de vuelo y cartografiando presiones de enjambre",
      "Redes tensadas de mallas simétricas en nylon naval con resistencia al rayo UV encapsuladas asépticamente con acero",
      "Agujas romas invisibles y rodillos pendulares instalables en alféizares preciosos o tejados históricos anulando de facto el posado",
      "Perfiles sónico-estroboscópicos repelentes en alta o muy baja frecuencia y faros eólicos refractarios reubicando innegociablemente el nido dormidero",
      "Meticulosa higienización, retirada biológicamente aséptica del lodo infectocontagioso rasqueteando y revitalizando cromo pátinas y alféizares",
      "Pólizas blindadas y cíclicas de barrido exhaustivo en tejados con amplias huellas industriales para matrices de captación fotovoltaica sensible",
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
            <h1 className="font-display text-4xl font-black mb-4">Servicio no encontrado</h1>
            <Link to="/" className="text-primary hover:underline">Volver al catálogo web</Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col">
      <Navbar />
      
      {/* MAGNIFICENT PREMIUM HERO SECTION */}
      <div className="pt-32 pb-16 relative">
        <div className="absolute top-0 right-0 w-[80%] md:w-[60%] h-[120%] bg-gradient-to-l from-primary/10 to-transparent -z-10 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 sm:mb-12 font-medium">
            <ArrowLeft className="w-4 h-4" />
            Volver a inicio
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wider uppercase mb-6 border border-primary/20">
                <Shield className="w-4 h-4" /> Excelencia Metodológica
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-foreground leading-tight">
                {service.title}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">
                {service.description[0]}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+34643395654" className="inline-flex items-center justify-center gap-2 bg-foreground text-background hover:bg-foreground/90 px-8 py-4 rounded-xl font-body font-bold transition-all hover:scale-105 active:scale-95 shadow-lg">
                  <Phone className="w-5 h-5" /> Llamada Directa
                </a>
                <a href={`https://wa.me/34643395654?text=${encodeURIComponent(`Hola, solicito consultoría técnica sobre el servicio maestro de ${service.title}.`)}`} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-xl font-body font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20">
                  <MessageCircle className="w-5 h-5" /> Acordar por WhatsApp
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

      {/* LUXURIOUS CONTENT SECTION */}
      <div className="py-20 relative bg-muted/20 border-t border-border/50 flex-1">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2 className="font-display text-4xl font-bold mb-8 text-foreground tracking-tight">Dominio y Ejecución Profesional</h2>
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
                <h3 className="font-display text-2xl font-bold mb-8 border-b border-border/60 pb-4 relative z-10 text-foreground">Garantías Operativas</h3>
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
