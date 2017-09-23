const Koa = require('koa')

const app = new Koa()

app.use(ctx => {
  ctx.body = {msg: 'hello world'}
})

// app.use(require('koa-static')('./public'))

module.exports = { app }
