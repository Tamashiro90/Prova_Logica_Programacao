var input1=parseInt(prompt('Inserir primeira nota'));
var input2=parseInt(prompt('Inserir segunda nota'));
var input3=parseInt(prompt('Inserir terceira nota'));

var soma=(input1+input2+input3)/3;

if (soma>=7){
    document.write('Aprovado')
} else {
    document.write('Reprovado')
}