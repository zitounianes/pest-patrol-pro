import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, MapPin, Clock } from "lucide-react";

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Opiniones", href: "#opiniones" },
  { label: "Artículos", href: "#articulos" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-glow" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        {/* Top bar */}
        <div className="hidden md:flex items-center justify-end gap-6 py-2 text-xs text-muted-foreground border-b border-border/30">
          <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> +34 XXX XXX XXX</span>
          <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> info@montcarre.es</span>
          <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> Murcia, España</span>
          <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> 24/7</span>
        </div>

        {/* Main nav */}
        <div className="flex items-center justify-between py-4">
          <a href="#" className="font-display text-2xl font-bold tracking-tight">
            <span className="text-gradient-primary">M</span> MONTCARRE
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#reservar"
              className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:brightness-110 transition-all"
            >
              Reservar Ahora
            </a>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-foreground"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-glow"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-foreground text-lg font-medium"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#reservar"
                onClick={() => setMobileOpen(false)}
                className="bg-primary text-primary-foreground px-5 py-3 rounded-lg text-center font-semibold"
              >
                Reservar Ahora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
