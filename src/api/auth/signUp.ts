import { env } from "@/config/env";
import { fetchHttpClient } from "@/api/protocols/httpClient";
import { HttpResponse } from "@/api/protocols/httpClientInterfaces";

export const signUp = async (
  passwordToken: string,
  remainLogged: boolean,
  urlServer: string = env.LOCALSERVER
): Promise<HttpResponse> => {
  const response = await fetchHttpClient({
    url: `${urlServer}/api/signup`,
    method: "post",
    body: {
      passwordToken,
      remainLogged,
    },
  });
  return response;
};
