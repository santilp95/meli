import { FC } from 'react';

import './loading.css';

export const Loading: FC = () => {
    return (
        <div className="loading-overlay" data-testid="loading-overlay">
            <div className="spinner" data-testid="loading-spinner"></div>
        </div>
    );
};