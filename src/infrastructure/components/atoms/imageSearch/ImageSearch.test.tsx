import { render } from '@testing-library/react';
import { ImageSearch } from './ImageSearch';

describe('ImageSearch', () => {
    it('renders the image with the correct src and alt attributes', () => {
        const { getByAltText } = render(<ImageSearch src="https://example.com/image.jpg" alt="Example Image" />);
        const imageElement = getByAltText('Example Image');
        expect(imageElement).toBeInTheDocument();
        expect(imageElement).toHaveAttribute('src', '/_next/image?url=https%3A%2F%2Fexample.com%2Fimage.jpg&w=384&q=75');
    });

    it('applies correct styles', () => {
        const { getByAltText } = render(<ImageSearch src="https://example.com/image.jpg" alt="Example Image" />);
        const imageElement = getByAltText('Example Image');
        expect(imageElement).toHaveStyle('border-radius: 4px');
        expect(imageElement).toHaveStyle('object-fit: cover');
    });
});