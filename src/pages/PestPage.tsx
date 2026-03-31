import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Phone, MessageCircle, AlertTriangle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const pestsData: Record<string, { title: string; icon: string; description: string; signs: string[]; risks: string[]; solution: string }> = {
  cucarachas: {
    title: "Cucarachas",
    icon: "🪳",
    description: "Las cucarachas son una de las plagas más comunes en hogares y negocios de Murcia. Se reproducen rápidamente y pueden transmitir enfermedades.",
    signs: ["Excrementos pequeños y oscuros", "Olor desagradable persistente", "Avistamientos nocturnos en cocina o baño", "Restos de mudas o cápsulas de huevos"],
    risks: ["Transmisión de salmonelosis y gastroenteritis", "Contaminación de alimentos", "Reacciones alérgicas y asma", "Daños a la reputación en negocios"],
    solution: "Utilizamos tratamientos con gel profesional y cebos específicos que eliminan la colonia desde el origen, incluyendo huevos y ninfas.",
  },
  roedores: {
    title: "Roedores",
    icon: "🐀",
    description: "Ratas y ratones causan daños estructurales, contaminan alimentos y transmiten enfermedades graves. Requieren intervención profesional urgente.",
    signs: ["Excrementos en forma de grano de arroz", "Ruidos nocturnos en paredes o techos", "Cables roídos o marcas de dientes", "Senderos o huellas en polvo"],
    risks: ["Leptospirosis y hantavirus", "Cortocircuitos por cables roídos", "Contaminación de agua y alimentos", "Daños estructurales significativos"],
    solution: "Realizamos una inspección completa, sellamos puntos de entrada, instalamos estaciones de cebo seguras y hacemos seguimiento hasta la eliminación total.",
  },
  hormigas: {
    title: "Hormigas",
    icon: "🐜",
    description: "Las colonias de hormigas pueden contar con millones de individuos. Sin tratamiento profesional, los productos domésticos solo eliminan las visibles.",
    signs: ["Hileras de hormigas en cocina o ventanas", "Montículos de tierra en el jardín", "Hormigas con alas (época de reproducción)", "Presencia cerca de alimentos dulces"],
    risks: ["Contaminación de alimentos", "Daños en jardines y cultivos", "Algunas especies muerden", "Invasión progresiva de toda la vivienda"],
    solution: "Aplicamos tratamientos con cebo que las hormigas llevan al nido, eliminando la reina y toda la colonia desde el interior.",
  },
  termitas: {
    title: "Termitas",
    icon: "🪲",
    description: "Las termitas destruyen silenciosamente las estructuras de madera. Cuando detectas los daños, el problema suele ser grave.",
    signs: ["Madera que suena hueca al golpear", "Pequeños agujeros en la madera", "Tubos de barro en paredes", "Alas desechadas cerca de ventanas"],
    risks: ["Destrucción de vigas y estructuras", "Compromiso de la integridad del edificio", "Daños en muebles y libros", "Reparaciones muy costosas si no se actúa"],
    solution: "Utilizamos sistemas de cebos y tratamientos de inyección directa en madera con garantía extendida de hasta 5 años.",
  },
  mosquitos: {
    title: "Mosquitos",
    icon: "🦟",
    description: "Los mosquitos no solo son molestos, sino que pueden transmitir enfermedades. El clima de Murcia favorece su proliferación.",
    signs: ["Picaduras frecuentes al atardecer", "Zumbidos nocturnos", "Agua estancada cerca de la vivienda", "Larvas en macetas o desagües"],
    risks: ["Picaduras dolorosas y alergias", "Transmisión de virus (dengue, Zika)", "Noches sin descanso", "Imposibilidad de disfrutar exteriores"],
    solution: "Realizamos tratamientos de nebulización en exteriores y eliminamos focos de cría. También instalamos trampas de captura ecológicas.",
  },
  chinches: {
    title: "Chinches",
    icon: "🛏️",
    description: "Las chinches de cama se alimentan de sangre humana por la noche. Son extremadamente difíciles de eliminar sin tratamiento profesional.",
    signs: ["Picaduras en línea al despertar", "Manchas oscuras en sábanas o colchón", "Pequeños insectos planos marrones", "Olor dulzón desagradable en la habitación"],
    risks: ["Picaduras que causan estrés e insomnio", "Reacciones alérgicas severas", "Propagación rápida a otras habitaciones", "Imposible eliminar con productos domésticos"],
    solution: "Aplicamos tratamientos térmicos y químicos combinados que eliminan todos los estadios de vida: huevos, ninfas y adultos.",
  },
};

const PestPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const pest = slug ? pestsData[slug] : null;

  if (!pest) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <div className="pt-32 pb-20 text-center container mx-auto px-4">
          <h1 className="font-display text-4xl font-black mb-4">Plaga no encontrada</h1>
          <Link to="/" className="text-primary hover:underline">Volver al inicio</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>

          <div className="text-6xl mb-6">{pest.icon}</div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6">{pest.title}</h1>
          <p className="text-muted-foreground text-xl leading-relaxed mb-12 max-w-2xl">{pest.description}</p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-card border border-border rounded-3xl p-8 shadow-cinematic">
              <h2 className="font-display text-xl font-bold mb-5">🔍 Señales de alerta</h2>
              <div className="space-y-3">
                {pest.signs.map((sign, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <AlertTriangle className="w-4 h-4 text-destructive shrink-0 mt-1" />
                    <span className="text-sm text-foreground">{sign}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border rounded-3xl p-8 shadow-cinematic">
              <h2 className="font-display text-xl font-bold mb-5">⚠️ Riesgos</h2>
              <div className="space-y-3">
                {pest.risks.map((risk, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <AlertTriangle className="w-4 h-4 text-destructive shrink-0 mt-1" />
                    <span className="text-sm text-foreground">{risk}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-3xl p-8 mb-12">
            <h2 className="font-display text-xl font-bold mb-4">✅ Nuestra solución</h2>
            <p className="text-foreground leading-relaxed">{pest.solution}</p>
          </div>

          <div className="bg-card border border-border rounded-3xl p-8 text-center shadow-cinematic">
            <h3 className="font-display text-2xl font-bold mb-4">¿Tienes {pest.title.toLowerCase()} en casa?</h3>
            <p className="text-muted-foreground mb-6">No esperes más. Contacta con nosotros ahora.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+34000000000" className="inline-flex items-center justify-center gap-2 bg-destructive text-destructive-foreground px-8 py-4 rounded-full font-body font-semibold">
                <Phone className="w-5 h-5" /> Llamar ahora
              </a>
              <a href={`https://wa.me/34000000000?text=${encodeURIComponent(`Hola, tengo un problema de ${pest.title} y necesito ayuda.`)}`} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-body font-semibold shadow-glow">
                <MessageCircle className="w-5 h-5" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PestPage;
