/// <reference types="cypress" />

describe('employees API', () => {
  it('verify request returns JSON', () => {
    cy.request('http://localhost:3000/employees').its('headers').its('content-type').should('include', 'application/json')
  })

  it('verify the request returns the correct status code', () => {
    cy.request('http://localhost:3000/employees').its("status").should('be.equal', 200)
  })

  it("post a new item", () => {
    cy.request('POST', 'http://localhost:3000/employees', { first_name: 'Matt', last_name: "Zen", email: "MattZen123@gmail.com" }).then
      ((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property('first_name', 'Matt')
        expect(response.body).to.have.property('last_name', 'Zen')
        expect(response.body).to.have.property('email', 'MattZen123@gmail.com')
      })
  })
})
