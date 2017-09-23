const Koa = require('koa')
const router = require('koa-router')()
const workplaces = require('./workplaces')

const app = new Koa()

router.get('/api/workspaces', async ctx => {
  ctx.body = await workplaces.all()
})

app
    .use(router.routes())
    .use(router.allowedMethods())

app.use(require('koa-static')('./public'))

module.exports = { app }
