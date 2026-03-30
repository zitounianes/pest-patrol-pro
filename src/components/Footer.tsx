import { Phone, Mail, MapPin, Clock } from "lucide-react";

const services = ["Desinsectación", "Desratización", "Desinfección", "Fumigación", "Tratamiento madera", "Control de aves"];
const pests = ["Cucarachas", "Roedores", "Hormigas", "Termitas", "Mosquitos", "Chinches"];

const Footer = () => {
  return (
    <footer className="border-t border-border py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="font-display text-xl font-bold mb-4">
              <span className="text-gradient-primary">M</span> MONTCARRE
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Control de plagas profesional en Murcia. Más de 10 años protegiendo hogares y negocios con técnicas avanzadas y seguras.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s} className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Plagas</h4>
            <ul className="space-y-2">
              {pests.map((p) => (
                <li key={p} className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">{p}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" /> +34 XXX XXX XXX
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" /> info@montcarre.es
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" /> Murcia, España
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-primary" /> 24/7 — Todos los días
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © 2026 MONTCARRE Control de Plagas. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
