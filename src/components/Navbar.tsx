import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown, Shield } from "lucide-react";

const services = [
  { label: "Rodent Control", slug: "rodent-control", emoji: "🐀" },
  { label: "Insect Control", slug: "insect-control", emoji: "🪳" },
  { label: "Bed Bug Treatment", slug: "bed-bug-treatment", emoji: "🛏️" },
  { label: "Bird Proofing", slug: "bird-proofing", emoji: "🕊️" },
  { label: "Fumigation", slug: "fumigation", emoji: "💨" },
  { label: "Disinfection", slug: "disinfection", emoji: "🧪" },
];

const pests = [
  { label: "Mice", slug: "mice", emoji: "🐭" },
  { label: "Rats", slug: "rats", emoji: "🐀" },
  { label: "Cockroaches", slug: "cockroaches", emoji: "🪳" },
  { label: "Bed Bugs", slug: "bed-bugs", emoji: "🛏️" },
  { label: "Wasps", slug: "wasps", emoji: "🐝" },
  { label: "Moths", slug: "moths", emoji: "🦋" },
  { label: "Pigeons", slug: "pigeons", emoji: "🕊️" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobilePestsOpen, setMobilePestsOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";
  const useDarkText = !isHome || scrolled || mobileOpen;

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
    setMobilePestsOpen(false);
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
          <Link 
            to="/" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-glow group-hover:shadow-glow-strong transition-shadow duration-200">
              <Shield className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display text-xl font-bold tracking-tight">
              <span className="text-primary">Environ</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            <div className="relative group/drop">
              <button className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${linkClass}`}>
                Services
                <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover/drop:rotate-180" />
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover/drop:opacity-100 group-hover/drop:visible transition-all duration-200 z-50">
                <div className="bg-card border border-border rounded-2xl shadow-cinematic p-2 min-w-[220px]">
                  {services.map((s) => (
                    <Link key={s.slug} to={`/services/${s.slug}`}
                      className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-foreground hover:bg-primary/5 hover:text-primary transition-colors">
                      <span className="text-base">{s.emoji}</span>
                      <span className="font-medium">{s.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative group/drop2">
              <button className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${linkClass}`}>
                Pests
                <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover/drop2:rotate-180" />
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover/drop2:opacity-100 group-hover/drop2:visible transition-all duration-200 z-50">
                <div className="bg-card border border-border rounded-2xl shadow-cinematic p-2 min-w-[220px]">
                  {pests.map((p) => (
                    <Link key={p.slug} to={`/pests/${p.slug}`}
                      className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-foreground hover:bg-primary/5 hover:text-primary transition-colors">
                      <span className="text-base">{p.emoji}</span>
                      <span className="font-medium">{p.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <a href="/#reviews" className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${linkClass}`}>
              Reviews
            </a>
            <a href="/#articles" className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${linkClass}`}>
              Articles
            </a>
            <a href="/#contact" className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${linkClass}`}>
              Contact
            </a>

            <div className={`w-px h-6 mx-2 ${useDarkText ? "bg-border" : "bg-white/15"}`} />

            <a href="tel:+442038758225" className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${useDarkText ? "text-muted-foreground hover:text-primary" : "text-white/70 hover:text-white"}`}>
              <Phone className="w-4 h-4" />
              <span>020 3875 8225</span>
            </a>
            <a href="#book" className="bg-primary text-primary-foreground px-5 lg:px-6 py-2.5 rounded-full text-sm font-semibold hover:brightness-110 transition-all shadow-glow hover:shadow-glow-strong whitespace-nowrap">
              Book Now
            </a>
          </nav>

          <button onClick={() => setMobileOpen(!mobileOpen)} className={`lg:hidden ${useDarkText ? "text-foreground" : "text-white"}`}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border shadow-cinematic">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-1 max-h-[85vh] overflow-y-auto soft-scrollbar">
            <button onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex items-center justify-between w-full text-foreground text-lg font-medium py-3 px-2 rounded-xl hover:bg-muted/50 transition-colors">
              <span>Services</span>
              <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileServicesOpen && (
              <div className="pl-4 pb-2 space-y-1">
                {services.map((s) => (
                  <Link key={s.slug} to={`/services/${s.slug}`} onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 py-2.5 px-3 rounded-xl text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors">
                    <span>{s.emoji}</span>
                    <span className="text-sm font-medium">{s.label}</span>
                  </Link>
                ))}
              </div>
            )}

            <button onClick={() => setMobilePestsOpen(!mobilePestsOpen)}
              className="flex items-center justify-between w-full text-foreground text-lg font-medium py-3 px-2 rounded-xl hover:bg-muted/50 transition-colors">
              <span>Pests</span>
              <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${mobilePestsOpen ? "rotate-180" : ""}`} />
            </button>
            {mobilePestsOpen && (
              <div className="pl-4 pb-2 space-y-1">
                {pests.map((p) => (
                  <Link key={p.slug} to={`/pests/${p.slug}`} onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 py-2.5 px-3 rounded-xl text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors">
                    <span>{p.emoji}</span>
                    <span className="text-sm font-medium">{p.label}</span>
                  </Link>
                ))}
              </div>
            )}

            <a href="/#reviews" onClick={() => setMobileOpen(false)} className="text-foreground text-lg font-medium py-3 px-2 rounded-xl hover:bg-muted/50">
              Reviews
            </a>
            <a href="/#articles" onClick={() => setMobileOpen(false)} className="text-foreground text-lg font-medium py-3 px-2 rounded-xl hover:bg-muted/50">
              Articles
            </a>
            <a href="/#contact" onClick={() => setMobileOpen(false)} className="text-foreground text-lg font-medium py-3 px-2 rounded-xl hover:bg-muted/50">
              Contact
            </a>
            <div className="pt-3 border-t border-border mt-2">
              <a href="#book" onClick={() => setMobileOpen(false)} className="block bg-primary text-primary-foreground px-5 py-3.5 rounded-full text-center font-semibold shadow-glow">
                Book Now
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
