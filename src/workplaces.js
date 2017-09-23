const faker = require('faker')
const { range } = require('lodash')

function all () {
  return Promise.resolve(range(100).map(workspaceMock))
}

function workspaceMock () {
  return {
    name: faker.company.companyName(),
    price: faker.commerce.price(),
    address: {
      city: faker.address.city()
    },
    desks: {
      available: faker.random.number()
    }
  }
}

module.exports = { all }
