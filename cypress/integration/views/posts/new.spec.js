/// <reference types="Cypress" />

context('Posts#new', () => {
  beforeEach(() => {
    cy.visit("posts/new")
  })

  it('has a title', () => {
    cy.contains("New post")
  })

  it("has the expected form, labels & fields", () => {
    cy.get("form#new_post").within(() => {
      cy.get(".field.title").within(() => {
        cy.get("label").contains("Title")
        cy.get("input#post_title")
      })
      cy.get(".field.body").within(() => {
        cy.get("label").contains("Body")
        cy.get("input#post_body")
      })
      cy.get(".field.author").within(() => {
        cy.get("label").contains("Author")
        cy.get("input#post_author")
      })
    })
  })

  it("happy path", () => {

  })

  it("correctly handles an empty title", () => {
    
  })
})
