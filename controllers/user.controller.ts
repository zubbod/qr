import { Context, Status } from '../core/deps.ts'
import { Users } from '../db/users.db.ts';

export class UserController {
  static getAll = async (ctx: Context) => {
    const users = await Users.all()
    ctx.response.status = Status.OK;
    ctx.response.body = { users }
  }

  static createUser = async (ctx: Context) => {
    const { value } = await ctx.request.body();
  }
}