//IFPI FLORIANO
// NOME: CEILANE MARIA DE JESUS DE ARÚJO SOUSA

//ATIVIDADE 4 COM TYPESCRIPT//
//Resolução com Typescript das questoes de 1 a 6 do arquivo atividade4.js

///Questao 1///
class Pessoa {
    private nome: string;
    private idade: number;

    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }
    getNome(): string { //get = consultam os valores.
        return this.nome;
    }
    setNome(nome: string): void { //alteram os valores.
        this.nome = nome;
    }
    getIdade(): number {
        return this.idade;
    }
    setIdade(idade: number): void {
        this.idade = idade;
    }

    apresentar(): void {
        console.log(`Ola, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}

const pessoa1 = new Pessoa("Ceilane", 19);
pessoa1.apresentar();

///Questao 2///
class ContaBancaria {
    private numeroConta: number;
    private saldo: number;

    constructor(numeroConta: number, saldo: number) {
        this.numeroConta = numeroConta;
        this.saldo = saldo;
    }

    depositar(valor: number): void {
        if (valor > 0) {
            this.saldo += valor;
        }
    }
    sacar(valor: number): void {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -=valor;
        }
     }

     getSaldo(): number {
        return this.saldo;
     }
}
const conta1 = new ContaBancaria(19355, 600);
conta1.depositar(300);
conta1.sacar(100);

console.log(`Saldo atual: ${conta1.getSaldo()}`);

///Questao 3///
 class Produto {
    private nome: string;
    private preco: number;
    private quantidade: number;

    constructor(nome: string, preco: number, quantidade: number) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    getNome(): string {
        return this.nome;
    }
    setNome(nome: string): void {
        this.nome = nome;
    }
    getPreco(): number {
        return this.preco;
    }
    setPreco(preco: number): void {
        if (preco >= 0) {
            this.preco = preco;
        }
    }
    getQuantidade(): number {
        return this.quantidade;
    }
    setQuantidade(quantidade: number): void {
        if (quantidade >= 0) {
            this.quantidade = quantidade;
        }
    }
    calcularValorTotal(): number {
        return this.preco * this.quantidade;
    }
 }
    const produto1 = new Produto("Bola", 37, 4);

    console.log("Nome: " + produto1.getNome());
    console.log("Preço: " + produto1.getPreco());
    console.log("Quantidade:", produto1.getQuantidade());
    console.log("Valor total do estoque:", produto1.calcularValorTotal());

     produto1.setPreco(-10);
     produto1.setQuantidade(-3);

console.log("Preço após tentativa inválida:", produto1.getPreco());
console.log("Quantidade após tentativa inválida:", produto1.getQuantidade());

///Questao 4///
class Aluno {
    private nome: string;
    private nota1: number;
    private nota2: number;

    constructor(nome: string, nota1: number, nota2: number) {
        this.nome = nome;
        this.nota1 = 0;
        this.nota2 = 0;

        this.setNota1(nota1);
        this.setNota2(nota2);
    }

    getNome(): string {
        return this.nome;
    }

    setNome(nome: string): void {
        this.nome = nome;
    }

    getNota1(): number {
        return this.nota1;
    }

    setNota1(nota1: number): void {
        if (nota1 >= 0 && nota1 <= 10) {
            this.nota1 = nota1;
        }
    }

    getNota2(): number {
        return this.nota2;
    }

    setNota2(nota2: number): void {
        if (nota2 >= 0 && nota2 <= 10) {
            this.nota2 = nota2;
        }
    }

    media(): number {
        return (this.nota1 + this.nota2) / 2;
    }

    aprovado(): boolean {
        return this.media() >= 7;
    }
}

const aluno1 = new Aluno("Ceilane", 8, 8);

console.log("Nome:", aluno1.getNome());
console.log("Nota 1:", aluno1.getNota1());
console.log("Nota 2:", aluno1.getNota2());
console.log("Média:", aluno1.media());
console.log("Aprovado:", aluno1.aprovado());

///Questao 5///
class Funcionario {
    private nome: string;
    private salarioMensal: number;

    constructor(nome: string, salarioMensal: number){
        this.nome = nome;
        this.salarioMensal = 1410;
        this.setSalarioMensal(salarioMensal);
    }
    getNome(): string {
        return this.nome;
    }
    getSalarioMensal(): number {
        return this.salarioMensal;
    }

    setSalarioMensal(salario: number): void {
        if (salario >= 1410){
            this.salarioMensal = salario;
        } else {
            console.log("Erro: salário não pode ser menor que R$ 1410,00.");
        }
    }

    salarioAnual(): number {
        return this.salarioMensal * 12;
    }

    aumentarSalario(percentual: number): void {
        if (percentual > 0) {
            this.salarioMensal += 
              this.salarioMensal * (percentual / 100);
        } else {
            console.log("Percentual de aumento deve ser positivo.");
        }
    }
}
const funcionario = new Funcionario("Ceilane", 2000);

console.log("Nome:", funcionario.getNome());
console.log("Salário mensal:", funcionario.getSalarioMensal());
console.log("Salário anual:", funcionario.salarioAnual());

funcionario.aumentarSalario(10);

console.log("Salário após aumento:", funcionario.getSalarioMensal());


///Questao 6///
class Livro {
    private titulo: string;
    private autor: string;
    private numeroPaginas: number;

    constructor(titulo: string, autor: string, numeroPaginas: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.numeroPaginas = 1;
        this.setNumeroPaginas(numeroPaginas);
    }
    getTitulo(): string {
        return this.titulo;
    }
    getAutor(): string {
        return this.autor;
    }
    getNumeroPaginas(): number {
        return this.numeroPaginas;
    }
    setNumeroPaginas(numeroPaginas: number): void {
        if (numeroPaginas >= 1) {
            this.numeroPaginas = numeroPaginas;
        } else {
            console.log("O livro deeve ter pelo menos 1 página.");
        }
    }
    resumo(): void {
        console.log(`Livro: ${this.titulo}, Autor: ${this.autor}, Numero de Paginas: ${this.numeroPaginas}`);
    }
}
const livro1 = new Livro("Collen Hoover", "Erin Doom.", 300);

livro1.resumo();
