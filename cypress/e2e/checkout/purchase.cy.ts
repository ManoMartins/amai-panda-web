describe("checkout", () => {
  it("should be able do purchase", () => {
    cy.visit("/sign-in");

    cy.get("#email").type("manoel.martins@muralis.com.br");
    cy.get("#password").type("mano123");

    cy.get("[data-test='sign-in']").click();

    cy.contains("Adicionar").click();
    cy.get("[data-test='shopping-cart']").click();
    cy.contains("Continuar a compra").click();

    cy.get("[data-test='addressId']").children().first().click();
    cy.contains("Continuar").click();

    cy.get("[data-test='payments']").children().first().click();

    cy.get("[data-test='total-price']").then(($value) => {
      const totalPrice = $value
        .text()
        .replace("R$", "")
        .replace(",", ".")
        .trim();

      cy.get("[data-test='input-payment-value']").type(totalPrice).blur();
      cy.contains("Finalizar").click();

      cy.url().should("contain", "/checkout/success");
      cy.contains("Obrigado").should("exist");
      cy.contains("Sua compra foi realizada com sucesso.").should("exist");
    });
  });
});
