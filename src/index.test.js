import test from 'ava'
import supertest from 'supertest'
import { app } from './http'
import { includes } from 'lodash'
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
