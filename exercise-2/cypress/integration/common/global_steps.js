/// <reference types='cypress' />
import { Given } from "cypress-cucumber-preprocessor/steps";
import CONSTANTS from "../../support/constants";

Given("I open the store website", () => {
  cy.intercept(CONSTANTS.URL).as("getStoreSite");
  cy.visit(CONSTANTS.URL);

  cy.wait("@getStoreSite").its("response.statusCode").should("eq", 302);
});
