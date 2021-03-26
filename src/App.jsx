import { useEffect, useState } from 'react';
import style from 'App.module.css';
import Display from 'Components/Display/Display';
import Panel from 'Components/Panel/Panel';

function App() {
  const [value, setValue] = useState(0);
  const [result, setResult] = useState(0);
  const [scope, setScope] = useState(0);
  const [integer, setInteger] = useState(0);
  // * флаг определяющий что было введено оператор или число
  const [operator, setOperator] = useState(false);

  useEffect(() => {
    if (operator) {
      setScope(integer);
      console.log(integer);
      setInteger(Number.parseFloat(0));
      console.log('next', integer);
      return;
    }
    return;
  }, [operator, result, integer]);

  useEffect(() => {
    setResult(Number.parseFloat(scope));
  }, [scope]);

  const onClick = valueBtn => {
    // ? присылаемое значение является числом
    if (typeof valueBtn === 'number') {
      console.log(typeof valueBtn);
      console.log(valueBtn.toString());
      // *если значение 0 перезапишем, а не добавляем
      Number(value) !== 0
        ? setValue(value + valueBtn.toString())
        : setValue(valueBtn);
      Number(integer) !== 0
        ? setInteger(integer + valueBtn.toString())
        : setInteger(valueBtn);

      setOperator(false);
      return;
    }
    // ? присылаемое значение является оператором
    if (valueBtn === '+') {
      setOperator(true);
      // (scope === )
      setValue(value + valueBtn);
      return;
    }
    // ? сброс значений
    if (valueBtn === 'AC') {
      setValue(0);
      setResult(0);
      return;
    }
    console.log('false', typeof valueBtn);
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
