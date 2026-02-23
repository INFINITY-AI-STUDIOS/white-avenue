import { Instagram, Facebook, MapPin, Phone } from 'lucide-react';
import { SiWhatsapp } from '@icons-pack/react-simple-icons';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Row 1: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-center md:text-left">
          {/* Column 1: Logo & Text */}
          <div className="space-y-6 flex flex-col items-center md:items-start">
            <img
              src="/logo.png"
              alt="White Avenue"
              className="h-[34px] md:h-10 w-auto brightness-0 invert"
            />
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Odontología de calidad a precios accesibles. Especialistas en Ortodoncia con atención premium en Nogales y Hermosillo.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-secondary">Enlaces Rápidos</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#hero" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#acerca" className="hover:text-white transition-colors">Acerca de nosotros</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Preguntas Frecuentes</a></li>
              <li><a href="#contacto" className="hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-secondary">Servicios</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#servicios" className="hover:text-white transition-colors">Ortodoncia</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Limpieza Dental</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Blanqueamiento</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Resinas Estéticas</a></li>
            </ul>
          </div>

          {/* Column 4: Social & Contact */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-secondary">Contacto & Redes</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Phone size={16} className="text-secondary" />
                <span>631 249 9203</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <MapPin size={16} className="text-secondary" />
                <span>Nogales, Sonora</span>
              </li>
            </ul>
            <div className="flex justify-center md:justify-start gap-4 pt-2">
              <a href="https://instagram.com/dr.fausto-leyva" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
                <Instagram size={18} />
              </a>
              <a href="https://facebook.com/whiteavenueclinic" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
                <Facebook size={18} />
              </a>
              <a href="https://wa.me/526312499203" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
                <SiWhatsapp size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/10 mb-8" />

        {/* Row 2: Copyright & Developer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/40 font-medium">
          <div className="text-center md:text-left">
            <p className="text-white/80 font-bold uppercase tracking-widest mb-1">Dr. Fausto Leyva</p>
            <p>© {new Date().getFullYear()} White Avenue Dental Clinic. Todos los derechos reservados.</p>
          </div>

          <div className="text-center md:text-right">
            <p>
              Desarrollado por{' '}
              <a
                href="https://syngular.co"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:underline"
              >
                Syngular Air
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
