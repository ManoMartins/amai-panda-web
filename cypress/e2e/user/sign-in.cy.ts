describe("login", () => {
  it("should be able login", () => {
    cy.visit("/");
    cy.contains("Entrar").click();

    cy.get("#email").type("teste@cypress.com");
    cy.get("#password").type("teste_cypress");

    cy.get("[data-test='sign-in']").click();

    cy.url().should("eq", `${Cypress.config().baseUrl}/`);
    cy.get("[data-test='profile']").should("have.text", `Olá, teste-cypress`);
  });
});
