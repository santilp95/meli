import { IResponseQuery, IResponseTransformQuery } from "@/domain";
import { author } from "../name";

export const transformQuery = (
    resultJson: IResponseQuery
): IResponseTransformQuery => {
    const categories = resultJson.filters
        .find((filter) => filter.id === "category")
        ?.values[0]?.path_from_root?.map((category) => category.name);

    const items = resultJson.results.map((result) => ({
        id: result.id,
        title: result.title,
        price: {
            currency: result.currency_id,
            amount: result.price,
            decimals: 0,
        },
        picture: result.thumbnail,
        condition: result.condition,
        free_shipping: result.shipping.free_shipping,
    }));
    return {
        author,
        categories,
        items,
    };
};
