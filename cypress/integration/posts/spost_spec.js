describe("the post component", function (){
    it("shows a post", function () {
      cy.visit('localhost:3000')
  
      cy.get('.post-message').contains('Yo bruh!.')
      cy.get('.post-username').contains('Magzimillion')
    })
  })