/* (10 pontos)
8-Escreva um programa que leia o valor de 3 ângulos de um triângulo e escreva se o triângulo é Acutângulo, Retângulo ou Obtusângulo. 
Sendo que:
− Triângulo Retângulo: possui um ângulo reto. (igual a 90º)
− Triângulo Obtusângulo: possui um ângulo obtuso. (maior que90º)
− Triângulo Acutângulo: possui três ângulos agudos. (menor que 90º)
Nome Aluno: Elisa Renata Dos Santos Paiva 
E-mail: elisarenataie@gmail.com
*/

const teclado = require(`prompt-sync`);

let angulo1: number = parseFloat(teclado(`Digite o valor do ângulo do primeiro triângulo`));
let angulo2: number = parseFloat(teclado(`Digite o valor do ângulo do segundo triãngulo`));
let angulo3: number = parseFloat(teclado(`Digite o valor do ângulo do terceiro triângulo `));

let somaAngulo : number = (angulo1) + (angulo2) + (angulo3);

if (somaAngulos == 180) {
    if (angulo1 == 90 || angulo2 == 90 || angulo3 == 90) {
      console.log(`triangulo rentangulo` );
    } else if (angulo1 > 90 || angulo2 > 90 || angulo3 > 90) {
      console.log(`Triângulo Obtusângulo`);
    } else {
      console.log(`Triângulo Acutângulo`);
    }
  } else {
    console.log(`Os ângulos informados não formam um triângulo válido.`);
  }
