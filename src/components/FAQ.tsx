import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: '¿Atienden urgencias?',
    a: 'Sí, contamos con atención prioritaria para casos de dolor agudo o traumatismos dentales. Te recomendamos llamarnos de inmediato al 631 249 9203.'
  },
  {
    q: '¿La valoración tiene costo?',
    a: 'Nuestra valoración inicial es integral y tiene un costo accesible que se bonifica si decides iniciar tu tratamiento con nosotros.'
  },
  {
    q: '¿Aceptan pagos con tarjeta?',
    a: 'Aceptamos todas las tarjetas de crédito y débito, además de ofrecer planes de financiamiento para tratamientos de ortodoncia.'
  },
  {
    q: '¿Cuánto dura un tratamiento de ortodoncia?',
    a: 'Depende de la complejidad de cada caso, pero el promedio oscila entre 12 y 24 meses. En tu valoración te daremos un tiempo estimado preciso.'
  },
  {
    q: '¿Dónde están ubicados?',
    a: 'Nuestra clínica principal se encuentra en Nogales, Sonora. Próximamente abriremos nuestra segunda sucursal en Hermosillo.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Preguntas Frecuentes</h2>
          <h3 className="text-4xl font-bold text-text-main">Resolvemos tus dudas</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-surface rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-6 flex justify-between items-center text-center md:text-left hover:bg-surface/20 transition-colors"
              >
                <span className="font-bold text-text-main flex-grow">{faq.q}</span>
                <ChevronDown 
                  className={`text-primary transition-transform duration-300 shrink-0 ${openIndex === idx ? 'rotate-180' : ''}`} 
                  size={20} 
                />
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-text-muted text-sm leading-relaxed text-center md:text-left">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
