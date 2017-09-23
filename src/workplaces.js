const faker = require('faker')

function all () {
  return Promise.resolve([workspaceMock(), workspaceMock(), workspaceMock()])
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
