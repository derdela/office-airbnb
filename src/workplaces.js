const faker = require('faker')
const { range } = require('lodash')

function all () {
  return Promise.resolve(range(100).map(workspaceMock))
}

function workspaceMock () {
  return {
    name: faker.company.companyName(),
    industry: faker.commerce.department(),
    accessibility: faker.random.boolean(),
    dogs: faker.random.boolean(),
    address: {
      street: faker.address.streetName(),
      zipCode: faker.address.zipCode(),
      city: faker.address.city(),
      country: faker.address.country()
    },
    features: {
      drinks: ['Coffee', 'Soft Drinks', 'Beer'],
      snacks: ['Chochlate', 'Fruits'],
      meetingRooms: 2
    },
    desks: [{
      name: 'standard',
      type: faker.helpers.randomize(['Open Space', 'Individual Room', 'Shared Room']),
      price: faker.commerce.price(),
      available: faker.random.number()
    }]
  }
}

module.exports = { all }
