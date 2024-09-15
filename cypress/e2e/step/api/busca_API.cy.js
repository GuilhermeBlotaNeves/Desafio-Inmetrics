import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

/*
Infelizmente, a API parece estar enfrentando problemas, 
o que impede a realização do teste. Como resultado, 
também não é possível testar a atualização da imagem de um produto (PUT).
*/

Given('que eu faço uma busca pelo produto {string}', (produto) => {
  cy.request({
    method: 'GET',
    url: `https://www.advantageonlineshopping.com/catalog/api/v1/products/28`
  }).as('searchResponse');
});

Then('eu devo ver produtos relacionados à busca', () => {
  cy.get('@searchResponse').then((response) => {
    expect(response.body).to.have.property('products');
    expect(response.body.products).to.be.an('array').that.is.not.empty;
  });
});

Then('o status code deve ser {int}', (statusCode) => {
  cy.get('@searchResponse').then((response) => {
    expect(response.status).to.eq(statusCode);
  });
});
