import React from 'react';
import PropTypes from 'prop-types';
import './Results.scss';
import { Link } from 'react-router-dom';
import { unescape } from '../utils';
function Results({ questions, answers }) {
  return (
    <div className="container">
      {questions.map((question, i) => (
        <p key={question.question}>
          <span>{answers[i].correct ? '+' : '-'}</span>
          {unescape(question.question)}
        </p>
      ))}
      <Link to="/">Play Again?</Link>
    </div>
  );
}

Results.propTypes = {
  questions: PropTypes.array.isRequired,
  answers: PropTypes.array.isRequired,
};

export default Results;
