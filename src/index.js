const Koa = require('koa')

const app = new Koa()

app.use(require('koa-static')('./public'))

app.listen(3000)
