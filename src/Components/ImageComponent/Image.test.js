import { render, screen } from '@testing-library/react';
import Image from './Image';
import imageSource from './test-picture.jpg';

const imageElement = () => {
  const imageEl = screen.getByRole('img');
  return imageEl;
};

describe('Image component', () => {
  it('renders correct html component', () => {
    render(<Image />);

    expect(imageElement()).toBeInTheDocument();
  });

  it('renders correct source', () => {
    render(<Image src={imageSource} />);

    expect(imageElement()).toHaveAttribute('src', imageSource);
  });

  it('renders alt text', () => {
    render(<Image alt='test text' />);

    expect(imageElement()).toHaveAttribute('alt', 'test text');
  });

  it('renders passed classes', () => {
    render(<Image className='testClass' />);

    expect(imageElement()).toHaveClass('testClass');
  });

  it.todo('renders passed attributes');

  it.todo('renders custom attributes');

  it.todo('renders boolean attributes');
});
