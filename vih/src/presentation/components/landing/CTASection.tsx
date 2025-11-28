'use client';

import { motion } from 'framer-motion';

interface CTASectionProps {
  onStartTest: () => void;
}

export const CTASection = ({ onStartTest }: CTASectionProps) => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-3xl shadow-xl p-12 text-white relative overflow-hidden"
        >
          {/* Animated background circles */}
          <motion.div
            className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full opacity-5"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 20, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full opacity-5"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -20, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          
          <motion.div 
            className="flex justify-center mb-6 relative z-10"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            ¿Cuánto sabes sobre el VIH?
          </motion.h2>
          
          <motion.p 
            className="text-xl mb-8 opacity-90 relative z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.9 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Pon a prueba tus conocimientos con nuestro test interactivo y recibe feedback inmediato.
          </motion.p>
          
          <motion.button
            onClick={onStartTest}
            className="px-12 py-5 bg-white text-purple-600 text-xl font-bold rounded-full hover:bg-gray-100 transition-all shadow-xl relative z-10"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.3)" }}
            whileTap={{ scale: 0.95 }}
            animate={{ 
              boxShadow: [
                "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                "0 20px 25px -5px rgb(0 0 0 / 0.2)",
                "0 10px 15px -3px rgb(0 0 0 / 0.1)"
              ]
            }}
            transition={{ 
              boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            Comenzar Test
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
