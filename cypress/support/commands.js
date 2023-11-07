// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-xpath'

import'./commands'
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

Cypress.Commands.add('customLogin', (email, password) => {
    cy.visit('https://demo.guru99.com/insurance/v1/index.php'); 
    cy.get('#email').type(email);
    cy.get('#password').type(password);
    cy.get('input[type="submit"]').click();
  });

  Cypress.Commands.add('setIdentificationNumber', (value) => {
    Cypress.env('identificationNumber', value);
  });
  
  Cypress.Commands.add('getIdentificationNumber', () => {
    return Cypress.env('identificationNumber');
  });