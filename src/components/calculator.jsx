import React, { useState } from 'react';
import OutputScreen from './OutputScreen,';
import NumericKeys from './NumericKeys';
import OperationKeys from './OperationKeys';
import calculate from '../logic/calculate';

function Calculator() {
  const [current, setCurrent] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const clickEvent = (event) => {
    const clicked = event.target.textContent;
    const value = calculate(current, clicked);
    setCurrent(value);
  };
  return (
    <>
      <div className="section">
        <h2>Lets Do some Math</h2>
        <div className="calculator">
          <OutputScreen state={current} />
          <div className="keys">
            <OperationKeys clickEvent={clickEvent} />
            <NumericKeys clickEvent={clickEvent} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Calculator;
