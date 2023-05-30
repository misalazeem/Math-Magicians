import { React } from 'react';
import OutputScreen from './OutputScreen,';
import NumericKeys from './NumericKeys';
import OperationKeys from './OperationKeys';

function Calculator() {
  return (
    <>
      <div className="calculator">
        <OutputScreen />
        <div className="keys">
          <OperationKeys />
          <NumericKeys />
        </div>
      </div>
    </>
  );
}

export default Calculator;
