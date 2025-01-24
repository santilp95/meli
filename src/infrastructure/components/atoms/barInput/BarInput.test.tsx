import { render, fireEvent } from '@testing-library/react';

import { BarInput } from './BarInput';

describe('BarInput', () => {
    it('renders with placeholder text', () => {
        const { getByPlaceholderText } = render(<BarInput placeholder="Search here" />);
        const inputElement = getByPlaceholderText('Search here');
        expect(inputElement).toBeInTheDocument();
    });

    it('renders with default placeholder text when none is provided', () => {
        const { getByPlaceholderText } = render(<BarInput />);
        const inputElement = getByPlaceholderText('Nunca dejes de buscar');
        expect(inputElement).toBeInTheDocument();
    });

    it('renders with the provided value', () => {
        const handleChange = jest.fn();
        const { getByDisplayValue } = render(<BarInput value="test value" onChange={handleChange}/>);
        const inputElement = getByDisplayValue('test value');
        expect(inputElement).toBeInTheDocument();
    });

    it('calls onChange when the input value changes', () => {
        const handleChange = jest.fn();
        const { getByPlaceholderText } = render(<BarInput placeholder="Search here"  onChange={handleChange} />);
        const inputElement = getByPlaceholderText('Search here');
        fireEvent.change(inputElement, { target: { value: 'new value' } });
        expect(handleChange).toHaveBeenCalledTimes(1);
    });

});