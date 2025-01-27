import { FetchAdapter } from "@/application";
import { IResponseDescription } from "@/domain";

export const msDescriptionByID = async (id: string) => {
    const fetchAdapter = new FetchAdapter();
    const baseuRL = "https://api.mercadolibre.com";
    const url = `${baseuRL}/items/${id}/description`;
    const headers = { "Content-Type": "application/json" };

    try {
        const result = await fetchAdapter.get<IResponseDescription, typeof headers>({
            url,
            headers,
        });
        return result;
    } catch (error) {
        throw new Error(`[Error] in msDescriptionByID - ${error}`);
    }
}