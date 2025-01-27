import { msQuery } from "./msQuery";
import { FetchAdapter } from "../../../application/utils/fetch/fetchAdapter";
import { transformQuery } from "../../../application/utils/transformQuery/transformQuery";

jest.mock("../../../application/utils/transformQuery/transformQuery", () => ({
    __esModule: true,
    transformQuery: jest.fn(() => ({ transformed: true })),
}));

describe("msQuery", () => {
    const query = "test";

    const mockResponse = {
        filters: [],
        results: [],
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should fetch data and transform the query result", async () => {
        const transformedResponse = { transformed: true };
        const getSpy = jest
            .spyOn(FetchAdapter.prototype, "get")
            .mockResolvedValue(mockResponse);
        (transformQuery as jest.Mock).mockReturnValue(transformedResponse);

        const result = await msQuery(query);

        expect(result).toEqual(transformedResponse);

        getSpy.mockRestore();
    });

    it("should throw an error if the fetch fails", async () => {
        const getSpy = jest
            .spyOn(FetchAdapter.prototype, "get")
            .mockRejectedValue(new Error("test error"));

        await expect(msQuery(query)).rejects.toThrow(
            "[Error] in msQuery - Error: test error"
        );

        getSpy.mockRestore();
    });
});
