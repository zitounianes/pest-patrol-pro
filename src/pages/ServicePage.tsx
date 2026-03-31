import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Shield, CheckCircle2, Phone, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const servicesData: Record<string, { title: string; description: string; details: string[]; icon: string }> = {
  desinsectacion: {
    title: "Desinsectación",
    icon: "🪳",
    description: "Eliminación profesional de insectos rastreros y voladores con métodos seguros y certificados.",
    details: [
      "Tratamientos con gel y cebo para cucarachas",
      "Nebulización para mosquitos y moscas",
      "Tratamiento de pulgas y garrapatas",
      "Control de avispas y abejas",
      "Métodos seguros para familias y mascotas",
      "Garantía de resultado incluida",
    ],
  },
  desratizacion: {
    title: "Desratización",
    icon: "🐀",
    description: "Control integral de roedores: ratas y ratones. Eliminación del foco y prevención de nuevas entradas.",
    details: [
      "Inspección y localización de madrigueras",
      "Sellado de puntos de entrada",
      "Estaciones de cebo seguras",
      "Trampas mecánicas profesionales",
      "Seguimiento y monitorización continua",
      "Desinfección posterior incluida",
    ],
  },
  desinfeccion: {
    title: "Desinfección",
    icon: "🧹",
    description: "Desinfección de espacios para eliminar bacterias, virus y hongos con productos homologados.",
    details: [
      "Nebulización ULV de amplio espectro",
      "Desinfección post-plaga",
      "Tratamiento anti-legionella",
      "Desinfección de conductos de aire",
      "Productos homologados por Sanidad",
      "Certificado de desinfección incluido",
    ],
  },
  fumigacion: {
    title: "Fumigación",
    icon: "💨",
    description: "Fumigación profesional para espacios grandes, almacenes y naves industriales.",
    details: [
      "Fumigación con gas inerte",
      "Tratamiento de grandes superficies",
      "Almacenes y naves industriales",
      "Contenedores de mercancías",
      "Protocolo de seguridad completo",
      "Cumplimiento normativa vigente",
    ],
  },
  "tratamiento-madera": {
    title: "Tratamiento de Madera",
    icon: "🪵",
    description: "Protección y tratamiento de estructuras de madera contra termitas, carcoma y hongos xilófagos.",
    details: [
      "Diagnóstico con detectores acústicos",
      "Inyección de biocidas en vigas",
      "Sistema de cebos para termitas",
      "Tratamiento preventivo de madera nueva",
      "Restauración de madera dañada",
      "Garantía extendida de 5 años",
    ],
  },
  "control-de-aves": {
    title: "Control de Aves",
    icon: "🐦",
    description: "Sistemas disuasorios para palomas y otras aves. Protección de edificios y monumentos.",
    details: [
      "Instalación de pinchos anti-palomas",
      "Redes de exclusión profesionales",
      "Sistemas de sonido disuasorios",
      "Limpieza y desinfección de excrementos",
      "Protección de paneles solares",
      "Mantenimiento periódico incluido",
    ],
  },
};

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesData[slug] : null;

  if (!service) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <div className="pt-32 pb-20 text-center container mx-auto px-4">
          <h1 className="font-display text-4xl font-black mb-4">Servicio no encontrado</h1>
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

          <div className="text-6xl mb-6">{service.icon}</div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6">{service.title}</h1>
          <p className="text-muted-foreground text-xl leading-relaxed mb-12 max-w-2xl">{service.description}</p>

          <div className="bg-card border border-border rounded-3xl p-8 shadow-cinematic mb-12">
            <h2 className="font-display text-2xl font-bold mb-6">¿Qué incluye?</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {service.details.map((detail, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground">{detail}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-3xl p-8 text-center">
            <h3 className="font-display text-2xl font-bold mb-4">¿Necesitas este servicio?</h3>
            <p className="text-muted-foreground mb-6">Contacta con nosotros para un presupuesto gratuito y sin compromiso.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+34000000000" className="inline-flex items-center justify-center gap-2 bg-destructive text-destructive-foreground px-8 py-4 rounded-full font-body font-semibold">
                <Phone className="w-5 h-5" /> Llamar ahora
              </a>
              <a href={`https://wa.me/34000000000?text=${encodeURIComponent(`Hola, me interesa el servicio de ${service.title}`)}`} target="_blank" rel="noopener noreferrer"
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

export default ServicePage;
