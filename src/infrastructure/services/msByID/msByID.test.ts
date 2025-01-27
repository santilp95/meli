import { msById } from './msByID';
import { FetchAdapter } from '../../../application/utils/fetch/fetchAdapter';



describe('msById', () => {
    const id = 'test';

    const mockResponse = {
        id: 'test',
        title: 'Product 1',
        price: 100,
        thumbnail: 'http://example.com/image1.jpg',
        condition: 'new',
        shipping: {
            free_shipping: true,
        },
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should fetch data and get the id result', async () => {

        jest.spyOn(FetchAdapter.prototype, 'get').mockResolvedValue(mockResponse)

        const result = await msById(id);
        expect(result).toEqual(mockResponse);
    });


    it('should throw an error if the fetch fails', async () => {
        jest.spyOn(FetchAdapter.prototype, 'get').mockRejectedValue(new Error('test error'));

        await expect(msById(id)).rejects.toThrow('test error');
    });
});