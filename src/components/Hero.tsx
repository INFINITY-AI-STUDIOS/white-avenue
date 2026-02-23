import { motion } from 'motion/react';
import { Calendar, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1920&h=1080"
          alt="White Avenue Dental Clinic"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-black/60" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-16 pb-16 md:pt-36 md:pb-36">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-secondary text-primary rounded-full">
            Odontología de calidad a precios accesibles
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8">
            Sonrisas <span className="text-secondary">Premium</span>,<br />
            Atención <span className="text-secondary">Accesible</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Odontología especializada en Ortodoncia con atención humana y profesional.
            Experimenta el cuidado dental de alto nivel que tu sonrisa merece en Nogales, Sonora.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contacto" className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2">
              <Calendar size={20} />
              Agendar Cita
            </a>
            <a
              href="https://wa.me/526312499203"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
