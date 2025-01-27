import { render, screen } from '@testing-library/react';
import { Loading } from './Loading';

describe('Loading Component', () => {
    it('should render the loading overlay and spinner', () => {
        render(<Loading />);

        const overlay = screen.getByTestId('loading-overlay');
        const spinner = screen.getByTestId('loading-spinner');

        expect(overlay).toBeInTheDocument();
        expect(spinner).toBeInTheDocument();

    });
});