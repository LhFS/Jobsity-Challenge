/// <reference types='cypress' />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import CONSTANTS from "../../support/constants";

function screenResponsive() {
  cy.get('[class="carousel-inner"]').should("be.visible");
  cy.get('[id="online_banking_features"]').should("be.visible");
}

Given("I open the Zero Bank website", () => {
  cy.intercept(CONSTANTS.URL).as("getBankSite");
  cy.visit(CONSTANTS.URL);

  cy.wait("@getBankSite").its("response.statusCode").should("eq", 200);
});

When("I change the screen to {}", (item) => {
  cy.viewport(item);
  cy.get('[class="carousel-inner"]').should("be.visible");
  cy.get('[id="online_banking_features"]').should("be.visible");
});

Then("I see the page is correctly visible in {} screen", (item) => {
  cy.viewport(item);
  screenResponsive();
});

When("I fill all fields of the form with correct information", () => {
  cy.get('[id="name"]').should("be.visible").click().type("Luan Silva");
  cy.get('[id="email"]').should("be.visible").click().type("test@gmail.com");
  cy.get('[id="subject"]')
    .should("be.visible")
    .click()
    .type("This is just a new test");
  cy.get('[id="comment"]')
    .should("be.visible")
    .click()
    .type("And here is just some free text");
});

Then("I click on Send Message button", () => {
  cy.get('[class="btn-signin btn btn-primary"]')
    .contains("Send Message")
    .should("be.visible")
    .click();
});

Then("the message should be sent successfully", () => {
  cy.location().should((loc) => {
    expect(loc.pathname).to.eq("/sendFeedback.html");
  });
});
