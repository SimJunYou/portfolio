const Koa = require('koa');
const KoaRouter = require('koa-router');
const logger = require('koa-logger');
const bodyParser = require('koa-body');

const app = new Koa();
const router = new KoaRouter();

app.use(logger());

router.get('getPage', '/', (ctx) => {
    ctx.body = 'Hello world!';
});

router.post('postPage', '/', bodyParser(), (ctx) => {
    ctx.body = `Request Body: ${JSON.stringify(ctx.request.body)}\n`;
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);
