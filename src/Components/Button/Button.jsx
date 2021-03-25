import React from 'react';
import style from './Button.module.css';
import csn from 'classnames';

function Button({ value, className = null }) {
  // console.log(`style.${className}`);
  const btnStyle = csn({
    [style.button]: true,
    [className]: className && true,
  });
  console.log(btnStyle);
  return (
    <button
      className={btnStyle}
      onClick={() => {
        return;
      }}
    >
      {value}
    </button>
  );
}

export default Button;
