import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MapPin } from "lucide-react";

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
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-solid border-b border-border shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between py-4">
          <a href="#" className="font-display text-2xl font-bold tracking-tight">
            <span className="text-gradient-primary">M</span>
            <span className="text-foreground"> MONTCARRE</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <a href="tel:+34000000000" className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">+34 XXX XXX XXX</span>
            </a>
            <a
              href="#reservar"
              className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold hover:brightness-110 transition-all shadow-glow"
            >
              Reservar Ahora
            </a>
          </nav>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-foreground">
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
            className="md:hidden bg-card border-t border-border"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="text-foreground text-lg font-medium">
                  {link.label}
                </a>
              ))}
              <a href="#reservar" onClick={() => setMobileOpen(false)} className="bg-primary text-primary-foreground px-5 py-3 rounded-full text-center font-semibold">
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
