/* Questão 1: Elaborar um programa que adicione números a um vetor. O programa deve impedir a 
inclusão de números repetidos. Exibir a lista de números a cada inclusão. */

var numeros=[];

while (true){
    let numero=parseFloat(prompt('Digite um número'))
    if (isNaN(numero))
        break;
    if (!numeros.includes(numero)){ //includes: determina se o conjunto de caracteres pode ser encontrado dentro da string
        numeros.push(numero);
        console.log(`Lista atualizada: ${numeros}`)
    } else {
        console.log(`O número ${numero} já consta na lista`)
    }
}