// import fetch from "node-fetch";
"use client";
import { CONFIG_FILES } from "next/dist/shared/lib/constants";
import {
  HttpRequest,
  HttpResponse,
  HttpStatusCode,
  HttpClient,
} from "./httpClientInterfaces";

export const fetchHttpClient: HttpClient = async (data: HttpRequest) => {
  try {
    const response = await fetch(data.url, {
      method: data.method,
      body: data.body ? JSON.stringify(data.body) : undefined,
      credentials: "include",
      headers: {
        ...(typeof data.body === "object"
          ? { "Content-Type": "application/json" }
          : {}),
        ...(typeof data.body === "string"
          ? { "Content-Type": "text/plain" }
          : {}),
        ...data.headers,
      },
    });
    // if response is a json convert to json
    const bodyObj: object | undefined =
      response.headers.get("content-type")?.indexOf("json") !== -1
        ? await response.json()
        : undefined;
    const bodyText = bodyObj ? undefined : await response.text();
    if (!response.ok) {
      // Handle non-2xx HTTP status codes
      return {
        statusCode: response.status,
        body: bodyObj || { erro: bodyText } || { erro: "unidentified" },
      } as HttpResponse;
    }

    return {
      statusCode: response.status,
      body: bodyObj,
    };
  } catch (error) {
    // Handle if is not possible covert the response to json and other errors
    return {
      statusCode: HttpStatusCode.badRequest,
      body: { error: "Internal Error" },
    } as HttpResponse;
  }
};
