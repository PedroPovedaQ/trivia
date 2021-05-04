import React, { useEffect, useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import Question from './Question';
import Results from './Results';

const questionAmount = 10;
function Trivia() {
  const [error, setError] = useState(false);
  const [count, setCount] = useState(1);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  useEffect(() => {
    async function fetchQuestions() {
      try {
        const result = await fetch(
          `https://opentdb.com/api.php?amount=${questionAmount}&difficulty=hard&type=boolean`
        ).then((response) => response.json());
        setQuestions(result.results);
      } catch (error) {
        setError(true);
      }
    }
    fetchQuestions();
  }, []);

  const handleAnswerClick = (question, userAnswer) => {
    setAnswers((prevArray) => [
      ...prevArray,
      { correct: question.correct_answer === userAnswer }
    ]);
    setCount((prevCount) => prevCount + 1);
  };

  if (error) {
    return <div>Error! Unable to load trivia questions at this time.</div>;
  }
  if (!questions.length) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {count <= questionAmount ? (
        <Question
          question={questions[count - 1]}
          currentQuestionNum={count}
          totalQuestions={questionAmount}
          onAnswer={({ question, userAnswer }) =>
            handleAnswerClick(question, userAnswer)
          }
        />
      ) : (
        <Results questions={questions} answers={answers} />
      )}
    </>
  );
}

Trivia.propTypes = {};

export default Trivia;
