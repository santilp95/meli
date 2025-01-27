import axios, { AxiosHeaders, AxiosInstance } from "axios";

import { AbstractHttpAdapter, IDataReq, IDataReqGet } from "@/domain";

export class FetchAdapter implements AbstractHttpAdapter {
    private readonly axios: AxiosInstance = axios;

    async post<Response, Body, Headers>({
        body,
        headers,
        url,
    }: IDataReq<Body, Headers>): Promise<Response> {
        try {
            const { data } = await this.axios.post<Response>(url, body, {
                headers: headers as AxiosHeaders,
            });
            return data;
        } catch (error) {
            throw new Error(`[Error] in axios [post] - ${error}`);
        }
    }

    async put<Response, Body, Headers>({
        body,
        headers,
        url,
    }: IDataReq<Body, Headers>): Promise<Response> {
        try {
            const { data } = await this.axios.put<Response>(url, body, {
                headers: headers as AxiosHeaders,
            });
            return data;
        } catch (error) {
            throw new Error(`[Error] in axios [put] - ${error}`);
        }
    }

    async get<Response, Headers>({
        headers,
        url,
    }: IDataReqGet<Headers>): Promise<Response> {
        try {
            const { data } = await axios.get<Response>(url, {
                headers: headers as AxiosHeaders,
            });
            return data;
        } catch (error) {
            throw new Error(`[Error] in axios [get] - ${error}`);
        }
    }
}
