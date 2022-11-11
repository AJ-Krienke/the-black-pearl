import { render, screen } from '@testing-library/react';

import Button from './Button';

const buttonElement = () => {
  const buttonEl = screen.getByRole('button');
  return buttonEl;
};

describe('Button component', () => {
  it('renders passed text', () => {
    render(
      <Button
        type='submit'
        text='Test'
      />
    );

    expect(buttonElement()).toHaveTextContent('Test');
  });

  it('renders passed type', () => {
    render(
      <Button
        type='radio'
        text='test'
      />
    );

    expect(buttonElement()).toHaveAttribute('type', 'radio');
  });

  it('renders passed classes', () => {
    render(<Button className='testClass' />);

    expect(buttonElement()).toHaveClass('testClass');
  });

  it('renders passed custom attributes', () => {
    render(<Button attributes={{ pyjamas: 'on' }} />);

    expect(buttonElement()).toHaveAttribute('pyjamas', 'on');
  });

  it.todo('renders passed boolean attributes');
});
