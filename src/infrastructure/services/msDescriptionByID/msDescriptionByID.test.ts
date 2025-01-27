import { msDescriptionByID } from './msDescriptionByID';
import { FetchAdapter } from '@/application';
import { IResponseDescription, Snapshot } from '@/domain';

describe('msDescriptionByID', () => {
    const id = 'test-id';
    const mockResponse: IResponseDescription = {
        text: 'This is a product description',
        plain_text: 'This is a plain product description',
        date_created: new Date(),
        last_updated: new Date(),
        snapshot: ('s' as unknown as Snapshot)
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should fetch the description successfully', async () => {
        const getSpy = jest
            .spyOn(FetchAdapter.prototype, 'get')
            .mockResolvedValue(mockResponse);

        const result = await msDescriptionByID(id);

        expect(result).toEqual(mockResponse);
        expect(getSpy).toHaveBeenCalledWith({
            url: `https://api.mercadolibre.com/items/${id}/description`,
            headers: { 'Content-Type': 'application/json' },
        });

        getSpy.mockRestore();
    });

    it('should throw an error if the fetch fails', async () => {
        const getSpy = jest
            .spyOn(FetchAdapter.prototype, 'get')
            .mockRejectedValue(new Error('test error'));

        await expect(msDescriptionByID(id)).rejects.toThrow(
            '[Error] in msDescriptionByID - Error: test error'
        );

        expect(getSpy).toHaveBeenCalledWith({
            url: `https://api.mercadolibre.com/items/${id}/description`,
            headers: { 'Content-Type': 'application/json' },
        });

        getSpy.mockRestore();
    });
});