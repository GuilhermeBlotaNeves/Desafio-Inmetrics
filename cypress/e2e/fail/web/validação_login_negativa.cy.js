import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given("que acesso na página de Login", () => {
    cy.visit('https://advantageonlineshopping.com')
})

When("defino meu usuário e senha",()=>{
    cy.get('#menuUserLink').click()
    cy.get('[a-hint="Username"] > .inputContainer > .ng-pristine').type("PEDROCA")
    cy.get('[a-hint="Password"] > .inputContainer > label').type("pedro01")
    
})

Then("acesso invalido",()=> {
    
    cy.get('.left > .ng-scope').click()
    cy.get('#sign_in_btn').click()
    cy.get('#signInResultMessage')
    .should('exist') 
    .and('be.visible'); 
})