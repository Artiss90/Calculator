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
      console.log('🚀 ~ file: App.jsx ~ line 15 ~ calc ~ string', string);
      if (typeof string === 'number') {
        // ? если вместо строки числовое значение - преображаем в строку
        string = string.toString();
      }
      let elements = string.split(' ');

      const pastResult = (start, num, count = 3) => {
        elements.splice(start, count, num);
      };
      const multiply = index => {
        console.log('🚀 ~ file: App.jsx ~ line 26 ~ multiply ~ index', index);
        console.log(
          '🚀 ~ file: App.jsx ~ line 28 ~ multiply ~ elements',
          elements,
        );
        const result =
          Number(elements[index - 1]) * Number(elements[index + 1]);
        pastResult(index - 1, result);
      };
      const divided = index => {
        const result =
          Number(elements[index - 1]) / Number(elements[index + 1]);
        pastResult(index - 1, result);
      };
      const plus = index => {
        const result =
          Number(elements[index - 1]) + Number(elements[index + 1]);
        pastResult(index - 1, result);
      };
      const minus = index => {
        const result =
          Number(elements[index - 1]) - Number(elements[index + 1]);
        pastResult(index - 1, result);
      };

      if (!elements) {
        return;
      }

      if (elements.indexOf('*') !== -1 || elements.indexOf('/') !== -1) {
        if (elements.indexOf('/') > elements.indexOf('*')) {
          divided(elements.indexOf('/'));
          return calc(elements.join(' '));
        }
        if (elements.indexOf('*') > elements.indexOf('/')) {
          multiply(elements.indexOf('*'));
          return calc(elements.join(' '));
        }
      }
      if (elements.indexOf('+') !== -1 || elements.indexOf('-') !== -1) {
        if (elements.indexOf('-') > elements.indexOf('+')) {
          minus(elements.indexOf('-'));
          return calc(elements.join(' '));
        }
        if (elements.indexOf('+') > elements.indexOf('-')) {
          plus(elements.indexOf('+'));
          return calc(elements.join(' '));
        }
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
    if (valueBtn === ' + ') {
      setOperator(true);
      setValue(value + valueBtn);
      return;
    }
    if (valueBtn === ' - ') {
      setOperator(true);
      setValue(value + valueBtn);
      return;
    }
    if (valueBtn === ' * ') {
      setOperator(true);
      setValue(value + valueBtn);
      return;
    }
    if (valueBtn === ' / ') {
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
        setValue(value.trim().slice(0, -1).trim());
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
      if (value === 0) {
        setValue(memory);
        return;
      }
      setValue(value + memory);
      return;
    }
    // TODO добавление точки
    if (valueBtn === '.') {
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
