'use client';

import { useState } from 'react';
import { QuestionRepository } from '../src/data/repositories/QuestionRepositoryImpl';
import { useTestController } from '../src/presentation/hooks/useTestController';
import { TestQuestion } from '../src/presentation/components/TestQuestion';
import { TestResults } from '../src/presentation/components/TestResults';
import { 
  HeroSection, 
  HIVAIDSSection, 
  TransmissionSection, 
  PreventionSection, 
  CTASection, 
  Footer 
} from '../src/presentation/components/landing';

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
      <HeroSection onStartTest={() => setShowTest(true)} />
      <HIVAIDSSection />
      <TransmissionSection />
      <PreventionSection />
      <CTASection onStartTest={() => setShowTest(true)} />
      <Footer />
    </div>
  );
}
