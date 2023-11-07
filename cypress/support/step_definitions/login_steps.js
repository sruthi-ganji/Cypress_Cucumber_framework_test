import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Given('I am on the login page', () => {
    cy.visit('https://demo.guru99.com/insurance/v1/index.php');
})

When ('I enter a valid {string} and a password {string}',(email,Password) => {
    cy.get('#email').type(email);
    cy.get('#password').type(Password);

})

When ('I enter a invalid {string} and a password {string}',(email,Password) => {
    //enter Invalid credentials
    cy.get('#email').type(email);
    cy.get('#password').type(Password);

})

When('I click the login button',() =>{
    cy.get('input[type="submit"]').click()
})

Then('I should be logged in',() => {
    cy.url().debug().should('eq','https://demo.guru99.com/insurance/v1/header.php')
    cy.log("Login succesfull")
})

Then('I should get errorMessage',() => {
    cy.get('span').should('contain', 'Enter your Email address and password correct')
})

export { Given, When, Then };
