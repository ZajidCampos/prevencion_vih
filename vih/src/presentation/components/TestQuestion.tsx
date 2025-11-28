// Test Component
'use client';

import { motion } from 'framer-motion';
import { Question } from '../../domain/entities/Question';

interface TestQuestionProps {
  question: Question;
  selectedAnswer: number | undefined;
  onAnswer: (answerIndex: number) => void;
  currentIndex: number;
  totalQuestions: number;
  onPrevious: () => void;
  onNext: () => void;
  onFinish: () => void;
  onExit: () => void;
  canGoNext: boolean;
  canFinish: boolean;
}

export const TestQuestion: React.FC<TestQuestionProps> = ({
  question,
  selectedAnswer,
  onAnswer,
  currentIndex,
  totalQuestions,
  onPrevious,
  onNext,
  onFinish,
  onExit,
  canGoNext,
  canFinish
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Exit Button */}
        <div className="mb-6 flex justify-end">
          <button
            onClick={onExit}
            className="flex items-center gap-2 px-6 py-3 bg-white text-gray-700 font-semibold rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all transform hover:scale-105 border-2 border-gray-200"
          >
            <span className="text-xl">←</span>
            <span>Salir del Test</span>
          </button>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-semibold text-purple-600">
                Pregunta {currentIndex + 1} de {totalQuestions}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-purple-600 to-pink-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
              />
            </div>
          </div>

          {/* Question */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
            {question.question}
          </h2>

          {/* Options */}
          <div className="space-y-4 mb-8">
            {question.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              
              return (
                <motion.button
                  key={index}
                  onClick={() => onAnswer(index)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full p-6 text-left rounded-xl transition-all ${
                    isSelected
                      ? 'bg-purple-100 border-2 border-purple-500 shadow-lg'
                      : 'bg-white border-2 border-gray-200 hover:border-purple-300 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`shrink-0 w-10 h-10 rounded-full font-bold flex items-center justify-center text-lg transition-colors ${
                      isSelected
                        ? 'bg-purple-500 text-white'
                        : 'bg-gray-200 text-gray-600 group-hover:bg-purple-200'
                    }`}>
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className={`text-lg font-medium ${
                      isSelected ? 'text-gray-900' : 'text-gray-700'
                    }`}>
                      {option}
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Message */}
          {selectedAnswer !== undefined && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-6 bg-blue-50 border-2 border-blue-300 rounded-xl"
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">✓</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    Respuesta Registrada
                  </h3>
                  <p className="text-gray-700">
                    Tu respuesta ha sido guardada. Puedes cambiarla seleccionando otra opción o continuar con el test.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-4">
            <button
              onClick={onPrevious}
              disabled={currentIndex === 0}
              className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all ${
                currentIndex === 0
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-600 text-white hover:bg-gray-700 transform hover:scale-105 shadow-md'
              }`}
            >
              ← Anterior
            </button>
            
            {currentIndex < totalQuestions - 1 ? (
              <button
                onClick={onNext}
                disabled={!canGoNext}
                className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all ${
                  canGoNext
                    ? 'bg-purple-600 text-white hover:bg-purple-700 transform hover:scale-105 shadow-md'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                Siguiente →
              </button>
            ) : (
              <button
                onClick={onFinish}
                disabled={!canFinish}
                className={`flex-1 px-6 py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${
                  canFinish
                    ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 shadow-lg'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                <span>Ver Resultados</span>
                <span className="text-xl">🎯</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
