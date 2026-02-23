import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'María García',
    role: 'Paciente de Ortodoncia',
    content: 'Excelente atención. Los doctores son muy profesionales y el trato es inmejorable. Mi tratamiento de ortodoncia ha sido un éxito total.',
    stars: 5,
  },
  {
    name: 'Juan Pérez',
    role: 'Paciente General',
    content: 'La mejor clínica dental en Nogales. Precios muy accesibles y un servicio premium. Definitivamente los recomiendo para cualquier tratamiento.',
    stars: 5,
  },
  {
    name: 'Ana Martínez',
    role: 'Paciente de Estética',
    content: 'Me realicé un blanqueamiento y el resultado fue increíble. El personal es muy amable y las instalaciones son de primera.',
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Testimonios</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-text-main">Lo que dicen nuestros pacientes</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-surface/10 border border-surface relative"
            >
              <Quote className="absolute top-6 right-6 text-primary/20" size={40} />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} size={16} className="fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-text-muted mb-6 italic">"{testimonial.content}"</p>
              <div>
                <h4 className="font-bold text-text-main">{testimonial.name}</h4>
                <p className="text-xs text-primary font-medium">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
