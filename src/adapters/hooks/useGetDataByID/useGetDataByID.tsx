import { useState, useEffect } from "react";

import { ICardProduct, IResponseTransformDataByID } from "@/domain";
import { getDataByID } from "@/infrastructure/services";

export const useGetDataByID = (id?: string) => {
    const [data, setData] = useState<ICardProduct | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (id) {
            setLoading(true);
            getDataByID(id)
                .then(({ item }: IResponseTransformDataByID) => {
                    const dataByID: ICardProduct = {
                        image: item.picture,
                        alt: item.title,
                        state: `${item.condition} - ${item.sold_quantity} vendidos`,
                        title: item.title,
                        price: item.price.amount,
                        description: item.description,
                    };
                    setData(dataByID);
                    setLoading(false);
                })
                .catch((error) => {
                    setError(error.message);
                    setLoading(false);
                });
        }
    }, [id]);

    return { data, loading, error };
};
