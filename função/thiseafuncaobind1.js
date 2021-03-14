const pessoa = {
    saudacao: 'e ai',
    falar() {
        console.log(this.saudacao)
    }
}
pessoa.falar()
const falar = pessoa.falar
falar()// conflito entre paradigmas: funcional e 00

const falardepessoa = pessoa.falar.bind(pessoa)
falardepessoa()