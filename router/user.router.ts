import { Router } from '../core/dependencies.ts';
import { UserController } from '../controllers/user.controller.ts';

const userRouter: Router = new Router();

userRouter
.get('/api/users', UserController.getAll)
.post('/api/user', UserController.createUser)

export { userRouter };
