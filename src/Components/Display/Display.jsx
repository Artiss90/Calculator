import React from 'react';
import style from './Display.module.css';

function Display() {
  const value = 5;
  const result = 0;
  return (
    <div>
      <input
        type="number"
        name="value"
        value={value}
        className={style.input}
      ></input>
      <input
        type="number"
        name="result"
        value={result}
        className={style.input}
      ></input>
    </div>
  );
}

export default Display;
