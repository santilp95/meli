import { render } from '@testing-library/react';

import { TextCategory } from './TextCategory';

describe('TextCategory', () => {
  it('renders the text', () => {
    const { getByText } = render(<TextCategory text="Sample Text" />);
    const textElement = getByText('Sample Text');
    expect(textElement).toBeInTheDocument();
  });

  it('applies normal font weight by default', () => {
    const { getByText } = render(<TextCategory text="Sample Text" />);
    const textElement = getByText('Sample Text');
    expect(textElement).toHaveStyle('font-weight: normal');
  });

  it('applies bold font weight when isBold is true', () => {
    const { getByText } = render(<TextCategory text="Sample Text" isBold />);
    const textElement = getByText('Sample Text');
    expect(textElement).toHaveStyle('font-weight: bold');
  });

  it('applies correct styles', () => {
    const { getByText } = render(<TextCategory text="Sample Text" />);
    const textElement = getByText('Sample Text');
    expect(textElement).toHaveStyle('font-size: 14px');
    expect(textElement).toHaveStyle('color: #999999');
    expect(textElement).toHaveStyle('margin: 0');
    expect(textElement).toHaveStyle('padding: 0');
  });
});