// Use Case: Calculate Test Score
import { Question, QuestionAnswer, TestResult, ScoreMessage } from '../entities/Question';

export class CalculateTestScore {
  execute(questions: Question[], answers: number[]): TestResult {
    const questionAnswers: QuestionAnswer[] = questions.map((q, index) => ({
      questionId: q.id,
      selectedAnswer: answers[index],
      isCorrect: answers[index] === q.correct
    }));

    const correctAnswers = questionAnswers.filter(qa => qa.isCorrect).length;
    const score = (correctAnswers / questions.length) * 100;

    return {
      totalQuestions: questions.length,
      correctAnswers,
      score,
      answers: questionAnswers
    };
  }

  getScoreMessage(score: number): ScoreMessage {
    if (score === 100) {
      return {
        title: "¡Excelente! 🎉",
        message: "Tienes un conocimiento excepcional sobre la prevención del VIH. ¡Sigue compartiendo esta información!",
        color: "from-green-400 to-emerald-600"
      };
    } else if (score >= 75) {
      return {
        title: "¡Muy Bien! 👏",
        message: "Tienes un buen conocimiento sobre el VIH. Sigue aprendiendo y compartiendo información correcta.",
        color: "from-blue-400 to-cyan-600"
      };
    } else if (score >= 50) {
      return {
        title: "¡Buen Intento! 💪",
        message: "Vas por buen camino, pero es importante seguir aprendiendo sobre prevención del VIH.",
        color: "from-yellow-400 to-orange-600"
      };
    } else {
      return {
        title: "Sigue Aprendiendo 📚",
        message: "La prevención del VIH requiere información correcta. Te invitamos a revisar el contenido nuevamente.",
        color: "from-red-400 to-pink-600"
      };
    }
  }
}
