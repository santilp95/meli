import { render, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/navigation';

import { CardProduct } from './CardProduct';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('CardProduct', () => {
  const defaultProps = {
    image: '/path/to/image.jpg',
    price: 100,
    detail: 'Product detail',
    city: 'Product city',
    stateOfTheProduct: 'New',
    hasShippingIcon: true,
    id: '1',
  };

  it('renders the product image', () => {
    const { getByAltText } = render(<CardProduct {...defaultProps} />);
    const imageElement = getByAltText('Product detail');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', '/_next/image?url=%2Fpath%2Fto%2Fimage.jpg&w=384&q=75');
  });

  it('renders the product price', () => {
    const { getByTestId } = render(<CardProduct {...defaultProps} />);
    const priceElement = getByTestId('text-price');
    expect(priceElement).toBeInTheDocument();
  });

  it('renders the product detail', () => {
    const { getByText } = render(<CardProduct {...defaultProps} />);
    const detailElement = getByText('Product detail');
    expect(detailElement).toBeInTheDocument();
  });

  it('renders the product city', () => {
    const { getByText } = render(<CardProduct {...defaultProps} />);
    const cityElement = getByText('Product city');
    expect(cityElement).toBeInTheDocument();
  });

  it('redirects to the correct route when clicked', () => {
    const push = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push });

    const { getByRole } = render(<CardProduct {...defaultProps} />);
    const buttonElement = getByRole('button');
    fireEvent.click(buttonElement);

    expect(push).toHaveBeenCalledWith('/items/1');
  });
});