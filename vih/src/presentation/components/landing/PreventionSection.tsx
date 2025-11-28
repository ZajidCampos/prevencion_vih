'use client';

import { motion } from 'framer-motion';

interface PreventionMethod {
  emoji: string;
  title: string;
  desc: string;
  delay: number;
}

interface PreventionCardProps {
  title: string;
  icon: React.ReactNode;
  iconColor: string;
  bgColor: string;
  methods: PreventionMethod[];
  delay?: number;
}

const PreventionCard = ({ title, icon, iconColor, bgColor, methods, delay = 0 }: PreventionCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-3xl shadow-xl p-8 md:p-12 hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="flex items-center gap-3 mb-6">
        <motion.div 
          className={iconColor}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {icon}
        </motion.div>
        <h3 className={`text-3xl font-bold ${iconColor}`}>{title}</h3>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {methods.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: item.delay }}
            whileHover={{ scale: 1.03, x: 4 }}
            className={`${bgColor} rounded-xl p-6 cursor-pointer group relative overflow-hidden`}
          >
            <motion.div
              className={`absolute inset-0 ${bgColor.replace('50', '100')} opacity-0 group-hover:opacity-100`}
              transition={{ duration: 0.3 }}
            />
            <h4 className="font-bold text-lg text-gray-800 mb-2 relative z-10">{item.emoji} {item.title}</h4>
            <p className="text-gray-700 relative z-10">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export const PreventionSection = () => {
  const sexMethods: PreventionMethod[] = [
    { emoji: '🛡️', title: 'Usa SIEMPRE condón', desc: 'Es la mejor protección contra el VIH y otras ITS.', delay: 0.1 },
    { emoji: '🔬', title: 'Conoce tu estado', desc: 'Hazte pruebas de VIH tú y tu pareja.', delay: 0.2 },
    { emoji: '✨', title: 'I=I (Indetectable = Intransmisible)', desc: 'Si alguien con VIH toma su medicina y el virus es indetectable, NO puede transmitirlo sexualmente.', delay: 0.3 },
    { emoji: '💊', title: 'PrEP y PEP', desc: 'Medicinas preventivas antes (PrEP) o después (PEP, antes de 72h) de exposición.', delay: 0.4 }
  ];

  const bloodMethods: PreventionMethod[] = [
    { emoji: '🚫', title: 'NO compartas agujas', desc: 'Nunca uses agujas o jeringas que alguien más haya usado.', delay: 0.1 },
    { emoji: '✅', title: 'Material estéril', desc: 'Asegúrate de que instrumentos para tatuajes y piercings sean nuevos y estériles.', delay: 0.2 },
    { emoji: '🏥', title: 'Bancos de sangre seguros', desc: 'La sangre donada se analiza, las transfusiones son seguras.', delay: 0.3 }
  ];

  const motherBabyMethods: PreventionMethod[] = [
    { emoji: '🔬', title: 'Prueba en el embarazo', desc: 'Todas las embarazadas deben hacerse la prueba de VIH.', delay: 0.1 },
    { emoji: '💊', title: 'El tratamiento salva al bebé', desc: 'Con tratamiento durante embarazo y parto, el bebé casi seguro nacerá sin el virus.', delay: 0.2 },
    { emoji: '🍼', title: 'Considerar lactancia', desc: 'A veces se recomienda no amamantar si la madre tiene VIH.', delay: 0.3 }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 text-center"
        >
          Métodos de Prevención
        </motion.h2>

        <div className="space-y-8">
          <PreventionCard
            title="Durante el Sexo"
            iconColor="text-purple-600"
            bgColor="bg-purple-50"
            methods={sexMethods}
            icon={
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            }
          />

          <PreventionCard
            title="Con la Sangre"
            iconColor="text-red-600"
            bgColor="bg-red-50"
            methods={bloodMethods}
            delay={0.1}
            icon={
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            }
          />

          <PreventionCard
            title="De Madre a Bebé"
            iconColor="text-pink-600"
            bgColor="bg-pink-50"
            methods={motherBabyMethods}
            delay={0.2}
            icon={
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
};
