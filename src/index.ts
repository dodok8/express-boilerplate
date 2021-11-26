import cors from '@koa/cors';
import Koa from 'koa';
import koaBody from 'koa-body';
import logger from 'koa-logger';
import routes from './routes';

const app = new Koa();

app.use(koaBody());
app.use(logger());
app.use(routes.routes());
app.use(routes.allowedMethods());
if (process.env.TS_NODE_DEV) {
  app.use(cors({ origin: '*' }));
}

app.listen(4000, () => {
  console.log(
    `[START] ${new Date().toLocaleTimeString('en-US', {
      hour12: false,
    })} Sever is listening to port 4000`
  );
  if (process.env.TS_NODE_DEV)
    console.log(
      `[MODES] ${new Date().toLocaleTimeString('en-US', {
        hour12: false,
      })} Development Mode`
    );
});
