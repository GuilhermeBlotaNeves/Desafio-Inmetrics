Feature: Alterar imagem de um produto

  Scenario: Alterar a imagem de um produto existente
    Given que eu tenho o ID do produto 28
    And uma nova URL da imagem "https://m.media-amazon.com/images/I/710SVJBnw+L._AC_SX679_.jpg"
    When eu envio uma requisição PUT para atualizar a imagem do produto
    Then eu devo receber um status 200