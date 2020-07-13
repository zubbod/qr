import { Router } from '../core/deps.ts';
import { AuthController } from '../controllers/auth.controller.ts';

const authRouter = new Router();

authRouter
  .post('/api/auth', AuthController.login)

export { authRouter }