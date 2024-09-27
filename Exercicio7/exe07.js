var velocidadePermitida=40;
var velocidade=47;
var verifica=velocidadePermitida*1.2;

if (velocidade<=velocidadePermitida){
    console.log('Sem Multa')
    verifica=velocidade*1.2
} else if (velocidade<=verifica){
    console.log('Multa Leve')
} else if (velocidade>=verifica){
    console.log('Multa Grave')
}
