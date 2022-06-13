/// <reference types='cypress' />
import { When, Then, And } from "cypress-cucumber-preprocessor/steps";
import CONSTANTS from "../../support/constants";

Then("I can see the navigational tabs", () => {
  cy.get('[id="nav"]').get('[id="pages-nav"]').should("be.visible");
});

And("I can navigate to {}", (item) => {
  cy.get('[id="nav"]')
    .get('[id="pages-nav"]')
    .contains(item)
    .should("be.visible")
    .click();
});

And("I see the page of Online Banking", () => {
  cy.location().should((loc) => {
    expect(loc.pathname).to.eq("/online-banking.html");
  });
  cy.get("h1").should("have.text", "Online Banking");
});

And("I see the page of Home", () => {
  cy.location().should((loc) => {
    expect(loc.pathname).to.eq("/index.html");
  });
  cy.get('[class="carousel-inner"]').should("be.visible");
  cy.get('[id="online_banking_features"]').should("be.visible");
});

And("I see the page of Feedback", () => {
  cy.location().should((loc) => {
    expect(loc.pathname).to.eq("/feedback.html");
  });
  cy.get('[id="feedback-title"]').should("have.text", "Feedback");
});
