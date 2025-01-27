import './loading.css';

export const Loading: React.FC = () => {
    return (
        <div className="loading-overlay" data-testid="loading-overlay">
            <div className="spinner" data-testid="loading-spinner"></div>
        </div>
    );
};