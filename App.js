//4 - função que chame um array definido em uma variavel
/*
PARTICIPANTES:
- Ruan
- Janaina
- André
*/


const carrinho =[ 
  { nome: "Tênis", preco: 250.00 },
  { nome: "Camiseta", preco: 80.00 },
  { nome: "Meias", preco: 40.00 },
  { nome: "Calça", preco: 299.99 },
  { nome: "Boné", preco: 80.00 },
  { nome: "perfume", preco: 187.00 },
];
function calcularTotal(listaDeProdutos) {
  let total = 0;

  listaDeProdutos.forEach(produto => {
    total += produto.preco;
  });

  return (`O valor total da compra é: R$ ${total}`);
}
console.log(calcularTotal(carrinho)); 



