describe("post component", function () {
    beforeEach(function() {
      cy.fixture('allPostsResponse.json').as('allPostsResponse')
      cy.server()
      cy.route('/api/v1/posts', '@allPostsResponse')
      cy.visit('localhost:3000')
    })
      it("shows a single post", function () {
    
        cy.get('.post-message').contains('Yo bruh!.')
        cy.get('.post-username').contains('Magzimillion')
        cy.get('.post-created_at').contains("2020-11-25T10:40:45.118Z")
      })
    })