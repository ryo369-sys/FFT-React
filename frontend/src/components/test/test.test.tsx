import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import test from './test';

describe('<test />', () => {
  test('should mount', () => {
    render(<test />);

    const test = screen.getByTestId('test');

    expect(test).toBeInTheDocument();
  });
});