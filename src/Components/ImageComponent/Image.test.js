import { render, screen } from '@testing-library/react';
import Image from './Image';

describe('Image component', () => {
  it('renders correct html component', () => {
    render(<Image />);

    const imageElement = screen.getByRole('img');

    expect(imageElement).toBeInTheDocument();
  });

  it.todo('renders correct source');

  it('renders alt text', () => {
    render(<Image alt='test text' />);

    const imageElement = screen.getByRole('img');

    expect(imageElement).toHaveAttribute('alt', 'test text');
  });

  it('renders passed classes', () => {
    render(<Image className='testClass' />);

    const imageElement = screen.getByRole('img');

    expect(imageElement).toHaveClass('testClass');
  });

  it.todo('renders passed attributes');

  it.todo('renders custom attributes');

  it.todo('renders boolean attributes');
});
