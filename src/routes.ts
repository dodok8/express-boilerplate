import Router from '@koa/router';

const routes = new Router();

routes.get('/', async function (ctx) {
  ctx.header['content-type'] = 'application/json';
  ctx.body = { status: 200, message: 'hi' };
  return ctx;
});

export default routes;
