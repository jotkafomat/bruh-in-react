describe("log in form", function () {
  it("can log in", function () {
    cy.visit('localhost:3000/login')

    cy.get('.email').type('maggie@loveme.com')
    cy.get('.password').type('password')
  })

  it("can submit a valid form", function () {
    cy.get('form').submit()
  })
})