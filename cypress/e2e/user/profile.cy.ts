// eslint-disable-next-line import/no-extraneous-dependencies
import { faker } from "@faker-js/faker";

describe("profile", () => {
  beforeEach(() => {
    cy.visit("/sign-in");

    cy.get("#email").type("manoel.martins@muralis.com.br");
    cy.get("#password").type("mano123");

    cy.get("[data-test='sign-in']").click();
  });

  it("should be able request exchange", () => {
    cy.get("[data-test='profile']").click();
    cy.contains("Meus pedidos").click();

    let alreadyClicked = false;
    cy.findAllByText("Solicitar trocar").each(($el) => {
      if (($el.get()[0] as any).disabled || alreadyClicked) return;

      cy.wrap($el).click();
      alreadyClicked = true;
    });
    cy.get("#quantity").type("1");
    cy.get("[data-test='request_exchange_submit']").click();
  });

  it("should be able create a credit card", () => {
    cy.get("[data-test='profile']").click();
    cy.contains("Meus cartões").click();
    cy.findByText("Adicionar cartão").click();

    cy.get("#cardLastNumber").type(faker.finance.creditCardNumber());
    cy.get("#cardHolder").type(faker.name.fullName());
    cy.get("#cardExpirationDate").type("04/30");
    cy.get("#cardSecurityCode").type(faker.finance.creditCardCVV());
    cy.get("#cardIdentification").type("000.000.000.00");
    cy.findByText("Salvar").click();

    cy.url().should("include", "/account/credit-card");
  });

  it("should be able create an address", () => {
    cy.get("[data-test='profile']").click();
    cy.contains("Endereços").click();
    cy.findByText("Adicionar endereço").click();

    cy.get("#zipCode").type(faker.address.zipCode("########"));
    cy.get("#state").type(faker.address.state());
    cy.get("#city").type(faker.address.city());
    cy.get("#neighborhood").type(faker.address.street());
    cy.get("#street").type(faker.address.streetName());
    cy.get("#number").type(faker.address.buildingNumber());

    cy.findByText("Salvar").click();
    cy.url().should("include", "/account/address");
  });
});
