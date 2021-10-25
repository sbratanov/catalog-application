import { Controller, GET } from "fastify-decorators";
import { FastifyRequest } from "fastify";
import { Pageable, pageableSchema } from "../models/pageable";
import { Page, pageSchema } from "../models/page";
import { Data } from "../models/data";

const timeout = (time: number) => new Promise((res) => setTimeout(res, time));

const data = new Array(1_000_000).fill(null).map(
  (_, index) =>
    ({
      id: index + 1,
      name: `Data ${index}`,
      value: `Value ${index}`,
    } as Data)
);
const pageSize = 10;

@Controller("/data")
export class DataController {
  @GET("/", {
    schema: { querystring: pageableSchema, response: { 200: pageSchema } },
  })
  async getData(
    request: FastifyRequest<{ Querystring: Pageable }>
  ): Promise<Page> {
    const { page } = request.query;

    // To not response super fast
    await timeout(1_500);

    const startIndex = page * pageSize;
    const content = data.slice(startIndex, startIndex + pageSize);
    return { content, page, totalPages: data.length / pageSize };
  }
}
