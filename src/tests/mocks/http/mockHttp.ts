import { HttpRequest } from "@/api/protocols/httpClientInterfaces";
import { faker } from "@faker-js/faker";

export const mockHttpResponse = (): any => ({
  data: { veic: faker.vehicle.type() },
  status: faker.number.int({ min: 200, max: 500 }),
});

export const mockHttpRequest = (): HttpRequest => ({
  url: faker.internet.url(),
  method: faker.helpers.arrayElement(["get", "post", "put", "delete"]),
  body: { veic: faker.vehicle.type() },
  headers: { "x-access-token": faker.string.uuid() },
});
