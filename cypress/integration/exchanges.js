describe("Exchanges directory smoke test", () => {
  it("Verify / page elements", () => {
    cy.visit("/");

    cy.findByText("Coin Gecko Directory");

    cy.findByTestId("exchanges-welcome-box").should("be.visible");

    cy.findByTestId("table-header").findByText("Name").should("be.visible");
    cy.findByTestId("table-header").findByText("Country").should("be.visible");
    cy.findByTestId("table-header")
      .findByText("Trust Rank")
      .should("be.visible");

    cy.findAllByTestId("exchange-logo").should("have.length", 10);
    cy.findAllByTestId("exchange-name").should("have.length", 10);
    cy.findAllByTestId("exchange-site-url").should("have.length", 10);
    cy.findAllByTestId("exchange-country").should("have.length", 10);
    cy.findAllByTestId("exchange-trust-rank").should("have.length", 10);
  });

  it("Clicks first exchange on the list and goes to exchange details page", () => {
    cy.visit("/");

    cy.findAllByTestId("exchange-item-row").first().click();
    cy.url().should("include", "/exchange/");
  });

  it("Clicks first exchange on the list and goes to exchange details page", () => {
    cy.visit("/");

    cy.findAllByTestId("exchange-item-row").first().click();
    cy.url().should("include", "/exchange/");
  });

  it("Clicks first exchange on the list and verifies details page elements", () => {
    cy.visit("/");

    cy.findAllByTestId("exchange-item-row").first().click();

    cy.findByRole("link", { name: "Go back" });

    cy.findByTestId("exchange-info-box").should("exist");
    cy.findByTestId("exchange-description-box").should("exist");
    cy.findByTestId("exchange-social-box").should("exist");
  });

  it("Goes to first exchange on the list and goes back by using the 'Go Back' button", () => {
    cy.visit("/");

    cy.url().should("not.include", "/exchange/");
    cy.findAllByTestId("exchange-item-row").first().click();
    cy.url().should("include", "/exchange/");

    cy.findByRole("link", { name: "Go back" }).click();

    cy.url().should("not.include", "/exchange/");
  });
});
