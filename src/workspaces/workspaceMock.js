const faker = require('faker')
const districts = require('../data/districts.json')

function workspaceMock () {
  return {
    id: '1',
    name: faker.company.companyName(),
    industry: faker.commerce.department(),
    price: faker.commerce.price(),
    accessibility: faker.random.boolean(),
    dogs: faker.random.boolean(),
    address: {
      street: faker.address.streetName(),
      zipCode: faker.address.zipCode(),
      district: districts[Math.floor(Math.random() * districts.length)].name,
      city: 'Berlin'
    },
    features: {
      drinks: ['Coffee', 'Soft Drinks', 'Beer'],
      snacks: ['Chochlate', 'Fruits'],
      meetingRooms: faker.random.boolean()
    },
    desk: {
      name: 'standard',
      type: faker.helpers.randomize([
        'Open Space',
        'Shared Room',
        'Individual Room'
      ]),
      price: faker.commerce.price(),
      available: faker.random.number({min: 5, max: 30})
    }
  }
}

module.exports = { workspaceMock }
