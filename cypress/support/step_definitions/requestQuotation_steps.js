import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Given('I am on homepage', () => {
  //login with registered account
  cy.fixture('testData.json').then((data) => {
  cy.customLogin(data.email,data.password);
  })
  //click On RequestQuotation tab
  cy.get('#newquote').click()
})

When('I navigate to request Quotation Page', () => {
  cy.get('h2').should('contain', 'Request a quotation')
})
When('I fill the required Fields', () => {

  cy.fixture('testData.json').then((data) => {
  cy.get('[name="incidents"]').type(data.incidents);//enter Incidents
  cy.get('[name="registration"]').type(data.registrationNumber)
  cy.get('[name="mileage"]').type(data.annualMileage)
  cy.get('[name="value"]').type(data.value)
  cy.get('[name="parkinglocation"]').select(data.parkingLocation);
})
})
When('I click on the request Quotation button', () => {
  cy.get('[value="Save Quotation"]').click();
})
Then('I Should see a identification number for request quotation', () => {

  return cy.get('body')
    .invoke('prop', 'childNodes')
    .then((childNodes) => {
      if (childNodes && childNodes[3] && childNodes[3].data) {
        const dataValue = childNodes[3].data;
        cy.log(`The 'data' property value is: ${dataValue}`);
      cy.fixture('testData.json').then((data) => {
            data.identificationNumber = dataValue
            cy.log(data.identificationNumber)
            cy.writeFile('cypress/fixtures/data.json', data);
      })   
    }
    })

})

