import { useState } from 'react';
import calculate from '../../logic/calculate';
import './style.scss';

const Calculator = () => {
  const [state, setState] = useState({ total: 0, next: 0 });

  const handleInputChange = (event) => {
    setState({
      next: event.target.value,
    });
  };

  const handleClick = (event) => {
    const operation = event.target.value;
    const calc = calculate(state, operation);

    setState(calc);
  };

  return (
    <div className="calculator">
      <div className="calculator__input-wrapper">
        <input className="calculator__input" name="equation" disabled onChange={handleInputChange} value={state.next || state.total || 0} />
      </div>
      <div className="calculator__actions">
        <button className="calculator__btn" onClick={handleClick} type="button" value="AC">AC</button>
        <button className="calculator__btn" onClick={handleClick} type="button" value="+/-">+/-</button>
        <button className="calculator__btn" onClick={handleClick} type="button" value="%">%</button>
        <button className="calculator__btn calculator__btn--primary" onClick={handleClick} type="button" value="÷">÷</button>
        <button className="calculator__btn" onClick={handleClick} type="button" value="7">7</button>
        <button className="calculator__btn" onClick={handleClick} type="button" value="8">8</button>
        <button className="calculator__btn" onClick={handleClick} type="button" value="9">9</button>
        <button className="calculator__btn calculator__btn--primary" onClick={handleClick} type="button" value="x">x</button>
        <button className="calculator__btn" onClick={handleClick} type="button" value="4">4</button>
        <button className="calculator__btn" onClick={handleClick} type="button" value="5">5</button>
        <button className="calculator__btn" onClick={handleClick} type="button" value="6">6</button>
        <button className="calculator__btn calculator__btn--primary" onClick={handleClick} type="button" value="-">-</button>
        <button className="calculator__btn" onClick={handleClick} type="button" value="1">1</button>
        <button className="calculator__btn" onClick={handleClick} type="button" value="2">2</button>
        <button className="calculator__btn" onClick={handleClick} type="button" value="3">3</button>
        <button className="calculator__btn calculator__btn--primary" onClick={handleClick} type="button" value="+">+</button>
        <button className="calculator__btn calculator__btn--span" onClick={handleClick} type="button" value="0">0</button>
        <button className="calculator__btn" onClick={handleClick} type="button" value=".">.</button>
        <button className="calculator__btn calculator__btn--primary" onClick={handleClick} type="button" value="=">=</button>
      </div>
    </div>
  );
};

// eslint-disable-next-line react/prefer-stateless-function

export default Calculator;
