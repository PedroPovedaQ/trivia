import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './Question.scss';
function Question({ question, currentQuestionNum, totalQuestions }) {
  return (
    <div className="question-container">
      <h1>{question.category}</h1>
      <div className="question">
        <p>{question.question}</p>
      </div>
      <div class="progress">
        <span>
          {currentQuestionNum} of {totalQuestions}
        </span>
      </div>
    </div>
  );
}

Question.propTypes = {
  question: PropTypes.object.isRequired,
  currentQuestionNum: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired
};

export default Question;
