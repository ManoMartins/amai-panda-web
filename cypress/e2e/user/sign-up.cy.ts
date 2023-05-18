describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");
    cy.contains("Entrar").click();
    cy.contains("Criar conta").click();

    cy.get("#name").type("teste-cypress");
    cy.get("#email").type("teste@cypress.com");
    cy.get("#password").type("teste_cypress");
    cy.get("#gender").select("male");
    cy.get("#phoneNumber").type("11970707070");
    cy.get("#documentNumber").type("00000000000");

    cy.contains("Criar conta").click();
    cy.url().should("include", "/sign-in");
  });
});
