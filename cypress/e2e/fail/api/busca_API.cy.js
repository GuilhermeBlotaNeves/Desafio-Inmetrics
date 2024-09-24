import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

/*
Infelizmente, a API parece estar enfrentando problemas, 
o que impede a realização do teste.
*/

Given('que eu faço uma busca pelo produto {string}', (produto) => {
  cy.request({
    method: 'GET',
    url: `https://www.advantageonlineshopping.com/catalog/api/v1/products/search?query=${produto}`
  }).as('searchResponse');
});

Then('eu devo ver produtos relacionados à busca', () => {
  cy.get('@searchResponse').then((response) => {
    expect(response.body).to.have.property('products');
    expect(response.body.products).to.be.an('array').that.is.not.empty;
  });
});

Then('eu devo ver pelo menos um produto que contenha {string}', (termo) => {
  cy.get('@searchResponse').then((response) => {
    const produtos = response.body.products;
    const temProduto = produtos.some(product => product.productName.toLowerCase().includes(termo.toLowerCase()));
    expect(temProduto).to.be.true;
  });
});

Then('o status code deve ser {int}', (statusCode) => {
  cy.get('@searchResponse').its('status').should('eq', statusCode);
});
