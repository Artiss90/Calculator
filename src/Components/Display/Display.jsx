import React from 'react';
import style from './Display.module.css';

function Display({ value, result = 0, onChangeValue }) {
  return (
    <div className={style.display}>
      <input
        name="value"
        value={value}
        className={style.input}
        onChange={onChangeValue}
        autoComplete="off"
      ></input>
      <input
        name="result"
        value={result}
        className={style.output}
        readOnly
      ></input>
    </div>
  );
}

export default Display;
