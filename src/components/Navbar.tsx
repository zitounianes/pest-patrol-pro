import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown, Shield } from "lucide-react";

const servicios = [
  { label: "Desinsectación", slug: "desinsectacion", emoji: "🪳" },
  { label: "Desratización", slug: "desratizacion", emoji: "🐀" },
  { label: "Desinfección", slug: "desinfeccion", emoji: "🧪" },
  { label: "Fumigación", slug: "fumigacion", emoji: "💨" },
  { label: "Tratamiento Madera", slug: "tratamiento-madera", emoji: "🪵" },
  { label: "Control de Aves", slug: "control-de-aves", emoji: "🕊️" },
];

const plagas = [
  { label: "Cucarachas", slug: "cucarachas", emoji: "🪳" },
  { label: "Roedores", slug: "roedores", emoji: "🐀" },
  { label: "Hormigas", slug: "hormigas", emoji: "🐜" },
  { label: "Termitas", slug: "termitas", emoji: "🪲" },
  { label: "Mosquitos", slug: "mosquitos", emoji: "🦟" },
  { label: "Chinches", slug: "chinches", emoji: "🛏️" },
  { label: "Palomas", slug: "palomas", emoji: "🕊️" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServiciosOpen, setMobileServiciosOpen] = useState(false);
  const [mobilePlagasOpen, setMobilePlagasOpen] = useState(false);
  const location = useLocation();

  // On subpages (not homepage), or when scrolled, or when opening mobile menu, use solid/dark-text style
  const isHome = location.pathname === "/";
  const useDarkText = !isHome || scrolled || mobileOpen;

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileServiciosOpen(false);
    setMobilePlagasOpen(false);
  }, [location.pathname]);

  const linkClass = useDarkText
    ? "text-muted-foreground hover:text-primary hover:bg-primary/5"
    : "text-white/80 hover:text-white";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        useDarkText ? "nav-solid border-b border-border shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-glow group-hover:shadow-glow-strong transition-shadow duration-200">
              <Shield className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display text-xl font-bold tracking-tight">
              <span className="text-primary">MONT</span>
              <span className={`${useDarkText ? "text-foreground" : "text-white"} transition-colors duration-300`}>CARRE</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Servicios Dropdown */}
            <div className="relative group/drop">
              <button className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${linkClass}`}>
                Servicios
                <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover/drop:rotate-180" />
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover/drop:opacity-100 group-hover/drop:visible transition-all duration-200 z-50">
                <div className="bg-card border border-border rounded-2xl shadow-cinematic p-2 min-w-[220px]">
                  {servicios.map((s) => (
                    <Link key={s.slug} to={`/servicios/${s.slug}`}
                      className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-foreground hover:bg-primary/5 hover:text-primary transition-colors">
                      <span className="text-base">{s.emoji}</span>
                      <span className="font-medium">{s.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Plagas Dropdown */}
            <div className="relative group/drop2">
              <button className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${linkClass}`}>
                Plagas
                <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover/drop2:rotate-180" />
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover/drop2:opacity-100 group-hover/drop2:visible transition-all duration-200 z-50">
                <div className="bg-card border border-border rounded-2xl shadow-cinematic p-2 min-w-[220px]">
                  {plagas.map((p) => (
                    <Link key={p.slug} to={`/plagas/${p.slug}`}
                      className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-foreground hover:bg-primary/5 hover:text-primary transition-colors">
                      <span className="text-base">{p.emoji}</span>
                      <span className="font-medium">{p.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <a href="/#opiniones" className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${linkClass}`}>
              Opiniones
            </a>
            <a href="/#articulos" className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${linkClass}`}>
              Artículos
            </a>
            <a href="/#contacto" className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${linkClass}`}>
              Contacto
            </a>

            <div className={`w-px h-6 mx-2 ${useDarkText ? "bg-border" : "bg-white/15"}`} />

            <a href="tel:+34000000000" className={`flex items-center gap-1.5 px-3 py-2 text-sm rounded-lg transition-colors ${useDarkText ? "text-muted-foreground hover:text-primary" : "text-white/70 hover:text-white"}`}>
              <Phone className="w-4 h-4" />
            </a>
            <a href="#reservar" className="bg-primary text-primary-foreground px-5 lg:px-6 py-2.5 rounded-full text-sm font-semibold hover:brightness-110 transition-all shadow-glow hover:shadow-glow-strong whitespace-nowrap">
              Reservar Ahora
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className={`lg:hidden ${useDarkText ? "text-foreground" : "text-white"}`}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border shadow-cinematic">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-1 max-h-[85vh] overflow-y-auto soft-scrollbar">
            {/* Mobile Servicios */}
            <button onClick={() => setMobileServiciosOpen(!mobileServiciosOpen)}
              className="flex items-center justify-between w-full text-foreground text-lg font-medium py-3 px-2 rounded-xl hover:bg-muted/50 transition-colors">
              <span>Servicios</span>
              <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${mobileServiciosOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileServiciosOpen && (
              <div className="pl-4 pb-2 space-y-1">
                {servicios.map((s) => (
                  <Link key={s.slug} to={`/servicios/${s.slug}`} onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 py-2.5 px-3 rounded-xl text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors">
                    <span>{s.emoji}</span>
                    <span className="text-sm font-medium">{s.label}</span>
                  </Link>
                ))}
              </div>
            )}

            {/* Mobile Plagas */}
            <button onClick={() => setMobilePlagasOpen(!mobilePlagasOpen)}
              className="flex items-center justify-between w-full text-foreground text-lg font-medium py-3 px-2 rounded-xl hover:bg-muted/50 transition-colors">
              <span>Plagas</span>
              <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${mobilePlagasOpen ? "rotate-180" : ""}`} />
            </button>
            {mobilePlagasOpen && (
              <div className="pl-4 pb-2 space-y-1">
                {plagas.map((p) => (
                  <Link key={p.slug} to={`/plagas/${p.slug}`} onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 py-2.5 px-3 rounded-xl text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors">
                    <span>{p.emoji}</span>
                    <span className="text-sm font-medium">{p.label}</span>
                  </Link>
                ))}
              </div>
            )}

            <a href="/#opiniones" onClick={() => setMobileOpen(false)} className="text-foreground text-lg font-medium py-3 px-2 rounded-xl hover:bg-muted/50">
              Opiniones
            </a>
            <a href="/#articulos" onClick={() => setMobileOpen(false)} className="text-foreground text-lg font-medium py-3 px-2 rounded-xl hover:bg-muted/50">
              Artículos
            </a>
            <a href="/#contacto" onClick={() => setMobileOpen(false)} className="text-foreground text-lg font-medium py-3 px-2 rounded-xl hover:bg-muted/50">
              Contacto
            </a>
            <div className="pt-3 border-t border-border mt-2">
              <a href="#reservar" onClick={() => setMobileOpen(false)} className="block bg-primary text-primary-foreground px-5 py-3.5 rounded-full text-center font-semibold shadow-glow">
                Reservar Ahora
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
