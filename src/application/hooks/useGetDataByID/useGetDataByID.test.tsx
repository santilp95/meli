import { renderHook, waitFor } from '@testing-library/react';

import { getDataByID } from '@/infrastructure/services';
import { useGetDataByID } from './useGetDataByID';

import { IResponseTransformDataByID } from '@/domain';


jest.mock('../../../infrastructure/services', () => ({
    getDataByID: jest.fn(),
}));

describe('useGetDataByID', () => {
    const id = 'test-id';

    it('should fetch data and return the transformed item', async () => {
        const mockResponse: IResponseTransformDataByID = {
            author: { name: 'John', lastName: 'Doe' },
            item: {
                id: 'test-id',
                title: 'Product 1',
                price: { amount: 100, currency: 'USD', decimals: 0 },
                picture: 'http://example.com/image1.jpg',
                condition: 'new',
                free_shipping: true,
                description: 'Product description',
                sold_quantity: 10,
            },
        };

        (getDataByID as jest.Mock).mockResolvedValue(mockResponse);

        const { result } = renderHook(() => useGetDataByID(id));

        expect(result.current.loading).toBeTruthy();

        await waitFor(() => {
            expect(result.current.loading).toBeFalsy();
        });

        expect(result.current.data).toEqual({
            image: 'http://example.com/image1.jpg',
            alt: 'Product 1',
            state: 'new - 10 vendidos',
            title: 'Product 1',
            price: 100,
            description: 'Product description',
        });
        expect(result.current.error).toBeNull();
    });

    it('should handle error', async () => {
        const errorMessage = 'Network Error';
        (getDataByID as jest.Mock).mockRejectedValue(new Error(errorMessage));

        const { result } = renderHook(() => useGetDataByID(id));

        expect(result.current.loading).toBeTruthy();

        await waitFor(() => {
            expect(result.current.loading).toBeFalsy();
        });

        expect(result.current.data).toBeNull();
        expect(result.current.error).toBe(errorMessage);
    });
});