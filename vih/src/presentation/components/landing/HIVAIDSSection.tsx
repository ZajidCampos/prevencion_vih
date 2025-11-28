'use client';

import { motion } from 'framer-motion';

export const HIVAIDSSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
        >
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center"
          >
            ¿Qué es el VIH / SIDA?
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -4, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
              className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 cursor-pointer relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-purple-200 opacity-0 group-hover:opacity-20"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <motion.div 
                className="text-purple-600 mb-4 relative z-10"
                whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.5 }}
              >
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </motion.div>
              <h3 className="text-2xl font-bold text-purple-900 mb-4 relative z-10">VIH</h3>
              <p className="text-lg text-gray-700 leading-relaxed relative z-10">
                El <strong>VIH</strong> (Virus de Inmunodeficiencia Humana) es un virus que ataca las defensas de tu cuerpo (tu sistema inmune), haciéndote más propenso a enfermarte.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -4, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
              className="bg-gradient-to-br from-red-100 to-pink-100 rounded-2xl p-8 cursor-pointer relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-red-200 opacity-0 group-hover:opacity-20"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
              
              <motion.div 
                className="text-red-600 mb-4 relative z-10"
                whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.5 }}
              >
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </motion.div>
              <h3 className="text-2xl font-bold text-red-900 mb-4 relative z-10">SIDA</h3>
              <p className="text-lg text-gray-700 leading-relaxed relative z-10">
                El <strong>SIDA</strong> (Síndrome de Inmunodeficiencia Adquirida) es la etapa más avanzada y grave de la infección por VIH. Ocurre cuando el VIH ha dañado tanto las defensas que ya no pueden combatir infecciones graves.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
