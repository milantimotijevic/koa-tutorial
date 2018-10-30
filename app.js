const koa = require('koa');
const app = new koa();

app.use(require('./api/product'));
app.listen(3000, () => {
  console.log('Prismatic Core: Online');
});

require('./repository/repository');