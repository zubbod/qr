import { Application } from './core/dependencies.ts';
import { userRouter } from "./router/user.router.ts";
import { infoRouter } from './router/info.router.ts';
import { auth } from './jwt/auth.ts';
import { authRouter } from './router/auth.router.ts';

const port = 2300;

const app = new Application();

console.log('server starting on port 2300');

app.use(authRouter.routes());
app.use(auth);
app.use(infoRouter.routes());
app.use(userRouter.routes());

app.listen({ port });