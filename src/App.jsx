import { useEffect, useState } from 'react';
import style from 'App.module.css';
import Display from 'Components/Display/Display';
import Panel from 'Components/Panel/Panel';

function App() {
  const [value, setValue] = useState(0);
  const [result, setResult] = useState(0);

  useEffect(() => {
    const calc = function (string) {
      if (string.includes('+')) {
        const arrNum = string.split('+');
        return arrNum.reduce((arr, item) => Number(arr) + Number(item), 0);
      }
      if (string.includes('-')) {
        const arrNum = string.split('-');
        return arrNum.reduce((arr, item) => Number(arr) - Number(item));
      }
      if (string.includes('*')) {
        const arrNum = string.split('*');
        return arrNum.reduce((arr, item) => Number(arr) * Number(item));
      }
      if (string.includes('/')) {
        const arrNum = string.split('/');
        return arrNum.reduce((arr, item) => Number(arr) / Number(item));
      }
    };

    setResult(calc(value.toString()));
    return;
  }, [value]);

  const onClick = valueBtn => {
    // ? присылаемое значение является числом
    if (typeof valueBtn === 'number') {
      // *если значение 0 перезапишем, а не добавляем
      Number(value) !== 0
        ? setValue(value + valueBtn.toString())
        : setValue(valueBtn);
      return;
    }
    // ? присылаемое значение является оператором
    if (valueBtn === '+') {
      setValue(value + valueBtn);
      return;
    }
    if (valueBtn === '-') {
      setValue(value + valueBtn);
      return;
    }
    if (valueBtn === '*') {
      setValue(value + valueBtn);
      return;
    }
    if (valueBtn === '/') {
      setValue(value + valueBtn);
      return;
    }
    // ? сброс значений
    if (valueBtn === 'AC') {
      setValue(0);
      setResult(0);
      return;
    }
    if (valueBtn === '=') {
      setValue(result);
      return;
    }
    // TODO удаление последнего елемента
    if (valueBtn === 'delete') {
      if (value.length > 1) {
        setValue(value.slice(0, -1));
        return;
      }
      setValue(0);
      return;
    }
    console.log('нераспознанный оператор');
    return;
  };

  const changeValue = e => {
    setValue(e.currentTarget.value);
  };
  return (
    <div className={style.container}>
      <Display value={value} result={result} onChangeValue={changeValue} />
      <Panel onClick={onClick} />
    </div>
  );
}

export default App;
