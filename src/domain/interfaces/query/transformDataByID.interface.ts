import { IAuthor, IItem } from "./transformQuery.interface";

export interface  IItemTransform extends IItem{
    sold_quantity: number;
    description: string;
}

export interface IResponseTransformDataByID {
    author: IAuthor;
    item: IItemTransform;
}