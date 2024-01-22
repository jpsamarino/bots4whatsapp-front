import { describe, test, expect } from "@jest/globals";
import { fetchHttpClient } from "./httpClient";
import nodeFetch from "node-fetch";
import { HttpRequest } from "./httpClientInterfaces";

describe.skip("verify fetchHttpClient with a real request", () => {
  test("should return a response with status 200", async () => {
    // use fetch from node-fetch to a real request
    (global as any).fetch = nodeFetch;
    const response = await fetchHttpClient({
      url: "https://jsonplaceholder.typicode.com/todos/1",
      method: "get",
    });
    expect(response.statusCode).toBe(200);
  });
});

describe("test fetchHttpClient", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test("should return sucess", async () => {
    const mockJsonResponse = { result: "__mock__" };
    const mockFetch = jest.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: jest.fn().mockResolvedValue(mockJsonResponse),
    });

    global.fetch = mockFetch;

    const requestData: HttpRequest = {
      url: "http://example.com/api/data",
      method: "get",
    };

    const result = await fetchHttpClient(requestData);

    expect(result.statusCode).toBe(200);
    expect(result.body).toEqual(mockJsonResponse);
    expect(mockFetch).toHaveBeenCalledWith(requestData.url, {
      method: requestData.method,
      body: undefined,
      headers: undefined,
    });
  });

  test("should return a erro", async () => {
    const mockFetch = jest.fn().mockResolvedValue({
      ok: false,
      status: 404,
    });

    global.fetch = mockFetch;

    const requestData: HttpRequest = {
      url: "http://example.com/api/data",
      method: "get",
    };

    const result = await fetchHttpClient(requestData);

    expect(result.statusCode).toBe(404);
    expect(result.body).toBeUndefined();
    expect(mockFetch).toHaveBeenCalledWith(requestData.url, {
      method: requestData.method,
      body: undefined,
      headers: undefined,
    });
  });
});
