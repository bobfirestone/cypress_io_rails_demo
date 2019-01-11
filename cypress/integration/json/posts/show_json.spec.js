/// <reference types="Cypress" />

import Ajv from "ajv";

context('Posts#show.json', () => {
  // beforeEach(() => {
  //   cy.request("posts.json")
  // })

  const url = 'posts/test-post-1.json'
  
  const result = () => cy.request(url)

  it('returns JSON', () => {
    result()
      .its('headers')
      .its('content-type')
      .should('include', 'application/json')
  })

  it('returns a 200', () => {
    result().its("status").should("equal", 200)
  })

  it('objects have slugs', () => {
    result()
      .its('body')
      .its('slug')
      .should('include', 'test-post-1');
    // cy.request(url)
    //   .its('body')
    // expect(getItems()).to.have.all.keys('id', 'slug', 'title', 'body')
  })
  
  // it('has a title', () => {
  //   cy.contains("Title")
  //   cy.contains("Body")
  //   cy.contains("Author")
  // })
})
