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
              <li className="flex items-center justify-center sm:justify-start gap-3 sm:gap-2.5 text-sm text-accent-foreground/60">
                <Phone className="w-4 h-4 sm:w-3.5 sm:h-3.5 text-primary shrink-0" />
                <a href="tel:+34643395654" className="hover:text-primary transition-colors">+34 643 39 56 54</a>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-3 sm:gap-2.5 text-sm text-accent-foreground/60">
                <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-3.5 sm:h-3.5 text-primary shrink-0" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                </svg>
                <a href="https://wa.me/34643395654" className="hover:text-primary transition-colors">WhatsApp</a>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-3 sm:gap-2.5 text-sm text-accent-foreground/60">
                <Mail className="w-4 h-4 sm:w-3.5 sm:h-3.5 text-primary shrink-0" />
                <a href="mailto:info@montcarre.es" className="hover:text-primary transition-colors">info@montcarre.es</a>
              </li>
              <li className="flex items-start justify-center sm:justify-start gap-3 sm:gap-2.5 text-sm text-accent-foreground/60">
                <MapPin className="w-4 h-4 sm:w-3.5 sm:h-3.5 text-primary shrink-0 mt-0.5" /> 
                <span className="text-left text-sm">Carril de la Torre, 59<br/>30006 Murcia, Espagne</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-3 sm:gap-2.5 text-sm text-accent-foreground/60">
                <Clock className="w-4 h-4 sm:w-3.5 sm:h-3.5 text-primary shrink-0" />
                Ouvert 24h/24
              </li>
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
