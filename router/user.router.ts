import { Router } from '../core/deps.ts';
import { UserController } from '../controllers/user.controller.ts';

const userRouter: Router = new Router();

userRouter
.get('/api/users', UserController.getAll)
.post('/api/users', UserController.createUser)

export { userRouter };
