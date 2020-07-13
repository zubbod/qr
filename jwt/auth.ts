import { Context, Status, validateJwt } from '../core/deps.ts';
import { key } from './key.ts';

const auth = async (ctx: Context, next: any) => {
  const headers = ctx.request.headers;
  const authorization = headers.get('Authorization');

  if (!authorization) {
    noAuth(ctx);
    return;
  }

  const jwt = authorization.split(' ')[1];

  if (!jwt) {
    noAuth(ctx);
    return;
  }

  if (await validateJwt(jwt, key)) {
    await next();
    return;
  }

  ctx.response.status = 401;
  ctx.response.body = { message: 'Invalid jwt token' };
}

const noAuth = (ctx: Context) => {
  ctx.response.status = Status.Unauthorized;
}

export { auth }