// Como podemos rodar isso em um arquivo .ts sem causar erros? 

// Primeiro modo
let funcionario1 = {
    code: 0,
    name: ""
};

//segundo modo
let funcionario2: {code: number, userName: string} = {
code: 0,
userName: ""
}

//terceiro modo
interface Funcionario {
    code: number,
    userName: string
}

let funcionarioObj1: Funcionario = {
    code: 30,
    userName: 'Marta'    
}

//quarto modo recebendo tipo do interface
const funcionarioObj2 = {} as Funcionario;
funcionarioObj2.code = 50;
funcionarioObj2.userName = 'Maria';



