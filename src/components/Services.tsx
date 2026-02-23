import { motion } from 'motion/react';
import React from 'react';
import {
  Sparkles,
  ShieldCheck,
  Smile,
  Eraser,
  Layers,
  Stethoscope,
  Activity,
  HeartPulse
} from 'lucide-react';

const generalServices = [
  { icon: <Sparkles />, title: 'Limpieza dental', desc: 'Eliminación profunda de sarro y placa para una salud óptima.' },
  { icon: <ShieldCheck />, title: 'Resinas estéticas', desc: 'Restauraciones invisibles que devuelven la forma natural a tus dientes.' },
  { icon: <Smile />, title: 'Blanqueamiento', desc: 'Aclara tu tono dental con resultados profesionales y seguros.' },
  { icon: <Eraser />, title: 'Extracciones', desc: 'Procedimientos indoloros realizados por manos expertas.' },
  { icon: <Layers />, title: 'Prótesis dental', desc: 'Soluciones fijas o removibles para recuperar tu funcionalidad.' },
  { icon: <HeartPulse />, title: 'Periodoncia', desc: 'Cuidado especializado de las encías para mantener una base dental fuerte y saludable.' },
];

const specialtyServices = [
  { icon: <Activity />, title: 'Ortodoncia', desc: 'Alineación perfecta con brackets de última generación.' },
  { icon: <Stethoscope />, title: 'Endodoncia', desc: 'Tratamientos de conducto para salvar tus piezas dentales.' },
];

export default function Services() {
  return (
    <section id="servicios" className="section-padding bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Nuestros Servicios</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-text-main">Cuidado integral para tu familia</h3>
        </div>

        <div className="mb-20">
          <h4 className="text-2xl font-bold text-text-main mb-8 flex items-center justify-center gap-3 text-center">
            <div className="w-8 h-1 bg-primary rounded-full" />
            Tratamientos Generales
            <div className="w-8 h-1 bg-primary rounded-full" />
          </h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {generalServices.map((service, idx) => (
              <ServiceCard key={idx} icon={service.icon} title={service.title} desc={service.desc} />
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-2xl font-bold text-text-main mb-8 flex items-center justify-center gap-3 text-center">
            <div className="w-8 h-1 bg-secondary rounded-full" />
            Especialidades
            <div className="w-8 h-1 bg-secondary rounded-full" />
          </h4>
          <div className="grid md:grid-cols-2 gap-6">
            {specialtyServices.map((service, idx) => (
              <ServiceCard key={idx} icon={service.icon} title={service.title} desc={service.desc} isSpecialty />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  key?: React.Key;
  icon: React.ReactNode;
  title: string;
  desc: string;
  isSpecialty?: boolean;
}

function ServiceCard({ icon, title, desc, isSpecialty = false }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      className={`p-8 rounded-3xl bg-white border border-surface shadow-sm transition-all hover:shadow-xl hover:border-secondary group cursor-default text-center md:text-left`}
    >
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0 transition-colors ${isSpecialty ? 'bg-secondary/20 text-primary' : 'bg-primary/10 text-primary'} group-hover:bg-secondary group-hover:text-primary`}>
        {icon}
      </div>
      <h5 className="text-xl font-bold text-text-main mb-3">{title}</h5>
      <p className="text-text-muted text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}
