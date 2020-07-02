import { Context, Status } from '../core/dependencies.ts'
import { users } from './../db/db.ts';

export class UserController {
  static getAll = (ctx: Context) => {
    ctx.response.status = Status.OK;
    ctx.response.body = { users }
  }

  static createUser = () => {}
}