import { getDataByID } from "./getDataByID";
import { msById } from "../msByID/msByID";
import { msDescriptionByID } from "../msDescriptionByID/msDescriptionByID";
import { author } from "@/adapters";

jest.mock("../msByID/msByID");
jest.mock("../msDescriptionByID/msDescriptionByID");

describe("getDataByID", () => {
    const id = "test-id";

    const mockMsByIDResponse = {
        id: "test-id",
        title: "Test Product",
        price: 100,
        currency_id: "USD",
        base_price: 0.5,
        thumbnail: "http://example.com/image.jpg",
        condition: "new",
        shipping: { free_shipping: true },
        initial_quantity: 20,
    };

    const mockMsDescriptionByIDResponse = {
        plain_text: "This is a detailed description.",
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should fetch and transform data successfully", async () => {

        (msById as jest.Mock).mockResolvedValue(mockMsByIDResponse);
        (msDescriptionByID as jest.Mock).mockResolvedValue(
            mockMsDescriptionByIDResponse
        );

        const result = await getDataByID(id);

        expect(result).toEqual({
            author,
            item: {
                id: "test-id",
                title: "Test Product",
                price: {
                    amount: 100,
                    currency: "USD",
                    decimals: 0.5,
                },
                picture: "http://example.com/image.jpg",
                condition: "new",
                free_shipping: true,
                description: "This is a detailed description.",
                sold_quantity: 20,
            },
        });


        expect(msById).toHaveBeenCalledWith(id);
        expect(msDescriptionByID).toHaveBeenCalledWith(id);
    });

    it("should throw an error if msById fails", async () => {
        (msById as jest.Mock).mockRejectedValue(new Error("msById failed"));

        await expect(getDataByID(id)).rejects.toThrow(
            "[Error] in getDataByID - Error: msById failed"
        );

        expect(msById).toHaveBeenCalledWith(id);
        expect(msDescriptionByID).not.toHaveBeenCalled();
    });

    it("should throw an error if msDescriptionByID fails", async () => {
        (msById as jest.Mock).mockResolvedValue(mockMsByIDResponse);
        (msDescriptionByID as jest.Mock).mockRejectedValue(
            new Error("msDescriptionByID failed")
        );

        await expect(getDataByID(id)).rejects.toThrow(
            "[Error] in getDataByID - Error: msDescriptionByID failed"
        );

        expect(msById).toHaveBeenCalledWith(id);
        expect(msDescriptionByID).toHaveBeenCalledWith(id);
    });
});
