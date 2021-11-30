import Router from '@koa/router';

const testRoutes = new Router();

testRoutes.get('/:text?', async function (ctx) {
  ctx.header['content-type'] = 'application/json';
  if (ctx.params.text === undefined) {
    ctx.status = 200;
    // optional 필드인 것을 path-to-regrex가 잡기 때문에 이게 없어도 Http 통신 자체는 200은 가나, koa 내부에서는 200으로 처리된 상태이기 때문에 따로 명시적으로 적어줌.
  }
  ctx.body = {
    status: ctx.status,
    message: ctx.params.text,
  };
  return ctx;
});

export default testRoutes;
