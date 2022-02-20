import { Controller, GET } from "fastify-decorators";
import { FastifyRequest } from "fastify";
import { Pageable, pageableSchema} from "../models/pageable";
import { itemSchema, Item } from "../models/item";
import { Page, pageSchema } from "../models/page";
import { Data, dataSchema } from "../models/data";

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
  async listData(
    request: FastifyRequest<{ Querystring: Pageable }>
  ): Promise<Page> {
    const { page } = request.query;

    // To not response super fast
    //await timeout(1_500);

    const startIndex = page * pageSize;
    const content = data.slice(startIndex, startIndex + pageSize);
    return { content, page, totalPages: data.length / pageSize };
  }

  @GET("/select", {
    schema: { querystring: itemSchema, response: { 200: dataSchema } },
  })
  async selectItem(
    request: FastifyRequest<{ Querystring: Item }>
  ): Promise<Data> {
    const { id } = request.query;

    const content = data[id - 1];
    return { id: content.id, value: content.value, name: content.name };
  }
}
