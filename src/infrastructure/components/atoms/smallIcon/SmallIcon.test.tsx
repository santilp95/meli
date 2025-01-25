import { render } from '@testing-library/react';
import { SmallIcon } from './SmallIcon';

describe('SmallIcon', () => {
    it('renders the image with the correct src and alt attributes', () => {
        const { getByAltText } = render(<SmallIcon />);
        const imageElement = getByAltText('Shipping Icon');
        expect(imageElement).toBeInTheDocument();
        expect(imageElement).toHaveAttribute('src', '/_next/image?url=%2Fassets%2Fic_shipping.png&w=32&q=75');
    });

    it('applies correct styles', () => {
        const { getByAltText } = render(<SmallIcon />);
        const imageElement = getByAltText('Shipping Icon');
        expect(imageElement).toHaveStyle('display: block');
    });

    it('has the correct data-testid attribute', () => {
        const { getByTestId } = render(<SmallIcon />);
        const imageElement = getByTestId('shipping-icon');
        expect(imageElement).toBeInTheDocument();
    });
});