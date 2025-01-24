import { render, fireEvent } from '@testing-library/react';
import { ShortButton } from './ShortButton';

describe('ShortButton', () => {
  it('renders the search icon', () => {
    const { getByAltText } = render(<ShortButton />);
    const searchIcon = getByAltText('Search Icon');
    expect(searchIcon).toBeInTheDocument();
    expect(searchIcon).toHaveAttribute('src', '/_next/image?url=%2Fassets%2Fic_Search.png&w=48&q=75');
    expect(searchIcon).toHaveAttribute('width', '20');
    expect(searchIcon).toHaveAttribute('height', '20');
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    const { getByRole } = render(<ShortButton onClick={handleClick} />);
    const button = getByRole('button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});