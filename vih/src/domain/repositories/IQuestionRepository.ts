// Repository Interface
import { Question } from '../../domain/entities/Question';

export interface IQuestionRepository {
  getAllQuestions(): Question[];
}
