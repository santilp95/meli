import { render, fireEvent } from '@testing-library/react';
import { IconProduct } from './IconProduct';

describe('IconProduct', () => {
  it('should render', () => {
    const { container } = render(<IconProduct />);
    expect(container).toMatchSnapshot();
  });

  it('renders the logo image', () => {
    const { getByAltText } = render(<IconProduct />);
    const logoImage = getByAltText('Logo');
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute('src', '/_next/image?url=%2Fassets%2FLogo_ML.png&w=96&q=75');
    expect(logoImage).toHaveAttribute('width', '40');
    expect(logoImage).toHaveAttribute('height', '30');
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    const { getByRole } = render(<IconProduct onClick={handleClick} />);
    const button = getByRole('button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});