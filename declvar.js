 // Arquivo criado em projeto no www.stackblitz.com denominado declvar.js
 var x = 6;
 console.log(x);
 
 const y = "a";  // definição de variável const
 // y = "b";
 console.log(y);

 // VARIÁVEIS GLOBAIS E LOCAIS
 {
  var z = 4;
  console.log(x);
  console.log(y);
  console.log(z);
 }
 z = 6;
 //console.log(z); <-- Essa linha, se descomentada, gera erro pois z é local ao bloco acima
// Desenvolvido por Samantha Raquel