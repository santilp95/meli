import { useState, useEffect } from 'react';

import { msQuery } from '@/infrastructure/services';
import { IProduct, IResponseTransformQuery } from '@/domain';

/**
 * get data by query
 */
export const useGetQuery = (search?: string) => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (search) {
            setLoading(true);
            msQuery(search)
                .then((response: IResponseTransformQuery) => {
                    const products: IProduct[] = response.items.map((item) => ({
                        id: item.id,
                        image: item.picture,
                        price: item.price.amount,
                        detail: item.title,
                        stateOfTheProduct: item.condition,
                        city: 'Bogotá',
                        hasShippingIcon: item.free_shipping,
                    }));
                    setProducts(products);
                    setLoading(false);
                })
                .catch((error) => {
                    setError(error.message);
                    setLoading(false);
                });
        }
    }, [search]);

    return { products, loading, error };
};