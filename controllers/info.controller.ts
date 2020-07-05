import { Context, Status } from "../core/dependencies.ts";
import { IInfo } from "../interfaces/info.interface.ts";
import { infodb } from "../db/info.db.ts";
import { InfoDto } from "../models/info.dto.ts";


export async function getAll(ctx: Context) {
  ctx.response.status = Status.OK;
  ctx.response.body = { info: infodb }
}

export async function create(ctx: Context) {
  if (!ctx.request.hasBody) {
    ctx.response.status = Status.BadRequest
    ctx.response.body = { message: 'no data' }
  } else {
    const { value } = await ctx.request.body();
    const infoDto: IInfo = new InfoDto(value.title, value.text);
    infodb.push(infoDto);
    ctx.response.status = Status.Created;
    ctx.response.body = { ...infoDto };
  }
}