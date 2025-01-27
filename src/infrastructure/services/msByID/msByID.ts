import { FetchAdapter } from "@/application";
import { IResponseDataByID } from "@/domain";

export const msById = async (id: string): Promise<IResponseDataByID> => {
    const fetchAdapter = new FetchAdapter();
    const baseuRL = "https://api.mercadolibre.com";
    const url = `${baseuRL}/items/${id}`;
    const headers = { "Content-Type": "application/json" };

    try {
        const result = await fetchAdapter.get<IResponseDataByID, typeof headers>({
            url,
            headers,
        });
        return result;
    } catch (error) {
        throw new Error(`[Error] in msById - ${error}`);
    }
};
