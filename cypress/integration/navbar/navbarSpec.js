describe("navbar", function () {
    it("user can be logged out", function (){
      cy.visit('localhost:3000')

      cy.get('.navbar-container').contains('Logout')
      cy.click('.logout-button')
      cy.get('.email').contains('email')
      cy.get('.password').contains('password')
    })
  })