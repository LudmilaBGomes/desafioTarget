let data = [
    { estado: 'SP', valor: 67836.43 },
    { estado: 'RJ', valor: 36678.66 },
    { estado: 'MG', valor: 29229.88 },
    { estado: 'ES', valor: 27165.48 },
    { estado: 'Outros', valor: 19849.53 }
];

let soma = 0.0;

data.forEach(faturamento => {
    soma += faturamento.valor;
});

// console.log(soma)
data.forEach(faturamento => {
    let percentual = (100.0 * faturamento.valor) / soma;
    console.log(`O valor percentual do estado ${faturamento.estado} é ${percentual}%`);
});

/*
=========== Saída ===========

O valor percentual do estado SP é 37.52845624346716
O valor percentual do estado RJ é 20.291360952794975
O valor percentual do estado MG é 16.170548370275323
O valor percentual do estado ES é 15.028481414968068
O valor percentual do estado Outros é 10.981153018494469

==============================
*/
