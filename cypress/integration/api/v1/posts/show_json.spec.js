/// <reference types="Cypress" />

import Ajv from "ajv";

context('api/v1/post show', () => {
  const url = 'api/v1/posts/test-post-1'
  
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

  it('object has a slug element', () => {
    result()
      .its('body')
      .its('slug')
      .should('include', 'test-post-1');
  })
  
  it('object has a title element', () => {
    result()
      .its('body')
      .its('title')
      .should('include', 'Title 1');
  })
  
  it('object has a body element', () => {
    result()
      .its('body')
      .its('body')
      .should('include', 'Body 1');
  })
})
