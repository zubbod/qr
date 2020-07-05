import { Router } from "../core/dependencies.ts";
import { InfoController } from '../controllers/info.controller.ts';

const infoRouter: Router = new Router();

infoRouter
  .post('/api/info', InfoController.create)
  .get('/api/info', InfoController.getAll)

export { infoRouter };
