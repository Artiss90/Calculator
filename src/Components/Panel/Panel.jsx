import Button from 'Components/Button/Button';
import React from 'react';
import style from './Panel.module.css';

function Panel() {
  return (
    <div className={style.container}>
      <Button value="AC" className={style.AC}></Button>
      <Button value="	&#8592;"></Button>
      <Button value="%"></Button>
      <Button value="/" className={style.operator}></Button>
      <Button value={7}></Button>
      <Button value={8}></Button>
      <Button value={9}></Button>
      <Button value="*" className={style.operator}></Button>
      <Button value={4}></Button>
      <Button value={5}></Button>
      <Button value={6}></Button>
      <Button value="-" className={style.operator}></Button>
      <Button value={1}></Button>
      <Button value={2}></Button>
      <Button value={3}></Button>
      <Button value="+" className={style.operator}></Button>
      <Button value="."></Button>
      <Button value={0}></Button>
      <Button value="=" className={style.equally}></Button>
    </div>
  );
}

export default Panel;
