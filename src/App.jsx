import { useEffect, useState } from 'react';
import style from 'App.module.css';
import Display from 'Components/Display/Display';
import Panel from 'Components/Panel/Panel';

function App() {
  const [value, setValue] = useState(0);
  const [result, setResult] = useState(3);

  useEffect(() => {
    setResult(value);
    // return () => {
    //   cleanup
    // }
  }, [value]);

  const changeValue = e => {
    setValue(e.currentTarget.value);
  };
  return (
    <div className={style.container}>
      <Display value={value} result={result} onChangeValue={changeValue} />
      <Panel />
    </div>
  );
}

export default App;
