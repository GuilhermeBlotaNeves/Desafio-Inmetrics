import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

let produtoId = 28; 
let novaImagemUrl = "https://m.media-amazon.com/images/I/710SVJBnw+L._AC_SX679_.jpg"; 

Given('que eu tenho o ID do produto {int}', (id) => {
    produtoId = id;
});

Given('uma nova URL da imagem {string}', (url) => {
    novaImagemUrl = url;
});

When('eu envio uma requisição PUT para atualizar a imagem do produto', () => {
    cy.request({
        method: 'PUT',
        url: `https://www.seusite.com/api/products/${produtoId}`, 
        body: {
            imageUrl: novaImagemUrl 
        },
        headers: {
            'Content-Type': 'application/json'
        },
        failOnStatusCode: false
    }).as('putRequest');
});

Then('eu devo receber um status {int}', (statusCode) => {
    cy.get('@putRequest').its('status').should('eq', statusCode);
});
