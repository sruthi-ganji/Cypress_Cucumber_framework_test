import { Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';

Given('I log in susccessfully with register account', () => {
  //login with registered account
  cy.fixture('testData.json').then((data) => {
    cy.customLogin(data.email,data.password);
    })
    cy.log('login successfull')
});


When('I click the edit profile tab', () => {
  // Click the "Edit Profile" tab
  cy.get('#editprofile').click(); 
});

When('I update my profile information', () => {
  // Update the profile information
  cy.fixture('testData.json').then((data) => {
  cy.get('#user_surname').type(data.newSurName)
  cy.get('#user_firstname').type(data.newFirstName)
  cy.get('#user_phone').type(data.phoneNumber)
  cy.get('#user_address_attributes_city').type(data.city)
  cy.get('#user_address_attributes_county').type(data.country)
  cy.get('#user_address_attributes_postcode').type(data.pincode)
  })
})

When('I click the update user button',()=>{
    cy.get('[value="Update User"]').click()
})

Then('I should see a confirmation message for the profile update',() => {
  cy.get('div[id="tabs"]') 
  .invoke('prop', 'childNodes') // Get the 'childNodes' property
  .then((childNodes) => {
    if (childNodes && childNodes[13] && childNodes[3].data) {
      const dataValue = childNodes[13].data;
      cy.log(`The 'data' property value is: ${dataValue}`);
      expect(dataValue).to.equal('Last modified: November 06 2023.')
    }
    })
    
  //but here if i click on update user it not performany action atleast it not changed any modified date also

})

