import React from 'react';
import PropTypes from 'prop-types';

function OperationKeys({ clickEvent }) {
  return (
    <>
      <button onClick={clickEvent} type="button" className="button top-button">AC</button>
      <button onClick={clickEvent} type="button" className="button top-button">+/-</button>
      <button onClick={clickEvent} type="button" className="button top-button">%</button>
      <button onClick={clickEvent} type="button" className="button button-side">÷</button>
      <button onClick={clickEvent} type="button" className="button button-side">x</button>
      <button onClick={clickEvent} type="button" className="button button-side">-</button>
      <button onClick={clickEvent} type="button" className="button button-side">+</button>
      <button onClick={clickEvent} type="button" className="button button-side">=</button>
    </>
  );
}

OperationKeys.propTypes = {
  clickEvent: PropTypes.func.isRequired,
};

export default OperationKeys;
