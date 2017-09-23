const faker = require('faker')

const districts = require('../data/districts.json');

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
      district: districts[Math.floor(Math.random()*districts.length)].name,
      city: 'Berlin',
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
