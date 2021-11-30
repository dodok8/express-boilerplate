import Router from '@koa/router';
import testRoutes from './test';

const routes = new Router();

routes.get('/', async function (ctx) {
  ctx.body = 'Hello Koa';
  return ctx;
});

routes.use('/test', testRoutes.routes(), testRoutes.allowedMethods());

export default routes;
