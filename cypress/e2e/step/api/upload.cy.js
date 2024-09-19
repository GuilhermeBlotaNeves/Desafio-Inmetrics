import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

let produtoId = 28; // ID do produto
let novaImagemUrl = "https://m.media-amazon.com/images/I/710SVJBnw+L._AC_SX679_.jpg"; // Nova imagem

Given('que eu tenho o ID do produto {int}', (id) => {
    produtoId = id;
});

Given('uma nova URL da imagem {string}', (url) => {
    novaImagemUrl = url;
});

When('eu envio uma requisição PUT para atualizar a imagem do produto', () => {
    cy.request({
        method: 'PUT',
        url: `https://www.seusite.com/api/products/${produtoId}`, // Ajuste para o endpoint correto
        body: {
            imageUrl: novaImagemUrl // Inclua a nova URL da imagem
        },
        headers: {
            'Content-Type': 'application/json'
        },
        failOnStatusCode: false // Ignora erros de status para fins de teste
    }).as('putRequest');
});

Then('eu devo receber um status {int}', (statusCode) => {
    cy.get('@putRequest').its('status').should('eq', statusCode);
});