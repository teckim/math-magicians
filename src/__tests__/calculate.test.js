import calculate from '../logic/calculate';

describe('calculate unit', () => {
  let result = {
    total: 0,
    next: 0,
  };

  test('1 + 3 should be equale to 4', () => {
    result = calculate(result, '1');
    result = calculate(result, '+');
    result = calculate(result, '3');
    result = calculate(result, '=');

    expect(result.total).toBe('4');
  });

  test('5 - 3 should be equale to 2', () => {
    result = calculate(result, 'AC');
    result = calculate(result, '5');
    result = calculate(result, '-');
    result = calculate(result, '3');
    result = calculate(result, '=');

    expect(result.total).toBe('2');
  });

  test('3 x 2 should be equale to 6', () => {
    result = calculate(result, 'AC');
    result = calculate(result, '3');
    result = calculate(result, 'x');
    result = calculate(result, '2');
    result = calculate(result, '=');

    expect(result.total).toBe('6');
  });

  test('8 / 2 should be equale to 4', () => {
    result = calculate(result, 'AC');
    result = calculate(result, '8');
    result = calculate(result, '÷');
    result = calculate(result, '2');
    result = calculate(result, '=');

    expect(result.total).toBe('4');
  });
});
