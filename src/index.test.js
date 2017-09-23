import test from 'ava'
import supertest from 'supertest'
import { app } from './http'

const request = supertest(app.listen())

test('GET /api/workspaces', async t => {
  const result = await request.get('/api/workspaces').expect(200)

  t.true(Array.isArray(result.body))
})
