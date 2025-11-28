// Domain Entity: Question
export interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface QuestionAnswer {
  questionId: number;
  selectedAnswer: number;
  isCorrect: boolean;
}

export interface TestResult {
  totalQuestions: number;
  correctAnswers: number;
  score: number;
  answers: QuestionAnswer[];
}

export interface ScoreMessage {
  title: string;
  message: string;
  color: string;
}
