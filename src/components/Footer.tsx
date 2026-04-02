import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { name: "Desinsectación", slug: "desinsectacion" },
  { name: "Desratización", slug: "desratizacion" },
  { name: "Desinfección", slug: "desinfeccion" },
  { name: "Fumigación", slug: "fumigacion" },
  { name: "Tratamiento madera", slug: "tratamiento-madera" },
  { name: "Control de aves", slug: "control-de-aves" },
];

const pests = [
  { name: "Cucarachas", slug: "cucarachas" },
  { name: "Roedores", slug: "roedores" },
  { name: "Hormigas", slug: "hormigas" },
  { name: "Termitas", slug: "termitas" },
  { name: "Mosquitos", slug: "mosquitos" },
  { name: "Chinches", slug: "chinches" },
];

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-display text-xl font-bold mb-3 text-accent-foreground">
              <span className="text-primary">M</span> MONTCARRE
            </h3>
            <p className="text-sm leading-relaxed text-accent-foreground/40">
              Control de plagas profesional en Murcia. Protegiendo hogares y negocios.
            </p>
          </div>
          <div>
            <h4 className="font-body font-semibold mb-4 text-accent-foreground/70 text-xs uppercase tracking-widest">Servicios</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={`/servicios/${s.slug}`} className="text-sm text-accent-foreground/35 hover:text-primary transition-colors">{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-body font-semibold mb-4 text-accent-foreground/70 text-xs uppercase tracking-widest">Plagas</h4>
            <ul className="space-y-2">
              {pests.map((p) => (
                <li key={p.slug}>
                  <Link to={`/plagas/${p.slug}`} className="text-sm text-accent-foreground/35 hover:text-primary transition-colors">{p.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-body font-semibold mb-4 text-accent-foreground/70 text-xs uppercase tracking-widest">Contacto</h4>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2.5 text-sm text-accent-foreground/35"><Phone className="w-3.5 h-3.5 text-primary shrink-0" /> +34 XXX XXX XXX</li>
              <li className="flex items-center gap-2.5 text-sm text-accent-foreground/35"><Mail className="w-3.5 h-3.5 text-primary shrink-0" /> info@montcarre.es</li>
              <li className="flex items-center gap-2.5 text-sm text-accent-foreground/35"><MapPin className="w-3.5 h-3.5 text-primary shrink-0" /> Murcia, España</li>
              <li className="flex items-center gap-2.5 text-sm text-accent-foreground/35"><Clock className="w-3.5 h-3.5 text-primary shrink-0" /> 24/7</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-accent-foreground/8 pt-6 text-center">
          <p className="text-xs text-accent-foreground/25">© 2026 MONTCARRE. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
