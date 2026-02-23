import { motion } from 'motion/react';
import { CheckCircle2, Users, Award, TrendingUp } from 'lucide-react';

const stats = [
  { icon: <Users className="text-primary" />, label: 'Colaboradores', value: '34+' },
  { icon: <TrendingUp className="text-primary" />, label: 'Sillones Dentales', value: '12' },
  { icon: <Award className="text-primary" />, label: 'Años de Experiencia', value: '30' },
];

export default function About() {
  return (
    <section id="acerca" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Nuestra Historia</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-text-main mb-8 leading-tight">
              De una visión familiar a una <span className="text-primary">referencia regional</span>.
            </h3>
            <div className="space-y-6 text-text-muted leading-relaxed">
              <p>
                White Avenue fue fundada por el <strong>Dr. Fausto Leyva</strong>, con 30 años de experiencia en odontología de alto valor.
                Nacimos con la misión de democratizar la salud dental premium.
              </p>
              <p>
                Durante la pandemia, enfrentamos desafíos que nos obligaron a evolucionar.
                Apostamos por la transformación digital y una reubicación estratégica que cambió nuestro destino.
              </p>
              <p className="bg-surface p-6 rounded-2xl border-l-4 border-primary italic text-left">
                "En solo un año, pasamos de 2 a 12 sillones dentales, consolidando un equipo de 34 profesionales apasionados por tu sonrisa."
              </p>
              <p>
                Hoy, nos expandimos con orgullo hacia Hermosillo, Sonora, manteniendo siempre nuestra esencia: atención amable, procesos profesionalizados y costos que cuidan tu economía.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
              <div className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left gap-3">
                <CheckCircle2 className="text-primary shrink-0" size={20} />
                <div>
                  <h4 className="font-bold text-text-main">Atención Amable</h4>
                  <p className="text-xs text-text-muted">Trato humano en cada consulta.</p>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left gap-3">
                <CheckCircle2 className="text-primary shrink-0" size={20} />
                <div>
                  <h4 className="font-bold text-text-main">Servicio Premium</h4>
                  <p className="text-xs text-text-muted">Tecnología de vanguardia.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/about_clinic_provided.png"
                alt="White Avenue Dental Clinic"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Stats Overlay */}
            <div className="absolute -bottom-10 -left-10 right-10 bg-white p-8 rounded-3xl shadow-xl grid grid-cols-3 gap-4 border border-surface">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="flex justify-center mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-text-main">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-wider text-text-muted font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
