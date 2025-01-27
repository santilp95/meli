import { useState, useEffect, useRef } from "react";

import { msQuery } from "@/infrastructure/services";
import { IProduct, IResponseTransformQuery } from "@/domain";

/**
 * get data by query
 */
export const useGetQuery = (search?: string) => {
    const [categories, setCategories] = useState<string[]>([]);
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const hasFetched = useRef<boolean>(false);

    useEffect(() => {
        if (search && !hasFetched.current) {
            setLoading(true);
            msQuery(search)
                .then((response: IResponseTransformQuery) => {
                    const products: IProduct[] = response.items.map((item) => ({
                        id: item.id,
                        image: item.picture,
                        price: item.price.amount,
                        detail: item.title,
                        stateOfTheProduct: item.condition,
                        city: "Bogotá",
                        hasShippingIcon: item.free_shipping,
                    }));
                    setProducts(products);
                    console.log({cat: response.categories});
                    setCategories(response.categories!);
                    setLoading(false);
                    hasFetched.current = true;
                })
                .catch((error) => {
                    setError(error.message);
                    setLoading(false);
                });
        }
    }, [search]);

    return { products, loading, error, categories };
};