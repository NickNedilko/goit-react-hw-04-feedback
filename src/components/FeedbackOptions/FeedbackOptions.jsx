import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, handleClick }) => {
  return options.map(option => {
    return (
      <button
        className={css.button}
        key={option}
        type="button"
        name={option}
        onClick={handleClick}
      >
        {option}
      </button>
    );
  });
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default FeedbackOptions;
