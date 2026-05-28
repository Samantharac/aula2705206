// Arquivo criado em projeto no www.stackblitz.com denominado usamodulo.
// Arquivo criado na raiz do projeto
// Importação dos módulos disponíveis no arquivo definemodulo.js

const oper = require('./biblioteca/definemodulo.js');

var x = 3, y = 5

var a = oper.soma(x, y);
console.log(a); //8

console.log(oper.subtrair(y, x)); //2 