const Koa = require('koa')
const router = require('koa-router')()
const bodyparser = require('koa-bodyparser')
const workplaces = require('./workspaces')

const app = new Koa()

router.get('/api/workspaces', async ctx => {
  ctx.body = await workplaces.all()
})

router.get('/api/workspaces/cluster', async ctx => {
  ctx.body = await workplaces.cluster()
})

router.post('/api/workspaces', bodyparser(), async ctx => {
  ctx.body = await workplaces.create(ctx.request.body)
})

app
    .use(router.routes())
    .use(router.allowedMethods())

app.use(require('koa-static')('./public'))

module.exports = { app }
