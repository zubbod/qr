import { Application, ListenOptionsTls, config } from './core/dependencies.ts';
import { userRouter } from "./router/user.router.ts";
import { infoRouter } from './router/info.router.ts';
import { auth } from './jwt/auth.ts';
import { authRouter } from './router/auth.router.ts';

const app = new Application();

const { DEV_PORT, HOST_NAME, CERT_FILE, CERT_KEY, PORT } = config();

const tlsOption: ListenOptionsTls = {
  hostname: HOST_NAME,
  certFile: CERT_FILE,
  keyFile: CERT_KEY,
  port: parseInt(PORT, 10),
  secure: true,
}

// const serverOptions = parseInt(DEV_PORT, 10);

// console.log('server starting on port 4200');

app.use(authRouter.routes());
app.use(auth);
app.use(infoRouter.routes());
app.use(userRouter.routes());

app.listen(tlsOption);