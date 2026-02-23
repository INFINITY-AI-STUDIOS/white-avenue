import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Instagram, Facebook, Send } from 'lucide-react';
import { SiWhatsapp } from '@icons-pack/react-simple-icons';
import React from 'react';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.');
  };

  return (
    <section id="contacto" className="section-padding bg-surface/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Contacto</h2>
            <h3 className="text-4xl font-bold text-text-main mb-8">Hablemos de tu sonrisa</h3>

            <div className="space-y-8 mb-12 flex flex-col items-center lg:items-start">
              <ContactItem
                icon={<MapPin />}
                title="Ubicación"
                content="Nogales, Sonora, México"
              />
              <ContactItem
                icon={<Phone />}
                title="Teléfono"
                content="631 249 9203"
              />
              <ContactItem
                icon={<Mail />}
                title="Email"
                content="fleyva1308@gmail.com"
              />
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12">
              <SocialLink href="https://instagram.com/dr.fausto-leyva" icon={<Instagram />} label="@dr.fausto-leyva" />
              <SocialLink href="https://facebook.com/whiteavenueclinic" icon={<Facebook />} label="@whiteavenueclinic" />
            </div>

            <a
              href="https://wa.me/526312499203"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform shadow-lg"
            >
              <SiWhatsapp size={20} />
              Chatear por WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-3xl shadow-xl border border-surface"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-text-muted">Nombre</label>
                  <input
                    required
                    type="text"
                    className="w-full bg-surface/30 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-text-muted">Teléfono</label>
                  <input
                    required
                    type="tel"
                    className="w-full bg-surface/30 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all"
                    placeholder="631 000 0000"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-text-muted">Email</label>
                <input
                  required
                  type="email"
                  className="w-full bg-surface/30 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all"
                  placeholder="tu@email.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-text-muted">Mensaje</label>
                <textarea
                  required
                  rows={4}
                  className="w-full bg-surface/30 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>
              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2 py-4">
                <Send size={20} />
                Enviar Mensaje
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, title, content }: { icon: any, title: string, content: string }) {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
      <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div className="text-center lg:text-left">
        <h4 className="text-xs font-bold uppercase tracking-widest text-text-muted">{title}</h4>
        <p className="text-lg font-bold text-text-main">{content}</p>
      </div>
    </div>
  );
}

function SocialLink({ href, icon, label }: { href: string, icon: any, label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 p-3 rounded-xl bg-white border border-surface text-text-muted hover:text-primary hover:border-primary transition-all"
    >
      {icon}
      <span className="text-xs font-bold">{label}</span>
    </a>
  );
}
