import test from 'ava'
import supertest from 'supertest'
import { app } from './http'

const request = supertest(app.listen())

test('hello world test', async t => {
  await request.get('/api')
        .expect(200, { msg: 'hello world' })
  t.pass()
})
