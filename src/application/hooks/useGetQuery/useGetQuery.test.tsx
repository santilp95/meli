import { renderHook, waitFor } from '@testing-library/react';
import { useGetQuery } from './useGetQuery';

import { IResponseTransformQuery } from '@/domain';
import { msQuery } from '../../../infrastructure/services/msQuery/msQuery';

jest.mock('../../../infrastructure/services/msQuery/msQuery',()=>({
    msQuery: jest.fn(),
}))

describe('useGetQuery', () => {
    it('should fetch data and return products', async () => {
        const mockResponse: IResponseTransformQuery = {
            author: { name: 'John', lastName: 'Doe' },
            categories: ['Electronics'],
            items: [
                {
                    id: '1',
                    title: 'Product 1',
                    price: { currency: 'USD', amount: 100, decimals: 0 },
                    picture: 'http://example.com/image1.jpg',
                    condition: 'new',
                    free_shipping: true,
                },
            ],
        };

        (msQuery as jest.Mock).mockResolvedValue(mockResponse);

        const { result } = renderHook(() => useGetQuery('test'));


        expect(result.current.loading).toBeTruthy()

        await waitFor(()=>{
            expect(result.current.loading).toBeFalsy()
        });


        expect(result.current.products).toEqual([
            {
                id: '1',
                image: 'http://example.com/image1.jpg',
                price: 100,
                detail: 'Product 1',
                stateOfTheProduct: 'new',
                city: 'Bogotá',
                hasShippingIcon: true,
            },
        ]);
        expect(result.current.loading).toBe(false);
        expect(result.current.error).toBe(null);
    });

    it('should handle error', async () => {
        const errorMessage = 'Network Error';
        (msQuery as jest.Mock).mockRejectedValue(new Error(errorMessage));

        const { result } = renderHook(() => useGetQuery('test'));

        expect(result.current.loading).toBeTruthy()

        await waitFor(()=>{
            expect(result.current.loading).toBeFalsy()
        });

        expect(result.current.products).toEqual([]);
        expect(result.current.loading).toBe(false);
        expect(result.current.error).toBe(errorMessage);
    });
});