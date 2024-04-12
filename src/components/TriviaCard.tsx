import { useState, useEffect } from 'react';
import questionsData from '../assets/questions.json';

const TriviaCard = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [shuffledAnswers, setShuffledAnswers] = useState<string[]>([]);

  useEffect(() => {
    setSelectedAnswer(null);
    setShowResult(false);
    // Shuffle the answers
    const answers = [
      questionsData.results[currentQuestionIndex].correct_answer,
      ...questionsData.results[currentQuestionIndex].incorrect_answers,
    ];
    setShuffledAnswers(answers.sort(() => Math.random() - 0.5));
  }, [currentQuestionIndex]);

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer(answer);
    setShowResult(true);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questionsData.results.length);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => (prevIndex - 1 + questionsData.results.length) % questionsData.results.length);
  };

  const currentQuestion = questionsData.results[currentQuestionIndex];

  // Function to replace HTML entities in the question text
  const replaceHtmlEntities = (text: string) => {
    return text.replace(/&quot;/g, '"').replace(/&#039;/g, "'").replace(/&amp;/g, "&");
  };

  return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          width: '80%',
          maxWidth: '600px',
          backgroundColor: '#ffffff',
          padding: '40px',
          borderRadius: '10px',
          boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h2>{replaceHtmlEntities(currentQuestion.question)}</h2>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            gap: '10px',
          }}
        >
          {shuffledAnswers.map((answer, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(answer)}
              disabled={showResult && answer !== currentQuestion.correct_answer}
              style={{
                backgroundColor:
                  showResult && answer === currentQuestion.correct_answer
                    ? 'green'
                    : showResult && answer === selectedAnswer
                    ? 'red'
                    : 'inherit',
                color: showResult ? 'white' : 'gray',
                padding: '10px',
                width: '100%',
              }}
            >
              {replaceHtmlEntities(answer)}
            </button>
          ))}
        </div>
        {showResult && (
          <div>
            {selectedAnswer === currentQuestion.correct_answer
              ? 'Correct!'
              : `Incorrect. The correct answer is: ${replaceHtmlEntities(currentQuestion.correct_answer)}`}
          </div>
        )}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px',
            gap: '10px',
          }}
        >
          <button onClick={handlePreviousQuestion}>Previous Question</button>
          <button onClick={handleNextQuestion}>Next Question</button>
        </div>
      </div>
  );
};

export default TriviaCard;
