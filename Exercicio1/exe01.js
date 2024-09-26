var exe01=[];
var input1=prompt('Insira um valor');
exe01[0]=input1;
var input2=prompt('Insira um valor');
exe01[1]=input2;
var input3=prompt('Insira um valor');
exe01[2]=input3;
var maiorNumero=exe01[0];

for (var i=1; i<exe01.length; i++){
    if (exe01[i] > maiorNumero){
        maiorNumero = exe01[i];
    }
}
alert(`O maior número é: ${maiorNumero}`);