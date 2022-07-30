// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo')!;
let soma = document.getElementById('soma')! as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo')!; //output

let total = 0 //recebe resultado da soma

limparSaldo()

function somarAoSaldo(soma: number) {   
    total += soma
    campoSaldo.innerHTML = total.toString(); //envia o valor da variável total para o html como string
    limparCampoSoma()   
}

function limparCampoSoma() {
    soma.value = "";
}

function limparSaldo() {
    total = 0;
    campoSaldo.innerHTML = total.toString();
}

botaoAtualizar?.addEventListener('click', () => {
    somarAoSaldo(Number(soma.value));
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});

/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: <span id="campo-saldo">0</span>"</h1>
 */

