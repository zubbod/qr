import { Router } from "../core/dependencies.ts";
import { getAll, create } from '../controllers/info.controller.ts';

const infoRouter: Router = new Router();

infoRouter
  .get('/api/info', getAll)
  .post('/api/info', create);

export { infoRouter };
