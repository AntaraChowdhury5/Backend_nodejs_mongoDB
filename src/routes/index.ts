import express, { IRouter } from 'express';
import EmployeeRoutes from './EmployeeRoutes';
import DepartmentRoutes from './DepartmentRoutes';
import RoleRoutes from './RoleRoutes';
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
  router.use('/emps', new EmployeeRoutes().getRoutes());
  router.use('/dept', new DepartmentRoutes().getRoutes());
  router.use('/role', new RoleRoutes().getRoutes());

  return router;
};

export default routes;
