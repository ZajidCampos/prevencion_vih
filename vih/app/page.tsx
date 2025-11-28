'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { QuestionRepository } from '../src/data/repositories/QuestionRepositoryImpl';
import { useTestController } from '../src/presentation/hooks/useTestController';
import { TestQuestion } from '../src/presentation/components/TestQuestion';
import { TestResults } from '../src/presentation/components/TestResults';

export default function Home() {
  const [showTest, setShowTest] = useState(false);
  
  // Initialize repository
  const questionRepository = new QuestionRepository();
  const questions = questionRepository.getAllQuestions();
  
  // Use custom hook for test logic
  const testController = useTestController(questions);

  if (showTest) {
    if (testController.showResults && testController.testResult && testController.scoreMessage) {
      return (
        <TestResults
          questions={questions}
          testResult={testController.testResult}
          scoreMessage={testController.scoreMessage}
          onReset={() => {
            testController.resetTest();
            setShowTest(false);
          }}
          onRetry={testController.resetTest}
        />
      );
    }

    return (
      <TestQuestion
        question={questions[testController.currentQuestion]}
        selectedAnswer={testController.answers[testController.currentQuestion]}
        onAnswer={testController.handleAnswer}
        currentIndex={testController.currentQuestion}
        totalQuestions={questions.length}
        onPrevious={testController.goToPreviousQuestion}
        onNext={testController.goToNextQuestion}
        onFinish={testController.finishTest}
        onExit={() => {
          testController.resetTest();
          setShowTest(false);
        }}
        canGoNext={testController.canGoNext}
        canFinish={testController.canFinish}
      />
    );
  }

  // Landing Page
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h1 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent mb-6"
            >
              Prevención del VIH
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto"
            >
              Conocimiento que salva vidas. Aprende, previene y comparte información correcta.
            </motion.p>
          </motion.div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { emoji: '🛡️', title: 'Prevención', desc: 'Conoce las formas efectivas de protegerte', delay: 0.1 },
              { emoji: '📚', title: 'Información', desc: 'Datos verificados y científicamente correctos', delay: 0.2 },
              { emoji: '🧪', title: 'Test', desc: 'Pon a prueba tus conocimientos', delay: 0.3 }
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: card.delay }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all cursor-pointer"
              >
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="text-5xl mb-4"
                >
                  {card.emoji}
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{card.title}</h3>
                <p className="text-gray-600">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What is HIV/AIDS Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
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
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 cursor-pointer"
              >
                <motion.div 
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="text-5xl mb-4"
                >
                  🦠
                </motion.div>
                <h3 className="text-2xl font-bold text-purple-900 mb-4">VIH</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  El <strong>VIH</strong> (Virus de Inmunodeficiencia Humana) es un virus que ataca las defensas de tu cuerpo (tu sistema inmune), haciéndote más propenso a enfermarte.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-red-100 to-pink-100 rounded-2xl p-8 cursor-pointer"
              >
                <motion.div 
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="text-5xl mb-4"
                >
                  ⚠️
                </motion.div>
                <h3 className="text-2xl font-bold text-red-900 mb-4">SIDA</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  El <strong>SIDA</strong> (Síndrome de Inmunodeficiencia Adquirida) es la etapa más avanzada y grave de la infección por VIH. Ocurre cuando el VIH ha dañado tanto las defensas que ya no pueden combatir infecciones graves.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Transmission Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 text-center"
          >
            Formas de Transmisión
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* SI transmite */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">⚠️</span>
                <h3 className="text-3xl font-bold text-red-600">Vías de Transmisión</h3>
              </div>

              <div className="space-y-4">
                <motion.div 
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="bg-red-50 rounded-xl p-6 border-l-4 border-red-500 cursor-pointer"
                >
                  <h4 className="font-bold text-gray-800 mb-2 text-lg">🔴 Vía Sexual</h4>
                  <p className="text-gray-700">Relaciones sexuales (anal, vaginal u oral) sin protección con una persona que tiene VIH.</p>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="bg-red-50 rounded-xl p-6 border-l-4 border-red-500 cursor-pointer"
                >
                  <h4 className="font-bold text-gray-800 mb-2 text-lg">💉 Vía Sanguínea</h4>
                  <p className="text-gray-700">Compartir agujas, jeringas o contacto directo con sangre infectada.</p>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="bg-red-50 rounded-xl p-6 border-l-4 border-red-500 cursor-pointer"
                >
                  <h4 className="font-bold text-gray-800 mb-2 text-lg">👶 Vía Vertical</h4>
                  <p className="text-gray-700">De madre a bebé durante embarazo, parto o lactancia.</p>
                </motion.div>
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-6 bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-6 border-2 border-red-200"
              >
                <h4 className="font-bold text-gray-800 mb-4 text-lg flex items-center gap-2">
                  <span className="text-2xl">⚠️</span>
                  Fluidos que transmiten el VIH:
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { emoji: '🩸', text: 'Sangre' },
                    { emoji: '💧', text: 'Semen' },
                    { emoji: '💧', text: 'Fluido vaginal' },
                    { emoji: '💧', text: 'Líquido preseminal' },
                    { emoji: '💧', text: 'Secreción rectal' },
                    { emoji: '🍼', text: 'Leche materna' }
                  ].map((fluid, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-all"
                    >
                      <span className="text-2xl">{fluid.emoji}</span>
                      <span className="font-semibold text-gray-800 text-sm">{fluid.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* NO transmite */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">✅</span>
                <h3 className="text-3xl font-bold text-green-600">NO Transmite</h3>
              </div>

              <div className="space-y-3">
                {[
                  { emoji: '😊', text: 'Besos, abrazos, caricias' },
                  { emoji: '🤝', text: 'Dar la mano' },
                  { emoji: '🦟', text: 'Picaduras de mosquitos o insectos' },
                  { emoji: '🚽', text: 'Compartir baño' },
                  { emoji: '🍽️', text: 'Compartir vasos, cubiertos, ropa' },
                  { emoji: '💦', text: 'Saliva, lágrimas, sudor' },
                  { emoji: '🚾', text: 'Orina, heces' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.03, x: 5 }}
                    className="bg-green-50 rounded-xl p-4 border-l-4 border-green-500 cursor-pointer flex items-center gap-3 group"
                  >
                    <span className="text-2xl group-hover:scale-125 transition-transform">{item.emoji}</span>
                    <p className="text-gray-700 font-medium">{item.text}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.0 }}
                className="mt-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">💚</span>
                  <p className="font-bold text-green-800 text-lg">¡Recuerda!</p>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  El VIH <strong>NO</strong> se transmite por contacto casual cotidiano. Puedes convivir, compartir espacios y mostrar afecto sin ningún riesgo.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Prevention Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 text-center">
            Métodos de Prevención
          </h2>

          <div className="space-y-8">
            {/* Durante el Sexo */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-5xl">💑</span>
                <h3 className="text-3xl font-bold text-purple-600">Durante el Sexo</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-purple-50 rounded-xl p-6">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">🛡️ Usa SIEMPRE condón</h4>
                  <p className="text-gray-700">Es la mejor protección contra el VIH y otras ITS.</p>
                </div>
                <div className="bg-purple-50 rounded-xl p-6">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">🔬 Conoce tu estado</h4>
                  <p className="text-gray-700">Hazte pruebas de VIH tú y tu pareja.</p>
                </div>
                <div className="bg-purple-50 rounded-xl p-6">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">✨ I=I (Indetectable = Intransmisible)</h4>
                  <p className="text-gray-700">Si alguien con VIH toma su medicina y el virus es indetectable, NO puede transmitirlo sexualmente.</p>
                </div>
                <div className="bg-purple-50 rounded-xl p-6">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">💊 PrEP y PEP</h4>
                  <p className="text-gray-700">Medicinas preventivas antes (PrEP) o después (PEP, antes de 72h) de exposición.</p>
                </div>
              </div>
            </div>

            {/* Con la Sangre */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-5xl">💉</span>
                <h3 className="text-3xl font-bold text-red-600">Con la Sangre</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 rounded-xl p-6">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">🚫 NO compartas agujas</h4>
                  <p className="text-gray-700">Nunca uses agujas o jeringas que alguien más haya usado.</p>
                </div>
                <div className="bg-red-50 rounded-xl p-6">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">✅ Material estéril</h4>
                  <p className="text-gray-700">Asegúrate de que instrumentos para tatuajes y piercings sean nuevos y estériles.</p>
                </div>
                <div className="bg-red-50 rounded-xl p-6">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">🏥 Bancos de sangre seguros</h4>
                  <p className="text-gray-700">La sangre donada se analiza, las transfusiones son seguras.</p>
                </div>
              </div>
            </div>

            {/* De Madre a Bebé */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-5xl">👶</span>
                <h3 className="text-3xl font-bold text-pink-600">De Madre a Bebé</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-pink-50 rounded-xl p-6">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">🔬 Prueba en el embarazo</h4>
                  <p className="text-gray-700">Todas las embarazadas deben hacerse la prueba de VIH.</p>
                </div>
                <div className="bg-pink-50 rounded-xl p-6">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">💊 El tratamiento salva al bebé</h4>
                  <p className="text-gray-700">Con tratamiento durante embarazo y parto, el bebé casi seguro nacerá sin el virus.</p>
                </div>
                <div className="bg-pink-50 rounded-xl p-6">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">🍼 Considerar lactancia</h4>
                  <p className="text-gray-700">A veces se recomienda no amamantar si la madre tiene VIH.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Test Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-3xl shadow-2xl p-12 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Cuánto sabes sobre el VIH?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Pon a prueba tus conocimientos con nuestro test interactivo y recibe feedback inmediato.
            </p>
            <button
              onClick={() => setShowTest(true)}
              className="px-12 py-5 bg-white text-purple-600 text-xl font-bold rounded-full hover:bg-gray-100 transition-all transform hover:scale-110 shadow-xl"
            >
              🧪 Comenzar Test
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg mb-4">
            💜 La información es poder. Comparte este conocimiento y ayuda a prevenir el VIH.
          </p>
          <p className="text-sm text-gray-400">
            Información basada en fuentes médicas verificadas. Para más información, consulta con profesionales de la salud.
          </p>
        </div>
      </footer>
    </div>
  );
}
