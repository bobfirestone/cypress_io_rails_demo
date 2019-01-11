/// <reference types="Cypress" />

context('Posts#index', () => {
  beforeEach(() => {
    cy.visit("posts")
  })

  it('has the correct page title', () => {
    cy.title().should('match', /^CypressIoRailsDemo \| ((?!I need a page title))  | \w+/)
    // CypressIoRailsDemo | I need a page title
  })

  it('<h1>', () => {
    cy.get("h1.title").contains("Listing posts")
  })

  it('has a table headers', () => {
    cy.get("thead")
      .find("th").each(($el, index, $_list) => {
        if (index === 0) {
          expect($el).to.have.text("Title")
        }else if(index === 1) {
          expect($el).to.have.text("Body")
        } else if (index === 2) {
          expect($el).to.have.text("Author")
        } else {
          expect($el).to.be.empty
        }
      })
  })

  it("has posts", () => {
    cy.get("tbody>tr").each(($el, index, $list) => {

    })
  })
})
