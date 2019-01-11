/// <reference types="Cypress" />

context('Homepage', () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it('has the correct page title', () => {
    cy.title().should('match', /^CypressIoRailsDemo \| Homepage/)
  })

  it('has a <h1> title', () => {
    cy.get("#title").contains("Cypress rails demo")
    cy.get(".main-body").contains(/demo/)
  })

  it('p body includes "demo"', () => {
    cy.get(".main-body").contains("demo")
  })

  it("has a button to view posts", () => {
    cy.get(".button").contains("View Posts").click()
    cy.url().should('match', /posts/)
  })
})
