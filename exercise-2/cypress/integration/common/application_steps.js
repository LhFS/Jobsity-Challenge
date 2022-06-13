/// <reference types='cypress' />
import { Then, When, And } from "cypress-cucumber-preprocessor/steps";

And("click on Contact us option in header", () => {
  cy.get('[id="contact-link"]').click();
  cy.location().should((loc) => {
    expect(loc.pathname).to.eq("/index.php");
  });
});

When("I fill all fields correctly", () => {
  const randomSubjectHeading = (
    Math.floor(Math.random() * (2 - 1 + 1)) + 1
  ).toString();

  cy.get('[id="id_contact"]').select(randomSubjectHeading);
  cy.get('[id="email"]').click().type("abc@abc.com");
  cy.get('[id="id_order"]').click().type("1234");
  cy.get('[id="message"]').click().type("this is only one simple test");
});

And("Click on Send button", () => {
  cy.get('[id="submitMessage"]').click();
});

Then("the message should be sent", () => {
  cy.get('[class="alert alert-success"]').should(
    "have.text",
    "Your message has been successfully sent to our team."
  );
});

And("I attach one file", () => {
  cy.get('[id="fileUpload"]').selectFile("this-is-one-pdf.pdf", {
    action: "drag-drop",
  });
});

When("I let some fields empty", () => {
  cy.get('[id="email"]').click().type("abc@abc.com");
  cy.get('[id="id_order"]').click().type("1234");
});

Then("the message should not be sent", () => {
  cy.get('[class="alert alert-danger"]').should(
    "have.text",
    "\n\t\tThere is 1 error\n\t\t\n\t\t\t\t\tThe message cannot be blank.\n\t\t\t\t\n\t\t\t"
  );
});
