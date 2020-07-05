import { Router } from '../core/dependencies.ts';
import { AuthController } from '../controllers/auth.controller.ts';

const authRouter = new Router();

authRouter
  .post('/api/auth', AuthController.login)

export { authRouter }