import { render } from '@testing-library/react';

import { TextPrice } from './TextPrice';

describe('TextPrice', () => {
    it('renders the price with default font size', () => {
        const { getByTestId } = render(<TextPrice price={1000} />);
        const priceElement = getByTestId('text-price');
        expect(priceElement).toBeInTheDocument();
        expect(priceElement).toHaveStyle('font-size: 24px');
        expect(priceElement).toHaveTextContent('$ 1.000');
    });

    it('renders the price with custom font size', () => {
        const { getByTestId } = render(<TextPrice price={1000} fontSize="30px" />);
        const priceElement = getByTestId('text-price');
        expect(priceElement).toBeInTheDocument();
        expect(priceElement).toHaveStyle('font-size: 30px');
        expect(priceElement).toHaveTextContent('$ 1.000');
    });

    it('formats the price correctly', () => {
        const { getByTestId } = render(<TextPrice price={1234567} />);
        const priceElement = getByTestId('text-price');
        expect(priceElement).toHaveTextContent('$ 1.234.567');
    });
});