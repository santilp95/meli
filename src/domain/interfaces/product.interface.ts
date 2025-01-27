export interface IProduct {
    id: string;
    image: string;
    price: number;
    detail: string;
    stateOfTheProduct: string;
    city: string;
    hasShippingIcon: boolean;
}

export interface ICardProduct {
    image: string,
    alt: string,
    state: string,
    title: string,
    price: number,
    description: string,
}