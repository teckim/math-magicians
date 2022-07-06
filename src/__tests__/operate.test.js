import operate from '../logic/operate';

describe('operate unit', () => {
  const result = operate('1', '3', '+');

  test('1 + 3 should be equale to 4', () => {
    expect(result).toBe('4');
  });
});
