/// <reference types="Cypress" />

context('Posts#show', () => {
  beforeEach(() => {
    cy.visit("posts")
  })

  // https://on.cypress.io/interacting-with-elements

  it('has a title', () => {
    cy.contains("Listing posts")
    cy.contains("Title")
    cy.contains("Body")
    cy.contains("Author")
  })
})
