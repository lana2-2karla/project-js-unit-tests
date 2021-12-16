const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    //fail('Teste vazio!');
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    // Teste se o retorno da função é um array.
    // Teste se o array retornado pela função contém dois itens dentro.
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    // Teste se os dois productIds terminam com 123.
  });
});
  
it('Testa se productDetails é uma função', () => {
  expect(typeof productDetails ).toBe('function');
});
//Sobre array.isArray scr:https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
it('Testa se o retorno da função é um array', () => {
  expect(Array.isArray(productDetails())).toBeTruthy();
});

it('Testa se o array retornado pela função contém dois itens dentro', () => {
  expect(productDetails('Alcool gel', 'Máscara')).toHaveLength(2);
});

it('Teste se os dois itens dentro do array retornado pela função são objetos', () => {
  expect(typeof productDetails()[0]).toBe('object');
  expect(typeof productDetails()[1]).toBe('object');

});

it('Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si', () => {
  expect(productDetails()[0] !== productDetails()[1]).toBeTruthy();
});
// Consulta ao repositório do Gustavo Mathias - src:https://github.com/tryber/sd-018-b-project-js-unit-tests/pull/50/files
//Sobre endsWith src:https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
it('Teste se os dois productIds terminam com 123', () => {
  expect(productDetails()[0].details.productId.endsWith('123')).toBeTruthy();
  expect(productDetails()[1].details.productId.endsWith('123')).toBeTruthy();

});

//Expect e matchers src:https://jestjs.io/pt-BR/docs/expect#tohavelengthnumber

