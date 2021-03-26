import React from 'react';
import style from './Button.module.css';
import csn from 'classnames';

function Button({ children, className = null, value, onClick }) {
  // * миксуем стили
  const btnStyle = csn({
    [style.button]: true,
    [className]: className && true,
  });

  const btnOnClick = value => {
    // TODO проверяем есть ли значение
    if (value || value === 0) {
      onClick(value);
      return;
    }
    console.log('нет значения');
    return;
  };

  return (
    <button className={btnStyle} onClick={() => btnOnClick(value)}>
      {children}
    </button>
  );
}

export default Button;
