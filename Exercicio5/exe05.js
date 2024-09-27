var input1=parseFloat(prompt('Inserir um número'))
var input2=parseFloat(prompt('Inserir um número'))
var input3=(prompt('Inserir um operador matemático (adição, subtração, multiplicação ou divisão)'))
var resultado=0;

if (input3=='+'){
    resultado=input1+input2
} else if (input3=='-'){
    resultado=input1-input2
} else if (input3=='*'){
    resultado=input1*input2
} else if (input3=='/'){
    resultado=input1/input2
}
document.write(`O resultado é: ${input1} ${input3} ${input2} = ${resultado}`)

