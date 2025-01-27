import { FetchAdapter, transformQuery } from "@/adapters";
import { IResponseQuery, IResponseTransformQuery } from "@/domain";

export const msQuery = async (
    query: string
): Promise<IResponseTransformQuery> => {
    const fetchAdapter = new FetchAdapter();
    const baseuRL = "https://api.mercadolibre.com";
    const url = `${baseuRL}/sites/MLA/search?q=${query}`;
    const headers = { "Content-Type": "application/json" };

    try {
        const result = await fetchAdapter.get<IResponseQuery, typeof headers>({
            url,
            headers,
        });
        const response = transformQuery(result);
        return response;
    } catch (error) {
        throw new Error(`[Error] in msQuery - ${error}`);
    }
};
