import operate from '../logic/operate';

describe('operate unit', () => {
  test('1 + 3 should be equale to 4', () => {
    const result = operate('1', '3', '+');

    expect(result).toBe('4');
  });

  test('9 - 4 should be equale to 5', () => {
    const result = operate('9', '4', '-');

    expect(result).toBe('5');
  });

  test('2 x 5 should be equale to 10', () => {
    const result = operate('2', '5', 'x');

    expect(result).toBe('10');
  });

  test('9 ÷ 3 should be equale to 3', () => {
    const result = operate('9', '3', '÷');

    expect(result).toBe('3');
  });
});
