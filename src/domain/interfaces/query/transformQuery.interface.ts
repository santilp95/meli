export interface IAuthor {
    name: string;
    lastName: string;
}

export interface IPrice {
    currency: string;
    amount: number;
    decimals: number;
}

export interface IItem {
    id: string;
    title: string;
    price: IPrice;
    picture: string;
    condition: string;
    free_shipping: boolean;
}

export interface IResponseTransformQuery {
    author: IAuthor;
    categories: string[] | undefined;
    items: IItem[];
}