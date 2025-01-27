import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import { FetchAdapter } from "./fetchAdapter";

describe("FetchAdapter", () => {
    let fetchAdapter: FetchAdapter;
    let mock: MockAdapter;

    beforeEach(() => {
        fetchAdapter = new FetchAdapter();
        mock = new MockAdapter(axios);
    });

    afterEach(() => {
        mock.reset();
    });

    it("should make a POST request and return the response data", async () => {
        const url = "/test-post";
        const body = { key: "value" };
        const headers = { "Content-Type": "application/json" };
        const responseData = { success: true };

        mock.onPost(url, body).reply(200, responseData);

        const response = await fetchAdapter.post<
            typeof responseData,
            typeof body,
            typeof headers
        >({
            url,
            body,
            headers,
        });

        expect(response).toEqual(responseData);
    });

    it("should make a PUT request and return the response data", async () => {
        const url = "/test-put";
        const body = { key: "value" };
        const headers = { "Content-Type": "application/json" };
        const responseData = { success: true };

        mock.onPut(url, body).reply(200, responseData);

        const response = await fetchAdapter.put<
            typeof responseData,
            typeof body,
            typeof headers
        >({
            url,
            body,
            headers,
        });

        expect(response).toEqual(responseData);
    });

    it("should make a GET request and return the response data", async () => {
        const url = "/test-get";
        const headers = { "Content-Type": "application/json" };
        const responseData = { success: true };

        mock.onGet(url).reply(200, responseData);

        const response = await fetchAdapter.get<
            typeof responseData,
            typeof headers
        >({
            url,
            headers,
        });

        expect(response).toEqual(responseData);
    });

    it("should throw an error if the POST request fails", async () => {
        const url = "/test-post";
        const body = { key: "value" };
        const headers = { "Content-Type": "application/json" };

        mock.onPost(url, body).reply(500);

        await expect(fetchAdapter.post({ url, body, headers })).rejects.toThrow(
            "[Error] in axios [post] - Error: Request failed with status code 500"
        );
    });

    it("should throw an error if the PUT request fails", async () => {
        const url = "/test-put";
        const body = { key: "value" };
        const headers = { "Content-Type": "application/json" };

        mock.onPut(url, body).reply(500);

        await expect(fetchAdapter.put({ url, body, headers })).rejects.toThrow(
            "[Error] in axios [put] - Error: Request failed with status code 500"
        );
    });

    it("should throw an error if the GET request fails", async () => {
        const url = "/test-get";
        const headers = { "Content-Type": "application/json" };

        mock.onGet(url).reply(500);

        await expect(fetchAdapter.get({ url, headers })).rejects.toThrow(
            "[Error] in axios [get] - Error: Request failed with status code 500"
        );
    });
});
