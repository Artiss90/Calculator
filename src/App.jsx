import { useEffect, useState } from 'react';
import style from 'App.module.css';
import Display from 'Components/Display/Display';
import Panel from 'Components/Panel/Panel';

function App() {
  const [value, setValue] = useState(0);
  const [result, setResult] = useState(0);
  const [memory, setMemory] = useState(0);
  const [operator, setOperator] = useState(false);

  useEffect(() => {
    const calc = function (string) {
      if (typeof string === 'number') {
        // ? если вместо строки числовое значение - преображаем в строку
        string = string.toString();
      }
      if (string.includes('+')) {
        const arrNum = string.split('+');
        return arrNum.reduce(
          (arr, item) => Number.parseFloat(arr) + Number.parseFloat(item),
          0,
        );
      }
      if (string.includes('-')) {
        const arrNum = string.split('-');
        return arrNum.reduce(
          (arr, item) => Number.parseFloat(arr) - Number.parseFloat(item),
        );
      }
      if (string.includes('*')) {
        const arrNum = string.split('*');
        return arrNum.reduce(
          (arr, item) => Number.parseFloat(arr) * Number.parseFloat(item),
        );
      }
      if (string.includes('/')) {
        if (string.includes('/0')) {
          return setResult('деление на ноль!');
        }
        const arrNum = string.split('/');
        return arrNum.reduce(
          (arr, item) => Number.parseFloat(arr) / Number.parseFloat(item),
        );
      }
      return string;
    };
    const result = () => calc(value);
    // ? если выражение заканчивается оператором - калькуляцию не проводим, так как в массиве будет пустой объект
    if (!operator) {
      // ? если результат калькуляции NaN - в результат не выводим
      if (isNaN(result())) {
        return;
      }
      setResult(result);
      return;
    }
    return;
  }, [value, operator]);

  const onClick = valueBtn => {
    // ? присылаемое значение является числом
    if (typeof valueBtn === 'number') {
      // *если значение 0 перезапишем, а не добавляем
      Number(value) !== 0
        ? setValue(value + valueBtn.toString())
        : setValue(valueBtn);
      setOperator(false);
      return;
    }
    // ? присылаемое значение является оператором
    if (valueBtn === '+') {
      setOperator(true);
      setValue(value + valueBtn);
      return;
    }
    if (valueBtn === '-') {
      setOperator(true);
      setValue(value + valueBtn);
      return;
    }
    if (valueBtn === '*') {
      setOperator(true);
      setValue(value + valueBtn);
      return;
    }
    if (valueBtn === '/') {
      setOperator(true);
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
    // TODO добавлениеб удаление и чтение с памяти
    if (valueBtn === 'M+') {
      setMemory(result);
      return;
    }
    if (valueBtn === 'M-') {
      setMemory(0);
      return;
    }
    if (valueBtn === 'MR') {
      setOperator(false);
      setValue(value + memory);
      return;
    }
    // TODO добавление точки
    if (valueBtn === '.') {
      setValue(value + valueBtn);
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
