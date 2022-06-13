<H1>How to run automated tests to Jobsity Assessment</h1>

<h3>Requirements</h3>

- Node installed in the machine

<h3>Steps to execute</h3>

- Clone this repository to your local computer
- Navigate to corresponding folder for each exercise
- Run the following comands:

```sh
npm install #to install dependencies
npm run cypress:open #to execute the tests one by one using cypress UI
npm run cypress:run && npm run postcypress:run #to execute all tests at the same time and get a HTML report with the tests outputs
```

<h3>About the project</h3>

In this project was used Cypress with Cucumber using Gherkin syntax, each feature has it own file located in `exercise-$/cypress/integration/feature`.

The language used was JavaScript.

In the folder `cypress/integration/common` we have all scripts files with the codes, was used one structure of files that allow us to reuse already created steps.

This project is splited in 2 folders about the 2 exercises exposed in this challenge.

The tests was created regarding the requirements and to complement the manual test cases.
