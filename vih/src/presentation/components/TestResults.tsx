// Test Results Component
'use client';

import { motion } from 'framer-motion';
import { Question } from '../../domain/entities/Question';
import { TestResult, ScoreMessage } from '../../domain/entities/Question';

interface TestResultsProps {
  questions: Question[];
  testResult: TestResult;
  scoreMessage: ScoreMessage;
  onReset: () => void;
  onRetry: () => void;
}

export const TestResults: React.FC<TestResultsProps> = ({
  questions,
  testResult,
  scoreMessage,
  onReset,
  onRetry
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          {/* Score Header */}
          <div className={`bg-gradient-to-r ${scoreMessage.color} text-white rounded-2xl p-8 mb-8 text-center`}>
            <h2 className="text-4xl font-bold mb-4">{scoreMessage.title}</h2>
            <div className="text-6xl font-bold mb-4">
              {testResult.correctAnswers}/{testResult.totalQuestions}
            </div>
            <p className="text-xl">{scoreMessage.message}</p>
          </div>

          {/* Answers Summary */}
          <div className="space-y-4 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Resumen de tus respuestas:</h3>
            {questions.map((q, index) => {
              const userAnswer = testResult.answers[index].selectedAnswer;
              const isCorrect = testResult.answers[index].isCorrect;
              
              return (
                <motion.div
                  key={q.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`p-6 rounded-xl border-2 ${
                    isCorrect
                      ? 'bg-green-50 border-green-300'
                      : 'bg-red-50 border-red-300'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className={`text-2xl shrink-0 ${isCorrect ? '' : 'mt-1'}`}>
                      {isCorrect ? '✅' : '❌'}
                    </span>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800 mb-2">{q.question}</p>
                      <div className="mt-3 space-y-2">
                        <p className="text-sm font-medium text-gray-700">
                          Tu respuesta: <span className={isCorrect ? 'text-green-600' : 'text-red-600'}>
                            {String.fromCharCode(65 + userAnswer)} - {q.options[userAnswer]}
                          </span>
                        </p>
                        {!isCorrect && (
                          <p className="text-sm font-medium text-gray-700">
                            Respuesta correcta: <span className="text-green-600">
                              {String.fromCharCode(65 + q.correct)} - {q.options[q.correct]}
                            </span>
                          </p>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mt-3 italic">{q.explanation}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onReset}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Volver al Inicio
            </button>
            <button
              onClick={onRetry}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Repetir Test
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
