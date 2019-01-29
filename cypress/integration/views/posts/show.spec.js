/// <reference types="Cypress" />

context("Posts#show", () => {
  beforeEach(() => {
    cy.visit("posts");
  });

  it("has a title", () => {
    cy.contains("Listing posts");
    cy.contains("Title");
    cy.contains("Body");
    cy.contains("Author");
    cy.percySnapshot();
  });
});
