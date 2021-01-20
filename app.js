const Koa = require('koa');
const KoaRouter = require('koa-router');
const logger = require('koa-logger');
const bodyParser = require('koa-body');

const serve = require('koa-static');
const mount = require('koa-mount');
const path = require('path');

const app = new Koa();
const router = new KoaRouter();

// Serve the static page
const staticPages = new Koa();
staticPages.use(serve(path.join(__dirname, '/client/dist')));
app.use(mount('/', staticPages));

app.use(logger());

router.get('getPage', '/', (ctx) => {
    console.log(`Received: ${ctx.request.body}`);
});

router.post('postPage', '/', bodyParser(), (ctx) => {
    console.log(`Received: ${ctx.request.body}`);
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);
