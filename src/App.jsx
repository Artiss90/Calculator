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
    const calc = function (dataByCalc) {
      console.log(
        '🚀 ~ file: App.jsx ~ line 15 ~ calc ~ dataByCalc',
        dataByCalc,
      );
      if (typeof dataByCalc === 'number') {
        // ? если вместо строки числовое значение - преображаем в строку
        dataByCalc = dataByCalc.toString();
      }
      let elements = dataByCalc.split(' ');

      const pastResult = (start, num, count = 3) => {
        elements.splice(start, count, num);
      };
      const multiply = index => {
        const result = (
          Number(elements[index - 1]) * Number(elements[index + 1])
        ).toFixed(10);
        pastResult(index - 1, result);
      };
      const divided = index => {
        const result = (
          Number(elements[index - 1]) / Number(elements[index + 1])
        ).toFixed(10);
        pastResult(index - 1, result);
      };
      const plus = index => {
        const result = (
          Number(elements[index - 1]) + Number(elements[index + 1])
        ).toFixed(10);
        pastResult(index - 1, result);
      };
      const minus = index => {
        const result = (
          Number(elements[index - 1]) - Number(elements[index + 1])
        ).toFixed(10);
        pastResult(index - 1, result);
      };

      if (!elements) {
        return;
      }
      // ? сначала идут операции деления и умножения
      if (elements.indexOf('*') !== -1 && elements.indexOf('/') !== -1) {
        // ? если присутствуют оба оператора смотрим который идет первым
        if (elements.indexOf('/') < elements.indexOf('*')) {
          divided(elements.indexOf('/'));
          return calc(elements.join(' '));
        }
        if (elements.indexOf('*') < elements.indexOf('/')) {
          multiply(elements.indexOf('*'));
          return calc(elements.join(' '));
        }
      }
      if (elements.indexOf('*') !== -1) {
        multiply(elements.indexOf('*'));
        return calc(elements.join(' '));
      }
      if (elements.indexOf('/') !== -1) {
        divided(elements.indexOf('/'));
        return calc(elements.join(' '));
      }
      // ? операции сложения и отнимания выполняются только после деления и умножения
      if (elements.indexOf('+') !== -1 && elements.indexOf('-') !== -1) {
        // ? если присутствуют оба оператора смотрим который идет первым
        if (elements.indexOf('-') < elements.indexOf('+')) {
          minus(elements.indexOf('-'));
          return calc(elements.join(' '));
        }
        if (elements.indexOf('+') < elements.indexOf('-')) {
          plus(elements.indexOf('+'));
          return calc(elements.join(' '));
        }
      }
      if (elements.indexOf('-') !== -1) {
        minus(elements.indexOf('-'));
        return calc(elements.join(' '));
      }
      if (elements.indexOf('+') !== -1) {
        plus(elements.indexOf('+'));
        return calc(elements.join(' '));
      }
      if (elements.length === 1) {
        return Number(elements[0]);
      }
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
    const indexLastNum = value.toString().split(' ').length - 1;
    const lastNum = value.toString().split(' ')[indexLastNum];
    // ? присылаемое значение является числом
    if (
      valueBtn === '1' ||
      valueBtn === '2' ||
      valueBtn === '3' ||
      valueBtn === '4' ||
      valueBtn === '5' ||
      valueBtn === '6' ||
      valueBtn === '7' ||
      valueBtn === '8' ||
      valueBtn === '9' ||
      valueBtn === '0'
    ) {
      // *если значение 0 перезапишем, а не добавляем
      lastNum === 0 || lastNum === '0'
        ? setValue(valueBtn)
        : setValue(value + valueBtn.toString());
      setOperator(false);
      return;
    }
    // ? присылаемое значение является оператором
    if (valueBtn === ' + ' && operator === false) {
      setOperator(true);
      setValue(value + valueBtn);
      return;
    }
    if (valueBtn === ' - ' && operator === false) {
      setOperator(true);
      setValue(value + valueBtn);
      return;
    }
    if (valueBtn === ' * ' && operator === false) {
      setOperator(true);
      setValue(value + valueBtn);
      return;
    }
    if (valueBtn === ' / ' && operator === false) {
      setOperator(true);
      setValue(value + valueBtn);
      return;
    }
    // ? сброс значений
    if (valueBtn === 'AC') {
      setValue(0);
      setResult(0);
      setOperator(false);
      return;
    }
    if (valueBtn === '=') {
      setValue(result);
      setOperator(false);
      return;
    }
    // TODO удаление последнего елемента
    if (valueBtn === 'delete') {
      setOperator(false);
      if (value.length <= 1 || typeof value === 'number') {
        setValue(0);
        return;
      }
      const elements = value.split(' ');
      const lengthEl = elements.length;
      elements.length = lengthEl - 1;
      const valueWithoutLastEl = elements.join(' ');
      setValue(valueWithoutLastEl);
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
      if (value === 0) {
        setValue(memory);
        return;
      }
      setValue(value + memory);
      return;
    }
    // TODO добавление точки
    if (valueBtn === '.') {
      if (lastNum.includes('.')) {
        return;
      } // * если в последнем числе уже есть точка - вторую не ставим
      setValue(value + valueBtn.toString());
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
