import { render } from '@testing-library/react';

import { TextCity } from './TextCity';

describe('TextCity', () => {
    it('renders the text', () => {
        const { getByText } = render(<TextCity text="Sample City" />);
        const textElement = getByText('Sample City');
        expect(textElement).toBeInTheDocument();
    });

    it('applies correct styles', () => {
        const { getByText } = render(<TextCity text="Sample City" />);
        const textElement = getByText('Sample City');
        expect(textElement).toHaveStyle('font-size: 12px');
        expect(textElement).toHaveStyle('color: #999999');
    });
});