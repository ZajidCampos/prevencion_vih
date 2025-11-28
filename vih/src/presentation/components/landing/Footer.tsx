'use client';

import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-12 px-4 bg-gray-900 text-white"
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg mb-4"
        >
          💜 La información es poder. Comparte este conocimiento y ayuda a prevenir el VIH.
        </motion.p>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-sm text-gray-400"
        >
          Información basada en fuentes médicas verificadas. Para más información, consulta con profesionales de la salud.
        </motion.p>
      </div>
    </motion.footer>
  );
};
