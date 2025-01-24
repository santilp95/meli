import { render } from '@testing-library/react';
import { CardProduct } from './ CardProduct';



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
      expect(imageElement).toHaveAttribute('src', '/path/to/image.jpg');
    });
  
    it.skip('renders the product price', () => {
      const { getByText } = render(<CardProduct {...defaultProps} />);
      const priceElement = getByText('100');
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
  
    it.skip('renders the shipping icon if hasShippingIcon is true', () => {
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