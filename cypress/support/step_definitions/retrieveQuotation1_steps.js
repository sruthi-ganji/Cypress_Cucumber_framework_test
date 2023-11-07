import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I am logged in as a registered insurance customer', () => {
    //login with registered account
    cy.fixture('testData.json').then((data) => {
        cy.customLogin(data.email,data.password);
        })
});

When('I navigate to the Quotation retrieval page',() => {
    cy.get('#retrieve').click();
});

When('I type identification number for quotation retrieval',() => {
    cy.log('Before retrieving identificationNumber');
    cy.fixture('data.json').then((data) => {
        cy.log(`Retrieved identificationNumber: ${data.identificationNumber}`);
        const identificationNumber = data.identificationNumber;
        cy.get('form > [type="text"]').type(identificationNumber);
    });
})

When('I click the "Retrieve Quotation" button',() => {
    cy.get('#getquote').click()
})

Then('I should see the quotation details',() => {
    cy.contains('Retrieve Quotation').should('be.visible');
})