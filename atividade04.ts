/* (5 pontos)
4-Escreva um programa que receba três números inteiros e mostre eles em ordem crescente.
Nome Aluno: Elisa Renata Dos Santos Paiva 
*/

const teclado = require(`prompt-sync`)();

let num1: number = parseFloat(teclado(`Digite o primeiro numero inteiro:`));
let num2: number = parseFloat(teclado(`Digite o segundo numero inteiro:`));
let num3: number = parseFloat(teclado(`Digite o terceiro numero inteiro:`));

let maior: number=0;
let mediano: number=0;
let menor: number=0;
    
if( num1>num2 && num1>num3 ){
    maior=num1 ;
    
    if(num2>num3){
        mediano=num2;
        menor=num3;
    }
    else {
        mediano=num3;
        menor=num2;
    }
}
else if(num2>num1 && num2>num3){
    maior=num2;
    if (num1>num3){
        mediano=num1;
        menor=num3;
    }
    else {
        mediano=num3;
        menor=num1;
    }
}
else if(num3>num2 && num3>num1){
    maior=num3;
    if(num1>num2){
        mediano=num1;
        menor=num2;
    }
    else {
        mediano=num2;
        menor=num3;
    }

}
else{
    console.log(`Algo deu errado!!`);
}

console.log(`Ordem crescente é ${menor}, ${mediano}, ${maior}`);