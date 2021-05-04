import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './Question.scss';
import { unescape } from '../utils';

function Question({ question, currentQuestionNum, totalQuestions, onAnswer }) {
  return (
    <div className="question-container">
      <h1>{question.category}</h1>
      <div className="question">
        <p>{unescape(question.question)}</p>
      </div>
      <div className="button-container">
        <button
          type="button"
          onClick={() => onAnswer({ question, userAnswer: 'True' })}
        >
          True
        </button>
        <button
          type="button"
          onClick={() => onAnswer({ question, userAnswer: 'False' })}
        >
          False
        </button>
      </div>
      <div className="progress">
        <span>
          {currentQuestionNum} of&nbsp;
          {totalQuestions}
        </span>
      </div>
    </div>
  );
}

Question.propTypes = {
  question: PropTypes.object.isRequired,
  currentQuestionNum: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired,
  onAnswer: PropTypes.func
};

export default Question;
