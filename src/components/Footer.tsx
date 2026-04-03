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
    <footer className="bg-gradient-to-br from-[hsl(152,50%,12%)] via-[hsl(152,40%,8%)] to-[hsl(220,20%,5%)] text-accent-foreground py-16 md:py-20 relative overflow-hidden">
      {/* Cinematic glows */}
      <div className="absolute top-0 right-0 w-1/2 md:w-1/3 h-[300px] bg-primary/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 md:w-1/3 h-[250px] bg-[hsl(var(--warm))]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 md:w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[hsl(var(--warm))]/40 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 mb-12">
          <div className="col-span-2 lg:col-span-1 text-center sm:text-left">
            <h3 className="font-display text-xl sm:text-2xl font-bold mb-3 text-accent-foreground flex items-center justify-center sm:justify-start gap-1">
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
          <div className="col-span-2 lg:col-span-1 sm:text-left">
            <h4 className="font-body font-semibold mb-4 text-accent-foreground/70 text-xs uppercase tracking-widest text-center sm:text-left">Contacto</h4>
            <ul className="space-y-3 sm:space-y-2.5">
              <li className="flex items-center justify-center sm:justify-start gap-3 sm:gap-2.5 text-sm text-accent-foreground/35"><Phone className="w-4 h-4 sm:w-3.5 sm:h-3.5 text-primary shrink-0" /> +34 XXX XXX XXX</li>
              <li className="flex items-center justify-center sm:justify-start gap-3 sm:gap-2.5 text-sm text-accent-foreground/35"><Mail className="w-4 h-4 sm:w-3.5 sm:h-3.5 text-primary shrink-0" /> info@montcarre.es</li>
              <li className="flex items-center justify-center sm:justify-start gap-3 sm:gap-2.5 text-sm text-accent-foreground/35"><MapPin className="w-4 h-4 sm:w-3.5 sm:h-3.5 text-primary shrink-0" /> Murcia, España</li>
              <li className="flex items-center justify-center sm:justify-start gap-3 sm:gap-2.5 text-sm text-accent-foreground/35"><Clock className="w-4 h-4 sm:w-3.5 sm:h-3.5 text-primary shrink-0" /> 24/7</li>
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
