import React from 'react';
import TestRenderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('testing math magician', () => {
  it('renders correctly', () => {
    const tree = TestRenderer
      .create(<Calculator />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Testing calc rendering using test library', () => {
    const { getByTestId } = render(<Calculator />);
    const Input = getByTestId('testingInput');
    expect(Input).toBeTruthy();
  });

  test('click', () => {
    render(<Calculator />);
    userEvent.click(screen.getByText('2'));
    userEvent.click(screen.getByText('+'));
    userEvent.click(screen.getByText('3'));
    userEvent.click(screen.getByText('='));
    const { value } = screen.getByTestId('testingInput');
    expect(value).toBe('5');
  });
});
