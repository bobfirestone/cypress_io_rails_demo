/// <reference types="Cypress" />

context('Posts#show.json', () => {
  const url = 'posts.json'

  const getItems = () =>
    cy.request(url)
      .its('body')

  it('returns JSON', () => {
    cy.request(url)
      .its('headers')
      .its('content-type')
      .should('include', 'application/json')
  })

  it('loads 2 items', () => {
    getItems()
      .should('have.length', 2)
  })

  it('objects has all expected keys', () => {
    getItems()
      .each(value =>
        expect(value).to.have.all.keys("author", "body", "created_at", "id", "slug", "title", "updated_at", "url")
      )
  })

  it('objects has specific keys - may have more keys', () => {
    getItems()
      .each(value =>
        expect(value).to.include.keys("body", "id", "slug", "title", "url")
      )
  })

  // it('failing example - objects has all expected keys', () => {
  //   getItems()
  //     .each(value =>
  //       expect(value).to.have.all.keys("id", "slug", "title", "url")
  //     )
  // })  
})
