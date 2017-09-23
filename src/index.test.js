import test from 'ava'
import supertest from 'supertest'
import * as faker from 'faker'
import * as jwt from 'jsonwebtoken'
import { app } from './http'
import { workspaceMock } from './workspaces/workspaceMock'

const request = supertest(app.listen())

test('GET /api/workspaces', async t => {
  const result = await request.get('/api/workspaces').expect(200)

  t.true(Array.isArray(result.body))
})

test('POST /api/workspaces', async t => {
  const workspace = workspaceMock()

  const result = await request.post('/api/workspaces').send(workspace).expect(200)

  t.deepEqual(result.body, workspace)
})

test('persist new workspace', async t => {
  const workspace = workspaceMock()

  await request.post('/api/workspaces').send(workspace).expect(200)

  const { body } = await request.get('/api/workspaces').expect(200)

  const foundWorkspace = body.filter(x => x.name === workspace.name)
  t.is(foundWorkspace.length, 1)
  t.deepEqual(foundWorkspace[0], workspace)
})

test('book a desk', async t => {
  const workspaceId = faker.random.uuid()
  const name = faker.name.firstName()
  const from = new Date()
  const to = faker.date.future()

  const { body } = await request.post(`/api/workspaces/${workspaceId}/book`).send({ name, from, to }).expect(200)
  const decoded = jwt.verify(body.ticket, 'secret')

  t.is(decoded.workspaceId, workspaceId)
  t.is(decoded.name, name)
  t.is(decoded.from, from.toISOString())
  t.is(decoded.to, to.toISOString())
})
