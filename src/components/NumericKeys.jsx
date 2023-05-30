import React from 'react';

function NumericKeys() {
  return (
    <>
      <div className="number-buttons">
        <button type="button" className="button numbers">7</button>
        <button type="button" className="button numbers">8 </button>
        <button type="button" className="button numbers">9</button>
        <button type="button" className="button numbers">4</button>
        <button type="button" className="button numbers">5</button>
        <button type="button" className="button numbers">6</button>
        <button type="button" className="button numbers">1</button>
        <button type="button" className="button numbers">2</button>
        <button type="button" className="button numbers">3</button>
        <button type="button" className="button numbers span2">0</button>
        <button type="button" className="button numbers">.</button>
      </div>
    </>
  );
}

export default NumericKeys;
