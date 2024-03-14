/* (5 pontos)
4-Escreva um programa que receba três números inteiros e mostre eles em ordem crescente.
Nome Aluno: Elisa Renata Dos Santos Paiva
*/
var teclado = require("prompt-sync")();
var num1 = parseFloat(teclado("Digite o primeiro numero inteir:"));
var num2 = parseFloat(teclado("Digite o segundo numero inteiro:"));
var num3 = parseFloat(teclado("Digite o terceiro numero inteiro:"));
var maior = 0;
var mediano = 0;
var menor = 0;
if (num1 > num2 && num1 > num3) {
    maior = num1;
    if (num2 > num3) {
        mediano = num2;
        menor = num3;
    }
    else {
        mediano = num3;
        menor = num2;
    }
}
else if (num2 > num1 && num2 > num3) {
    maior = num2;
    if (num1 > num3) {
        mediano = num1;
        menor = num3;
    }
    else {
        mediano = num3;
        menor = num1;
    }
}
else if (num3 > num2 && num3 > num1) {
    maior = num3;
    if (num1 > num2) {
        mediano = num1;
        menor = num2;
    }
    else {
        mediano = num2;
        menor = num3;
    }
}
else {
    console.log("Algo deu errado!!");
}
console.log("Ordem crescente \u00E9 ".concat(menor, ", ").concat(mediano, ", ").concat(maior));
