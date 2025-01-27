import { transformQuery } from "./transformQuery";
import { IResponseQuery, IResponseTransformQuery } from "@/domain";
import { author } from "../name";

describe("transformQuery", () => {
    it("transforms the query result correctly", () => {
        const resultJson = {
            filters: [
                {
                    id: "category",
                    values: [
                        {
                            path_from_root: [{ name: "Electronics" }, { name: "Audio" }],
                        },
                    ],
                },
            ],
            results: [
                {
                    id: "1",
                    title: "Product 1",
                    currency_id: "USD",
                    price: 100,
                    thumbnail: "http://example.com/image1.jpg",
                    condition: "new",
                    shipping: {
                        free_shipping: true,
                    },
                },
                {
                    id: "2",
                    title: "Product 2",
                    currency_id: "USD",
                    price: 200,
                    thumbnail: "http://example.com/image2.jpg",
                    condition: "used",
                    shipping: {
                        free_shipping: false,
                    },
                },
            ],
        };

        const expected: IResponseTransformQuery = {
            author,
            categories: ["Electronics", "Audio"],
            items: [
                {
                    id: "1",
                    title: "Product 1",
                    price: {
                        currency: "USD",
                        amount: 100,
                        decimals: 0,
                    },
                    picture: "http://example.com/image1.jpg",
                    condition: "new",
                    free_shipping: true,
                },
                {
                    id: "2",
                    title: "Product 2",
                    price: {
                        currency: "USD",
                        amount: 200,
                        decimals: 0,
                    },
                    picture: "http://example.com/image2.jpg",
                    condition: "used",
                    free_shipping: false,
                },
            ],
        };

        const result = transformQuery(resultJson as IResponseQuery);
        expect(result).toEqual(expected);
    });
});
