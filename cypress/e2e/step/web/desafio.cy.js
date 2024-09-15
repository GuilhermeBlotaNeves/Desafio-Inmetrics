import { Given,When, Then} from "cypress-cucumber-preprocessor/steps";

Given("que realizo o login",() =>{
    cy.visit("https://advantageonlineshopping.com/#/")
    cy.get('#menuUserLink').click()
    cy.get('[a-hint="Username"] > .inputContainer > .ng-pristine').type("PEDRO")
    cy.get('[a-hint="Password"] > .inputContainer > label').type("Pedro01")
    cy.get('.left > .ng-scope').click()
    cy.get('#sign_in_btn').click()
})

When("realizo a busca do produto desejado",() =>{
    cy.get('#mobileSearch > .roboto-medium').type("mouse")
    cy.get('#mobileSearch > #menuSearch').click()
    cy.get('img[id="28"]').click()
    cy.get('.fixedBtn > .roboto-medium').click()
})
When("verifico os itens no carrinho",() =>{
    cy.get('#shoppingCartLink').click()
    cy.get('tr.ng-scope > :nth-child(2) > .roboto-regular')
    .should('exist') 
    .and('be.visible'); 
})

Then("finalizo a compra",()=>{
    cy.get('#checkOutButton').click()
    cy.get('.mobileBtnHandler > #next_btn').click()
    cy.get('.roboto-bold > .roboto-medium')
    .invoke('text')
    .then((texto) => {
    const valor = parseFloat(texto.replace('$', '').trim());
    expect(valor).to.eq(29.99);
});
})