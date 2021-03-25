import Button from 'Components/Button/Button';
import React from 'react';
import style from './Panel.module.css';

function Panel({ onClick }) {
  return (
    <div className={style.container}>
      <Button value="AC" className={style.AC} onClick={onClick}>
        AC
      </Button>
      <Button value="delete" onClick={onClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="32">
          <path
            fill="grey"
            d="M22.709 12.284a1.01 1.01 0 00-1.427 0l-2.3 2.297-2.239-2.237a1.001 1.001 0 00-1.416 1.414l2.239 2.237-2.268 2.266c-.394.394-.394 1.032 0 1.425s1.033.393 1.427 0l2.268-2.266 2.239 2.237a1.001 1.001 0 001.416-1.414l-2.239-2.237 2.3-2.297a1.007 1.007 0 000-1.425zm5.288-7.282H10.054c-.28-.017-.565.07-.78.283L.289 15.224a.99.99 0 00-.287.762.991.991 0 00.287.762l8.985 9.939c.196.194.451.29.707.293v.021h18.017a4.001 4.001 0 004.003-3.999V9.004c0-2.21-1.793-4-4.003-4zM29.998 23c0 1.104-.896 2-2.002 2H10.468l-8.149-9.014 8.121-8.983h17.556a2 2 0 012.002 2V23z"
          />
        </svg>
      </Button>
      <Button value="%" onClick={onClick}>
        %
      </Button>
      <Button value="/" className={style.operator} onClick={onClick}>
        /
      </Button>
      <Button value={7} onClick={onClick}>
        7
      </Button>
      <Button value={8} onClick={onClick}>
        8
      </Button>
      <Button value={9} onClick={onClick}>
        9
      </Button>
      <Button value="*" className={style.operator} onClick={onClick}>
        *
      </Button>
      <Button value={4} onClick={onClick}>
        4
      </Button>
      <Button value={5} onClick={onClick}>
        5
      </Button>
      <Button value={6} onClick={onClick}>
        6
      </Button>
      <Button value="-" className={style.operator} onClick={onClick}>
        -
      </Button>
      <Button value={1} onClick={onClick}>
        1
      </Button>
      <Button value={2} onClick={onClick}>
        2
      </Button>
      <Button value={3} onClick={onClick}>
        3
      </Button>
      <Button value="+" className={style.operator} onClick={onClick}>
        +
      </Button>
      <Button value="." onClick={onClick}>
        .
      </Button>
      <Button value={0} onClick={onClick}>
        0
      </Button>
      <Button value="=" className={style.equally} onClick={onClick}>
        =
      </Button>
    </div>
  );
}

export default Panel;
