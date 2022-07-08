import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import CalculatorButton from './CalculatorButton';
import CalculatorScreen from './CalculatorScreen';
import calculate from '../logic/calculate';

const BUTTONS = [
  ['AC', '+/-', '%', '÷'],
  ['7', '8', '9', 'x'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', null, '='],
];

const Calculator = () => {
  const [state, setState] = useState({ total: 0, next: 0 });

  const handleInputChange = (event) => {
    setState({
      next: event.target.value,
    });
  };

  const handleClick = (operation) => {
    const calc = calculate(state, operation);

    setState(calc);
  };

  return (
    <Card sx={{ mx: 'auto', width: '300px' }}>
      <CardContent>
        <CalculatorScreen
          onChange={handleInputChange}
          value={state.next || state.total || 0}
          operation={state.operation}
        />
        <div>
          {BUTTONS.map((line, lineIndex) => (
            <Stack key={line} direction="row" justifyContent="space-between">
              {line.map((button, index) => {
                const isPrimary = index === 3 || button === '=' || lineIndex === 0;

                return (
                  <div key={button}>
                    {!button ? (
                      <Box width={48} sx={{ m: '8px' }} />
                    ) : (
                      <CalculatorButton
                        value={button}
                        isPrimary={isPrimary}
                        onClick={handleClick}
                        sx={{ ml: button === '=' && 'auto' }}
                      />
                    )}
                  </div>
                );
              })}
            </Stack>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Calculator;
