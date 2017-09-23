const Koa = require('koa')
const router = require('koa-router')()

const app = new Koa()

router.get('/api', ctx => {
  ctx.body = { msg: 'hello world' }
})

app
    .use(router.routes())
    .use(router.allowedMethods())

app.use(require('koa-static')('./public'))

module.exports = { app }
