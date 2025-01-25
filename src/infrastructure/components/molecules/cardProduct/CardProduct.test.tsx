import { render } from '@testing-library/react';

import { CardProduct } from './CardProduct';

describe('CardProduct', () => {
  const defaultProps = {
    image: '/path/to/image.jpg',
    price: 100,
    detail: 'Product detail',
    city: 'Product city',
    stateOfTheProduct: 'New',
    hasShippingIcon: true,
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

  it('renders the shipping icon if hasShippingIcon is true', () => {
    const { getByTestId } = render(<CardProduct {...defaultProps} />);
    const shippingIconElement = getByTestId('shipping-icon');
    expect(shippingIconElement).toBeInTheDocument();
  });

  it('does not render the shipping icon if hasShippingIcon is false', () => {
    const { queryByTestId } = render(<CardProduct {...defaultProps} hasShippingIcon={false} />);
    const shippingIconElement = queryByTestId('shipping-icon');
    expect(shippingIconElement).not.toBeInTheDocument();
  });
});