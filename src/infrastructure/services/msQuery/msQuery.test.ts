import { msQuery } from './msQuery';

import { FetchAdapter } from '../../../application/utils/fetch/fetchAdapter';
import { transformQuery } from '../../../application/utils/transformQuery/transformQuery';

jest.mock('../../../application/utils/fetch/fetchAdapter', () => {
    return {
        FetchAdapter: jest.fn().mockImplementation(() => {
            return {
                __esModule: true,
                get: jest.fn(),
            };
        }),
    };
});

jest.mock('../../../application/utils/transformQuery/transformQuery', () => ({
    __esModule: true,
    transformQuery: jest.fn(),
}));

describe('msQuery', () => {
    const query = 'test';

    const mockResponse = {
        filters: [],
        results: [],
    };

    it('should fetch data and transform the query result', async () => {
        const transformedResponse = { transformed: true };

        const fetchAdapterInstance = new FetchAdapter();
        (fetchAdapterInstance.get as jest.Mock).mockReturnValue(mockResponse);
        (transformQuery as jest.Mock).mockReturnValue(transformedResponse);

        const result = await msQuery(query);

        expect(result).toEqual(transformedResponse);
    });


    it('should throw an error if the fetch fails', async () => {
        const fetchAdapterInstance = new FetchAdapter();
        (transformQuery as jest.Mock).mockRejectedValue(new Error('test error'));
        (fetchAdapterInstance.get as jest.Mock).mockRejectedValue(new Error('test error'));

        await expect(msQuery(query)).rejects.toThrow('test error');
    });

});