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

  it('renders passed attributes', () => {
    render(
      <Image
        src={imageSource}
        attributes={{
          style: { backgroundColor: 'red' },
        }}
      />
    );

    expect(imageElement()).toHaveStyle({ backgroundColor: 'red' });
  });

  it('renders custom attributes', () => {
    render(<Image attributes={{ pancakes: 'tasty' }} />);

    expect(imageElement()).toHaveAttribute('pancakes', 'tasty');
  });

  it.todo('renders boolean attributes');
});
