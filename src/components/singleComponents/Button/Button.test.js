import { render, screen } from '@testing-library/react';

import Button from '../Button';

describe('Button component', () => {
  // does it render correctly
  test('renders button element', () => {
    render(
      <Button
        type='button'
        text='test'
      />
    );

    const buttonElement = screen.getByRole('button');

    expect(buttonElement).toHaveTextContent('test');
  });

  // Does it render the passed text as passed
  test('renders the passed text', () => {
    render(
      <Button
        type='button'
        text='teXt tEst'
      />
    );

    const buttonElement = screen.getByRole('button');

    expect(buttonElement).toHaveTextContent('teXt tEst');
  });

  // Does it render the passed type
  test('renders the passed type', () => {
    render(
      <Button
        type='radio'
        text='test'
      />
    );

    const buttonElement = screen.getByRole('button');

    expect(buttonElement).toHaveAttribute('type', 'radio');
  });

  test('renders', () => {
    render(<Button text='test' />);

    const buttonElement = screen.getByRole('button');

    expect(buttonElement).toHaveAttribute('type', 'submit');
  });
});
