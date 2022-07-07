import { useState } from 'react';
import PropTypes from 'prop-types';
import calculate from '../../logic/calculate';

import './style.scss';

const BUTTONS = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

const Button = ({
  value, isPrimary, onClick,
}) => {
  const classNames = [
    'calculator__btn',
    isPrimary && 'calculator__btn--primary',
    value === '0' && 'calculator__btn--span',
  ]
    .filter((v) => !!v)
    .join(' ');

  return <button className={classNames} onClick={onClick} type="button" value={value}>{value}</button>;
};

Button.propTypes = {
  value: PropTypes.string.isRequired,
  isPrimary: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  isPrimary: false,
  onClick: () => {},
};

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
        <input data-testid="calculator-input" className="calculator__input" name="equation" disabled onChange={handleInputChange} value={state.next || state.total || 0} />
      </div>
      <div className="calculator__actions">
        {
          BUTTONS.map((button, index) => {
            const isPrimary = (index + 1) % 4 === 0 || index === 18;

            return (
              <Button
                key={button}
                value={button}
                isPrimary={isPrimary}
                onClick={handleClick}
              />
            );
          })
        }
      </div>
    </div>
  );
};

export default Calculator;
