import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Box from './Box';

describe('<Box />', () => {
  test('should mount', () => {
    render(<Box />);

    const box = screen.getByTestId('Box');

    expect(box).toBeInTheDocument();
  });
});