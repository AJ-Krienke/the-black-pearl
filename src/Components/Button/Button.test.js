import { render, screen } from '@testing-library/react';

import Button from './Button';

describe('Button component', () => {
  test('renders passed text', () => {
    render(
      <Button
        type='submit'
        text='Test'
      />
    );

    const buttonElement = screen.getByRole('button');

    expect(buttonElement).toHaveTextContent('Test');
  });

  test('renders passed type', () => {
    render(
      <Button
        type='radio'
        text='test'
      />
    );

    const buttonElement = screen.getByRole('button');

    expect(buttonElement).toHaveAttribute('type', 'radio');
  });

  test('renders passed custom attributes', () => {
    render(<Button attributes={{ pyjamas: 'on' }} />);

    const buttonElement = screen.getByRole('button');

    expect(buttonElement).toHaveAttribute('pyjamas', 'on');
  });

  test('renders passed boolean attributes', () => {
    render(<Button attributes={'disabled'} />);

    const buttonElement = screen.getByRole('button');

    expect(buttonElement).toBeDisabled();
  });

  test('renders passed classes', () => {
    render(<Button className='testClass' />);

    const buttonElement = screen.getByRole('button');

    expect(buttonElement).toHaveClass('testClass');
  });
});
