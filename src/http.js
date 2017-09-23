const Koa = require('koa')
const router = require('koa-router')()
const bodyparser = require('koa-bodyparser')
const workplaces = require('./workspaces')

const app = new Koa()

router.get('/api/workspaces', async ctx => {
  ctx.body = await workplaces.all()
})

router.post('/api/workspaces', bodyparser(), async ctx => {
  ctx.body = await workplaces.create(ctx.request.body)
})

router.post('/api/workspaces/:id/book', bodyparser(), async ctx => {
  const data = ctx.request.body
  data.workspaceId = ctx.params.id
  ctx.body = await workplaces.book(data)
})

app
    .use(router.routes())
    .use(router.allowedMethods())

app.use(require('koa-static')('./public'))

module.exports = { app }
