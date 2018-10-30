const router = require('koa-router')();

router.get('/product', ctx => ctx.body = ['apples', 'pears', 'world peace']);

router.get('/hipsterendpoint', (ctx, next) => {
  const name = ctx.request.headers['name'];
  if(name === 'pera') {
    ctx.throw(400, 'what the....', 'omg');
  }
  console.log('first handler');
  ctx.body = 'Hello!';
});

module.exports = router.routes();
