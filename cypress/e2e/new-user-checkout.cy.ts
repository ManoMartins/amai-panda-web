import { faker } from "@faker-js/faker";

describe("Make a flow in user and checkout", () => {
  it("should be  able to make a new user and first checkout", () => {
    cy.visit("/");

    const user = {
      name: faker.name.firstName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      gender: "male",
      phoneNumber: faker.phone.number("119########"),
      documentNumber: faker.random.numeric(11),
    };

    //  register
    cy.contains("Cadastrar-se").click();
    cy.get("#name").type(user.name);
    cy.get("#email").type(user.email);
    cy.get("#password").type(user.password);
    cy.get("#gender").select(user.gender);
    cy.get("#phoneNumber").type(user.phoneNumber);
    cy.get("#documentNumber").type(user.documentNumber);

    cy.contains("Criar conta").click();
    cy.url().should("include", "/sign-in");

    //  login
    cy.get("#email").type(user.email);
    cy.get("#password").type(user.password);

    cy.get("[data-test='sign-in']").click();
    cy.url().should("include", "/");

    //  add product to cart
    cy.contains("Adicionar").click();
    cy.get("[data-test='shopping-cart']").click();

    // continue shopping
    cy.contains("Continuar a compra").click();

    // add new address
    cy.contains("Adicionar").click();
    cy.get("#zipCode").type(faker.address.zipCode("########"));
    cy.get("#state").type(faker.address.state());
    cy.get("#city").type(faker.address.city());
    cy.get("#neighborhood").type(faker.address.street());
    cy.get("#street").type(faker.address.streetName());
    cy.get("#number").type(faker.address.buildingNumber());

    cy.findByText("Salvar").click();
    cy.url().should("include", "/checkout/address");

    // select address
    cy.get("[data-test='addressId']").children().first().click();
    cy.contains("Continuar").click();
    cy.url().should("include", "/checkout/credit-card");

    // add new credit card
    cy.contains("Adicionar").click();
    cy.get("#cardLastNumber").type(faker.finance.creditCardNumber());
    cy.get("#cardHolder").type(faker.name.fullName());
    cy.get("#cardExpirationDate").type("04/30");
    cy.get("#cardSecurityCode").type(faker.finance.creditCardCVV());
    cy.get("#cardIdentification").type("000.000.000.00");
    cy.findByText("Salvar").click();

    cy.url().should("include", "/checkout/credit-card");

    // select credit card
    cy.get("[data-test='payments']").children().first().click();

    cy.get("[data-test='total-price']").then(($value) => {
      const totalPrice = $value
        .text()
        .replace("R$", "")
        .replace(",", ".")
        .trim();

      cy.get("[data-test='input-payment-value']")
        .first()
        .type(totalPrice)
        .blur();
      cy.contains("Finalizar").click();

      cy.url().should("contain", "/checkout/success");
      cy.contains("Obrigado").should("exist");
      cy.contains("Sua compra foi realizada com sucesso.").should("exist");
    });
    // access all orders
    cy.visit("http://localhost:5173/orders", { timeout: 30 * 60 * 1000 });
    cy.get('[data-test="more-details"]').first().click();
    cy.contains("Alterar status").click();
    cy.get("#status").select("DELIVERED");
    cy.get('[data-test="update"]').click();

    // request exchange
    cy.visit("/");

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

    // accept exchange
    cy.visit("http://localhost:5173/orders", { timeout: 30 * 60 * 1000 });
    cy.get('[data-test="more-details"]').first().click();
    cy.get('[data-test="accept-exchange-request"]').click();

    // exchange received
    cy.get("[data-test='exchange-received']").click();

    // check
    cy.visit("/");
    cy.get("[data-test='profile']").click();
    cy.contains("Cupons").click();
    cy.get("[data-test='voucher-code']").each(($el) => {
      const voucherCode = $el.text();

      cy.visit("/");

      //  add product to cart
      cy.contains("Adicionar").click();
      cy.get("[data-test='shopping-cart']").click();

      cy.contains("Inserir código do cupom").click();

      cy.get("#voucherCode").type(voucherCode);

      cy.contains("Aplicar").click();

      cy.get("[data-test='close-modal']").click();

      // continue shopping
      cy.contains("Continuar a compra").click();

      // select address
      cy.get("[data-test='addressId']").children().first().click();
      cy.contains("Continuar").click();
      cy.url().should("include", "/checkout/credit-card");

      // select credit card
      cy.get("[data-test='payments']").children().first().click();

      cy.get("[data-test='total-price']").then(($value) => {
        const totalPrice = $value
          .text()
          .replace("R$", "")
          .replace(",", ".")
          .trim();

        cy.get("[data-test='input-payment-value']")
          .first()
          .type(totalPrice)
          .blur();
        cy.contains("Finalizar").click();

        cy.url().should("contain", "/checkout/success");
        cy.contains("Obrigado").should("exist");
        cy.contains("Sua compra foi realizada com sucesso.").should("exist");
      });
    });
  });
});
