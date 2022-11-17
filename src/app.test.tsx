import { describe, expect, it } from 'npm:vitest';
import { fireEvent, render, screen } from 'npm:@testing-library/react';
import App from './app.tsx';

describe('App component', () => {
  it('increase the state number button when click', () => {
    render(<App />);
    const buttonElement = screen.getByRole('button', {
      name: /count is 0/i,
    });
    fireEvent.click(buttonElement);

    const countText = screen.getByText(/count is 1/i);
    expect(countText).toBeInTheDocument();
  });
});
