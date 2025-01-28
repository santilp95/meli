import { render } from '@testing-library/react';
import { TextDetail } from './TextDetail';

describe('TextDetail', () => {
    it('renders the provided text', () => {
        const text = 'Product detail text';
        const { getByText } = render(<TextDetail text={text} />);
        const textElement = getByText(text);
        expect(textElement).toBeInTheDocument();
    });

    it('applies the correct class name', () => {
        const text = 'Product detail text';
        const { container } = render(<TextDetail text={text} />);
        const textElement = container.querySelector('.text-detail');
        expect(textElement).toBeInTheDocument();
        expect(textElement).toHaveClass('text-detail');
    });
});