// Como podemos melhorar o esse código usando TS? 
interface Pessoa {
    nome: string,
    idade: number,
    profissoes: Profissao
}

enum Profissao {
    Padeiro,
    Atriz,
    Desenvolvedor,
    Mecânico
} 

let pessoa1: Pessoa = {
    nome: "maria",
    idade: 29,
    profissoes: Profissao.Atriz
}

let pessoa2: Pessoa = {
    nome: "roberto",
    idade: 19,
    profissoes: Profissao.Padeiro
}

let pessoa3: Pessoa = {
    nome: "laura",
    idade: 32,
    profissoes: Profissao.Atriz
};

let pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: Profissao.Padeiro
}