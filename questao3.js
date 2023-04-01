let data = require('./data/dados.json')

let somaFaturamento = 0.0;
let maiorFaturamento = { dia: 0, valor: 0.0 };
let menorFaturamento = { dia: 0, valor: Infinity };
let diasComFaturamento = 0;

data.forEach((faturamentoDia) => {
    if (faturamentoDia.valor > maiorFaturamento.valor) {
        maiorFaturamento = faturamentoDia;
    }

    if (faturamentoDia.valor) {
        if (faturamentoDia.valor < menorFaturamento.valor) {
            menorFaturamento = faturamentoDia;
        }
        
        somaFaturamento += faturamentoDia.valor;
        diasComFaturamento += 1;
    }
});

let media = somaFaturamento / diasComFaturamento;
// console.log(media);

let numDiasFatDiarioMaiorQueMedia = 0;
data.forEach((faturamentoDia) => {
    if (faturamentoDia.valor > media) {
        console.log(`No dia ${faturamentoDia.dia} o valor ${faturamentoDia.valor} do faturamento foi maior que a média ${media}`);
        numDiasFatDiarioMaiorQueMedia += 1;
    }
});
console.log();
console.log(`A) O menor valor de faturamento ocorrido em um dia do mês => dia: ${menorFaturamento.dia}, faturamento: ${menorFaturamento.valor}`);
console.log(`B) O maior valor de faturamento ocorrido em um dia do mês => dia: ${maiorFaturamento.dia}, faturamento: ${maiorFaturamento.valor}`);
console.log(`C) Número de dias no mês em que o valor de faturamento diário foi superior à média mensal. => ${numDiasFatDiarioMaiorQueMedia}`);

/*
=========== Saída ===========

No dia 1 o valor 22174.1664 do faturamento foi maior que a média 20865.370166666664
No dia 2 o valor 24537.6698 do faturamento foi maior que a média 20865.370166666664
No dia 3 o valor 26139.6134 do faturamento foi maior que a média 20865.370166666664
No dia 6 o valor 26742.6612 do faturamento foi maior que a média 20865.370166666664
No dia 8 o valor 42889.2258 do faturamento foi maior que a média 20865.370166666664
No dia 9 o valor 46251.174 do faturamento foi maior que a média 20865.370166666664
No dia 16 o valor 48924.2448 do faturamento foi maior que a média 20865.370166666664
No dia 20 o valor 35240.1826 do faturamento foi maior que a média 20865.370166666664
No dia 21 o valor 43829.1667 do faturamento foi maior que a média 20865.370166666664
No dia 27 o valor 25681.8318 do faturamento foi maior que a média 20865.370166666664

A) O menor valor de faturamento ocorrido em um dia do mês => dia: 14, faturamento: 373.7838
B) O maior valor de faturamento ocorrido em um dia do mês => dia: 16, faturamento: 48924.2448
C) Número de dias no mês em que o valor de faturamento diário foi superior à média mensal. => 10

==============================
*/
