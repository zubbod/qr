import { users } from './../db/db.ts';
import { key } from './../jwt/key.ts';
import { Context, Payload, Jose, Status, setExpiration, makeJwt } from "../core/deps.ts";

export class AuthController {

  static login = async (ctx: Context) => {

    const header: Jose = {
      alg: 'HS256',
      typ: 'JWT'
    }

    if (!ctx.request.hasBody) {
      ctx.response.status = Status.BadRequest;
      ctx.response.body = { message: 'no user to authenticate' };
      return;
    }

    const { value } = await ctx.request.body();

    for (const user of users) {
      if (user.name === value.name && user.password === value.password) {

        const payload: Payload = {
          iss: user.name,
          exp: setExpiration(new Date().getDate() + 60000)
        };

        const jwt = makeJwt({ key, header, payload });

        if (jwt) {
          ctx.response.status = Status.OK;
          ctx.response.body = {
            ...user, jwt
          }
        } else {
          ctx.response.status = 500;
          ctx.response.body = { message: 'Internal server error' }
          return;
        }
        return;
      }

      ctx.response.status = Status.UnprocessableEntity;
      ctx.response.body = { message: 'Invalid username or password' };
    }
  }
}