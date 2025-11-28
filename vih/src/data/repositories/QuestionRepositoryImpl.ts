// Data Source: Questions
import { Question } from '../../domain/entities/Question';
import { IQuestionRepository } from '../../domain/repositories/IQuestionRepository';

export class QuestionRepository implements IQuestionRepository {
  private questions: Question[] = [
    {
      id: 1,
      question: "¿Cuál es la principal vía de transmisión del VIH a nivel mundial?",
      options: [
        "Vía Sanguínea (Compartir agujas)",
        "Contacto Casual (Abrazos y besos)",
        "Vía Vertical (Madre a hijo/a)",
        "Vía Sexual (Relaciones sin protección)"
      ],
      correct: 3,
      explanation: "La vía sexual es la principal forma de transmisión del VIH a nivel mundial. Las relaciones sexuales sin protección representan la mayoría de los nuevos casos de infección."
    },
    {
      id: 2,
      question: "¿Cuál es la diferencia principal entre el VIH y el SIDA?",
      options: [
        "El VIH solo se contagia por sangre y el SIDA solo por vía sexual",
        "El VIH es la etapa inicial y el SIDA es la etapa final con daño grave al sistema inmune",
        "Son términos sinónimos que se usan indistintamente para la misma condición",
        "El SIDA es el virus y el VIH es el síndrome que causa"
      ],
      correct: 1,
      explanation: "El VIH es el virus que causa la infección inicial. El SIDA es la etapa más avanzada de la infección, cuando el sistema inmune está gravemente dañado."
    },
    {
      id: 3,
      question: "¿Cuál fluido corporal NO transmite el VIH?",
      options: [
        "Saliva",
        "Sangre",
        "Leche materna",
        "Líquido preseminal"
      ],
      correct: 0,
      explanation: "La saliva NO transmite el VIH. Los fluidos que SÍ transmiten el virus son: sangre, semen, líquido preseminal, fluido vaginal, secreción rectal y leche materna."
    },
    {
      id: 4,
      question: "¿Qué significa la campaña de prevención 'Indetectable = Intransmisible' (I=I) por vía sexual?",
      options: [
        "Que la carga viral es tan baja que el VIH no se transmite por vía sexual",
        "Que la persona ya ha desarrollado SIDA y no puede contagiar",
        "Que el virus está presente pero la persona no tiene síntomas",
        "Que el VIH se detecta, pero solo se transmite por la vía sanguínea"
      ],
      correct: 0,
      explanation: "I=I significa que cuando una persona con VIH tiene carga viral indetectable gracias al tratamiento, NO puede transmitir el virus por vía sexual."
    },
    {
      id: 5,
      question: "¿En qué momento puede ocurrir la transmisión del VIH por vía vertical (de madre a hijo/a)?",
      options: [
        "Durante el embarazo, el parto o la lactancia",
        "Solo si la madre no tiene síntomas de SIDA",
        "Solo durante el parto",
        "Solo durante la lactancia"
      ],
      correct: 0,
      explanation: "La transmisión vertical puede ocurrir en tres momentos: durante el embarazo, el parto y la lactancia. Con tratamiento adecuado, el riesgo se reduce casi a cero."
    },
    {
      id: 6,
      question: "¿Qué es la Profilaxis Pre-Exposición (PrEP)?",
      options: [
        "Un medicamento preventivo diario para personas sin VIH con riesgo de adquirirlo",
        "Una vacuna preventiva contra el VIH",
        "Un tratamiento que se toma después de un contacto de riesgo",
        "Un medicamento que toman personas con VIH para no transmitirlo"
      ],
      correct: 0,
      explanation: "La PrEP es un medicamento que toman personas VIH negativas con alto riesgo de exposición, para prevenir la infección de forma muy efectiva."
    },
    {
      id: 7,
      question: "¿Cuál es el principal tipo de célula que el Virus de la Inmunodeficiencia Humana (VIH) ataca en el cuerpo?",
      options: [
        "Plaquetas",
        "Linfocitos T CD4 (Células T)",
        "Glóbulos rojos (Eritrocitos)",
        "Neuronas"
      ],
      correct: 1,
      explanation: "El VIH ataca específicamente los linfocitos T CD4, células cruciales del sistema inmune que coordinan la respuesta contra infecciones."
    },
    {
      id: 8,
      question: "¿Cómo se llama el tratamiento de emergencia que se debe iniciar dentro de las 72 horas después de una posible exposición al VIH?",
      options: [
        "PrEP (Profilaxis Pre-Exposición)",
        "TasP (Tratamiento como Prevención)",
        "TAR (Terapia Antirretroviral)",
        "PEP (Profilaxis Post-Exposición)"
      ],
      correct: 3,
      explanation: "La PEP es un tratamiento de emergencia que debe iniciarse dentro de las 72 horas (idealmente antes de 24h) después de una exposición potencial al VIH."
    },
    {
      id: 9,
      question: "¿Cuál de los siguientes contactos cotidianos NO transmite el VIH?",
      options: [
        "Transfusión de sangre no analizada",
        "Sexo vaginal sin condón",
        "Uso de una aguja contaminada",
        "Compartir utensilios de comida"
      ],
      correct: 3,
      explanation: "Compartir utensilios de comida NO transmite el VIH. El virus no se transmite por contacto casual ni por compartir objetos cotidianos."
    },
    {
      id: 10,
      question: "¿Cuál es el principal mecanismo por el cual el VIH provoca el deterioro del sistema inmunitario?",
      options: [
        "Ataca directamente a los anticuerpos, impidiendo su formación",
        "Induce la producción excesiva de glóbulos rojos, lo que dificulta la función inmune",
        "Causa un aumento en la actividad de las células B, lo que las agota y las vuelve ineficaces",
        "Destruye selectivamente los linfocitos T CD4, que son cruciales para la coordinación de la respuesta inmune"
      ],
      correct: 3,
      explanation: "El VIH destruye los linfocitos T CD4, células esenciales que coordinan todo el sistema inmune. Sin ellas, el cuerpo no puede defenderse efectivamente."
    },
    {
      id: 11,
      question: "Una persona con VIH que está bajo tratamiento antirretroviral (TAR) y tiene una carga viral indetectable de forma sostenida, ¿cuál es su riesgo de transmitir el VIH por vía sexual?",
      options: [
        "Riesgo moderado, especialmente si no usa condón",
        "Riesgo nulo (Indetectable = Intransmisible, I=I)",
        "Riesgo igual al de una persona sin tratamiento, si no usa condón",
        "Riesgo bajo, pero aún posible en condiciones específicas"
      ],
      correct: 1,
      explanation: "¡Correcto! Con carga viral indetectable sostenida, el riesgo de transmisión sexual es nulo. Este es el principio I=I (Indetectable = Intransmisible)."
    },
    {
      id: 12,
      question: "¿Cuál es la principal ventaja de la Profilaxis Pre-Exposición (PrEP) en la prevención del VIH?",
      options: [
        "Cura la infección por VIH en sus etapas iniciales",
        "Es una vacuna que ofrece inmunidad permanente contra el VIH",
        "Elimina la necesidad de usar condones durante las relaciones sexuales",
        "Permite que personas VIH negativas con alto riesgo puedan prevenir la infección de forma muy efectiva"
      ],
      correct: 3,
      explanation: "La PrEP es altamente efectiva para prevenir la infección en personas con alto riesgo de exposición, reduciendo el riesgo en más del 99% cuando se toma correctamente."
    },
    {
      id: 13,
      question: "En el contexto de la transmisión del VIH, ¿qué significa un 'contacto directo con el torrente sanguíneo'?",
      options: [
        "Comer alimentos preparados por una persona con VIH",
        "Respirar el mismo aire que una persona con VIH en un espacio cerrado",
        "El ingreso de fluidos corporales con VIH (como sangre o semen) directamente en la circulación sanguínea o a través de mucosas",
        "Cualquier contacto físico con una persona infectada"
      ],
      correct: 2,
      explanation: "El contacto directo significa que fluidos infectados entran al torrente sanguíneo o atraviesan mucosas (como las genitales, rectales u orales)."
    },
    {
      id: 14,
      question: "¿Cuál es el propósito principal de la Profilaxis Post-Exposición (PEP)?",
      options: [
        "Mejorar el sistema inmunitario de personas con SIDA",
        "Prevenir la transmisión del VIH de madre a hijo durante el embarazo",
        "Tratar una infección por VIH ya establecida en el cuerpo",
        "Reducir el riesgo de adquirir el VIH después de una exposición potencial al virus"
      ],
      correct: 3,
      explanation: "La PEP es un tratamiento de emergencia para reducir el riesgo de infección después de una exposición potencial al VIH, debe iniciarse dentro de 72 horas."
    },
    {
      id: 15,
      question: "¿Por qué es crucial que las mujeres embarazadas se hagan la prueba del VIH?",
      options: [
        "Para determinar si el bebé ya nació con SIDA",
        "Porque el embarazo aumenta el riesgo de que la mujer adquiera el VIH",
        "Para evaluar si la mujer puede amamantar a su bebé sin riesgo, sin importar el resultado",
        "Para poder iniciar el tratamiento antirretroviral y prevenir la transmisión al bebé"
      ],
      correct: 3,
      explanation: "La prueba permite detectar el VIH e iniciar tratamiento inmediato, lo cual reduce el riesgo de transmisión al bebé a menos del 1%."
    }
  ];

  getAllQuestions(): Question[] {
    return this.questions;
  }
}
