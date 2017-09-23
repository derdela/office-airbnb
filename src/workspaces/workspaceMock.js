const faker = require('faker')

function workspaceMock () {
  return {
    name: faker.company.companyName(),
    industry: faker.commerce.department(),
    price: faker.commerce.price(),
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

module.exports = { workspaceMock }
