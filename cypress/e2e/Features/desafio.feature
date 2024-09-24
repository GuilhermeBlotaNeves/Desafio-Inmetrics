Feature: Validar Carrinho

Scenario: Validar Produto no Carrinho

Given que realizo o login
When realizo a busca do produto desejado
When verifico os itens no carrinho
Then finalizo a compra