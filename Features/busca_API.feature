Feature: Busca de Produto

Scenario: Buscar um mouse e validar a resposta
    Given que eu faço uma busca pelo produto "mouse"
    Then eu devo ver produtos relacionados à busca
    Then o status code deve ser 200