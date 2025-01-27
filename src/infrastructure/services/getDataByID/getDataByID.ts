import { author } from "@/adapters";
import { IItemTransform, IResponseTransformDataByID } from "@/domain";
import { msById } from "../msByID/msByID";
import { msDescriptionByID } from "../msDescriptionByID/msDescriptionByID";

export const getDataByID = async (
    id: string
): Promise<IResponseTransformDataByID> => {
    try {
        const resultByID = await msById(id);
        const resultDescriptionByID = await msDescriptionByID(id);

        const item: IItemTransform = {
            id: resultByID.id,
            title: resultByID.title,
            price: {
                amount: resultByID.price,
                currency: resultByID.currency_id,
                decimals: resultByID.base_price,
            },
            picture: resultByID.thumbnail,
            condition: resultByID.condition,
            free_shipping: resultByID.shipping.free_shipping,
            description: resultDescriptionByID.plain_text,
            sold_quantity: resultByID.initial_quantity,
        };

        return {
            author,
            item,
        };
    } catch (error) {
        throw new Error(`[Error] in getDataByID - ${error}`);
    }
};
