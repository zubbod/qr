import { Application, ListenOptionsTls, config } from './core/deps.ts';
import { userRouter } from "./router/user.router.ts";
import { infoRouter } from './router/info.router.ts';
import { auth } from './jwt/auth.ts';
import { authRouter } from './router/auth.router.ts';

const app = new Application();

const { DEV_PORT } = config();

const port = parseInt(DEV_PORT);

console.log(`server starting on port ${DEV_PORT}`);

app.use(authRouter.routes());
app.use(infoRouter.routes());
app.use(userRouter.routes());
app.use(auth);

app.listen({ port });