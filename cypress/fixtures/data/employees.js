var faker = require('faker')

function generateEmployees () {
  var employees = []
  for (var id = 0; id < 50; id++) {
    employees.push({
      "id": id,
      "first_name": faker.name.firstName(),
      "last_name": faker.name.lastName(),
      "email": faker.internet.email()
    })
  }
  return { "employees": employees }
}
module.exports = generateEmployees
