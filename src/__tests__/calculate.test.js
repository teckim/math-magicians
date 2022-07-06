import calculate from '../logic/calculate';

describe('calculate unit', () => {
  let result = {
    total: 0,
    next: 0,
  };

  result = calculate(result, '1');
  result = calculate(result, '+');
  result = calculate(result, '3');
  result = calculate(result, '=');

  test('1 + 3 should be equale to 4', () => {
    expect(result.total).toBe('4');
  });
});
