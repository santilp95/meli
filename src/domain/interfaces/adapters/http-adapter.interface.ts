export interface IDataReq<Body, Headers> {
    url: string;
    body: Body;
    headers: Headers;
}
export interface IDataReqGet<Headers> {
    url: string;
    headers: Headers;
}

export abstract class AbstractHttpAdapter {
    abstract post<T, Body, Headers>(data: IDataReq<Body, Headers>): Promise<T>;
    abstract put<T, Body, Headers>(data: IDataReq<Body, Headers>): Promise<T>;
    abstract get<T, Headers>(data: IDataReqGet<Headers>): Promise<T>;
}
