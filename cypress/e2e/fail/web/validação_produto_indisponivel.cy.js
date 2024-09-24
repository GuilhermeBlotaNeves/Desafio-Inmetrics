import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given("que acesso ao site", () => {
          cy.visit('https://advantageonlineshopping.com')
        });
      

When("que faço a pesquisa do produto - GOD OF WAR: RAGNAROK",()=>{
    cy.get('#mobileSearch > .roboto-medium').type('GOD OF WAR: RAGNAROK'); 
    cy.get('#mobileSearch > #menuSearch').click()
});


Then("produto inexistente",()=> {
    cy.get('.noProducts > .ng-binding')
    .should('exist') 
    .and('be.visible'); 

});