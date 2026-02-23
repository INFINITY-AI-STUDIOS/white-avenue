import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { name: 'Inicio', href: '#hero' },
  { name: 'Acerca', href: '#acerca' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-header py-3' : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center">
        <a href="#hero" className="mr-auto">
          <img
            src="/logo.png"
            alt="White Avenue"
            className={`h-7 md:h-8 w-auto transition-all ${isScrolled ? 'brightness-100' : 'brightness-0 invert'}`}
          />
        </a>

        {/* Desktop Menu - Centered */}
        <div className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2 space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/90 hover:text-secondary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block ml-auto">
          <a
            href="https://wa.me/526312499203"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary text-primary px-5 py-2 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-white transition-all shadow-lg shadow-secondary/20"
          >
            <Phone size={16} />
            Agendar por WhatsApp
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white ml-auto relative z-[60]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu - Redesigned to be more compact and elegant */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[50] md:hidden"
            />

            {/* Menu Card */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="absolute top-20 left-6 right-6 bg-white rounded-[32px] shadow-2xl z-[55] md:hidden overflow-hidden border border-surface"
            >
              <div className="flex flex-col p-8 space-y-6">
                {navLinks.map((link, idx) => (
                  <motion.a
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-bold text-text-main hover:text-primary transition-colors tracking-tight"
                  >
                    {link.name}
                  </motion.a>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="pt-4"
                >
                  <a
                    href="https://wa.me/526312499203"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary text-white w-full py-4 rounded-2xl text-center font-bold text-lg flex items-center justify-center gap-3 shadow-lg shadow-primary/20 active:scale-95 transition-transform"
                  >
                    <Phone size={20} />
                    Agendar Cita
                  </a>
                </motion.div>
              </div>

              <div className="bg-surface/30 p-6 text-center text-text-muted text-[10px] font-bold uppercase tracking-widest">
                <p>White Avenue Dental Clinic</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
