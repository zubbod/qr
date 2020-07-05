import { Router } from "../core/dependencies.ts";
import { InfoController } from '../controllers/info.controller.ts';

const infoRouter: Router = new Router();

infoRouter
  .get('/api/info', InfoController.getAll)
  .post('/api/info', InfoController.create);

export { infoRouter };
