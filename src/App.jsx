import { useEffect, useState } from 'react';
import style from 'App.module.css';
import Display from 'Components/Display/Display';
import Panel from 'Components/Panel/Panel';

function App() {
  const [value, setValue] = useState(0);
  const [result, setResult] = useState(0);
  const [scope, setScope] = useState(0);
  const [operator, setOperator] = useState(false);

  useEffect(() => {
    setResult(Number.parseFloat(value));
  }, [value]);

  const onClick = valueBtn => {
    if (typeof valueBtn === 'number') {
      console.log(typeof valueBtn);
      console.log(valueBtn.toString());
      value !== 0
        ? setValue(value + valueBtn.toString())
        : setValue(valueBtn.toString());
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
