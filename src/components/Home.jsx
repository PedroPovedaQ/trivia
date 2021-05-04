import React from 'react';
import PropTypes from 'prop-types';
import './Home.scss';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to the Trivia Challenge!</h1>
      <div>
        <h3>You will be presented with 10 true or false questions.</h3>
        <h3>Can you score 100%?</h3>
      </div>
      <Link to="/trivia">Begin</Link>
    </div>
  );
}

export default Home;
