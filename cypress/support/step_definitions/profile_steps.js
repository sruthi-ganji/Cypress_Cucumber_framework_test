import { Given, Then} from '@badeball/cypress-cucumber-preprocessor';

Given('I navigate to the Profile page',()=>{
    //Login with regisetered account
    cy.fixture('testData.json').then((data) => {
        cy.customLogin(data.email,data.password);
        })
    //navigate to profile page
    cy.get('#profile').click()
})

Then('I should see my profile information',() =>{
   cy.get('#showtitle').should('be.visible')
   cy.get('#showfirstname').should('be.visible')
   cy.get('#showsurname').should('be.visible')
   cy.get('#showphone').should('be.visible')
   cy.get('#showlicencetype').should('be.visible')
   cy.get('#showlicenceperiod').should('be.visible')
   cy.get('#showincidents').should('be.visible')
   //It is failing because In application the functionality is not in proper
   //User details are not displaying
   console.log('It is failing because In application the functionality is not in proper')
   cy.log('It is failing because In application the functionality is not in proper')
   cy.log('User details are not displaying')
})