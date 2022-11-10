import { render, screen } from '@testing-library/react';

import Button from './Button';

describe('Button component', () => {
  it('renders passed text', () => {
    render(
      <Button
        type='submit'
        text='Test'
      />
    );

    const buttonElement = screen.getByRole('button');

    expect(buttonElement).toHaveTextContent('Test');
  });

  it('renders passed type', () => {
    render(
      <Button
        type='radio'
        text='test'
      />
    );

    const buttonElement = screen.getByRole('button');

    expect(buttonElement).toHaveAttribute('type', 'radio');
  });

  it('renders passed classes', () => {
    render(<Button className='testClass' />);

    const buttonElement = screen.getByRole('button');

    expect(buttonElement).toHaveClass('testClass');
  });

  it('renders passed custom attributes', () => {
    render(<Button attributes={{ pyjamas: 'on' }} />);

    const buttonElement = screen.getByRole('button');

    expect(buttonElement).toHaveAttribute('pyjamas', 'on');
  });

  it.todo('renders passed boolean attributes');
});
