// Custom Hook: useTestController
import { useState } from 'react';
import { Question } from '../../domain/entities/Question';
import { CalculateTestScore } from '../../domain/usecases/CalculateTestScore';

export const useTestController = (questions: Question[]) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const calculateScore = new CalculateTestScore();

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
  };

  const goToNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const finishTest = () => {
    setShowResults(true);
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  const isQuestionAnswered = answers[currentQuestion] !== undefined;
  const canGoNext = isQuestionAnswered && currentQuestion < questions.length - 1;
  const canFinish = answers.length === questions.length && answers.every(a => a !== undefined);

  const testResult = showResults ? calculateScore.execute(questions, answers) : null;
  const scoreMessage = testResult ? calculateScore.getScoreMessage(testResult.score) : null;

  return {
    currentQuestion,
    answers,
    showResults,
    isQuestionAnswered,
    canGoNext,
    canFinish,
    testResult,
    scoreMessage,
    handleAnswer,
    goToNextQuestion,
    goToPreviousQuestion,
    finishTest,
    resetTest
  };
};
