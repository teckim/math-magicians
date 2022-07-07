import React from 'react';
import TestRenderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('calculator component', () => {
  it('should render correctly', () => {
    const tree = TestRenderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('2 + 3 should be equale to 5', () => {
    render(<Calculator />);

    userEvent.click(screen.getByText('2'));
    userEvent.click(screen.getByText('+'));
    userEvent.click(screen.getByText('3'));
    userEvent.click(screen.getByText('='));

    const { value } = screen.getByTestId('calculator-input');

    expect(value).toBe('5');
  });

  test('5 - 3 should be equale to 2', () => {
    render(<Calculator />);

    userEvent.click(screen.getByText('AC'));
    userEvent.click(screen.getByText('5'));
    userEvent.click(screen.getByText('-'));
    userEvent.click(screen.getByText('3'));
    userEvent.click(screen.getByText('='));

    const { value } = screen.getByTestId('calculator-input');

    expect(value).toBe('2');
  });

  test('3 x 2 should be equale to 6', () => {
    render(<Calculator />);

    userEvent.click(screen.getByText('AC'));
    userEvent.click(screen.getByText('3'));
    userEvent.click(screen.getByText('x'));
    userEvent.click(screen.getByText('2'));
    userEvent.click(screen.getByText('='));

    const { value } = screen.getByTestId('calculator-input');

    expect(value).toBe('6');
  });

  test('8 ÷ 2 should be equale to 4', () => {
    render(<Calculator />);

    userEvent.click(screen.getByText('AC'));
    userEvent.click(screen.getByText('8'));
    userEvent.click(screen.getByText('÷'));
    userEvent.click(screen.getByText('2'));
    userEvent.click(screen.getByText('='));

    const { value } = screen.getByTestId('calculator-input');

    expect(value).toBe('4');
  });
});
