const Koa = require('koa')
const router = require('koa-router')()
const bodyparser = require('koa-bodyparser')
const workspaces = require('./workspaces')
const districts = require('./data/districts')

const app = new Koa()

router.get('/api/workspaces', async ctx => {
  ctx.body = await workspaces.cluster()
})

router.get('/api/workspaces/:id', async ctx => {
  ctx.body = await workspaces.get(ctx.params.id)
})

router.post('/api/workspaces', bodyparser(), async ctx => {
  ctx.body = await workspaces.create(ctx.request.body)
})

router.get('/api/districts', async ctx => {
  ctx.body = districts
})

router.post('/api/workspaces/:id/book', bodyparser(), async ctx => {
  const data = ctx.request.body
  data.workspaceId = ctx.params.id
  ctx.body = await workspaces.book(data)
})

router.get('/api/districts', bodyparser(), async ctx => {
  ctx.body = require('./data/districts.json')
})

app
    .use(router.routes())
    .use(router.allowedMethods())

app.use(require('koa-static')('./public'))

module.exports = { app }
