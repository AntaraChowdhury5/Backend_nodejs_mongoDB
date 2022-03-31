import express, { IRouter } from 'express';
import UserRoutes from './UserRoutes';
const router = express.Router();


/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = (): IRouter => {
  router.get('/', (req, res) => {
    res.json('Welcome');
  });
  router.use('/users', new UserRoutes().getRoutes());

  return router;
};

export default routes;
