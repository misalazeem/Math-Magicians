import React from 'react';
import PropTypes from 'prop-types';

const NumericKeys = ({ clickEvent }) => (
  <>
    <div className="number-buttons">
      <button onClick={clickEvent} type="button" className="button numbers">7</button>
      <button onClick={clickEvent} type="button" className="button numbers">8</button>
      <button onClick={clickEvent} type="button" className="button numbers">9</button>
      <button onClick={clickEvent} type="button" className="button numbers">4</button>
      <button onClick={clickEvent} type="button" className="button numbers">5</button>
      <button onClick={clickEvent} type="button" className="button numbers">6</button>
      <button onClick={clickEvent} type="button" className="button numbers">1</button>
      <button onClick={clickEvent} type="button" className="button numbers">2</button>
      <button onClick={clickEvent} type="button" className="button numbers">3</button>
      <button onClick={clickEvent} type="button" className="button numbers span2">0</button>
      <button onClick={clickEvent} type="button" className="button numbers">.</button>
    </div>
  </>
);

NumericKeys.propTypes = {
  clickEvent: PropTypes.func.isRequired,
};

export default NumericKeys;
