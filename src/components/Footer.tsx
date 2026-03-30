import { Phone, Mail, MapPin, Clock } from "lucide-react";

const services = ["Desinsectación", "Desratización", "Desinfección", "Fumigación", "Tratamiento madera", "Control de aves"];
const pests = ["Cucarachas", "Roedores", "Hormigas", "Termitas", "Mosquitos", "Chinches"];

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80 py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-14">
          <div>
            <h3 className="font-display text-2xl font-bold mb-4 text-background">
              <span className="text-primary">M</span> MONTCARRE
            </h3>
            <p className="text-sm leading-relaxed text-background/50">
              Control de plagas profesional en Murcia. Más de 10 años protegiendo hogares y negocios.
            </p>
          </div>
          <div>
            <h4 className="font-display font-bold mb-5 text-background text-sm uppercase tracking-widest">Servicios</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (<li key={s} className="text-sm text-background/40 hover:text-primary transition-colors cursor-pointer">{s}</li>))}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold mb-5 text-background text-sm uppercase tracking-widest">Plagas</h4>
            <ul className="space-y-2.5">
              {pests.map((p) => (<li key={p} className="text-sm text-background/40 hover:text-primary transition-colors cursor-pointer">{p}</li>))}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold mb-5 text-background text-sm uppercase tracking-widest">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-background/40"><Phone className="w-4 h-4 text-primary shrink-0" /> +34 XXX XXX XXX</li>
              <li className="flex items-center gap-3 text-sm text-background/40"><Mail className="w-4 h-4 text-primary shrink-0" /> info@montcarre.es</li>
              <li className="flex items-center gap-3 text-sm text-background/40"><MapPin className="w-4 h-4 text-primary shrink-0" /> Murcia, España</li>
              <li className="flex items-center gap-3 text-sm text-background/40"><Clock className="w-4 h-4 text-primary shrink-0" /> 24/7 — Todos los días</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/10 pt-8 text-center">
          <p className="text-xs text-background/30">© 2026 MONTCARRE Control de Plagas. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
