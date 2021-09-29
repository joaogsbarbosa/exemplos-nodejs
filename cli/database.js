const { readFileSync } = require('fs')

// Outra forma de leitura de dados (apenas .json)
// const dadosJson = require('./herois.json')

class Database {

    constructor() {
        this.NOME_ARQUIVO = 'herois.json'
    }

    obterDadosArquivo() {
        const arquivo = readFileSync(this.NOME_ARQUIVO, 'utf8')
        return JSON.parse(arquivo.toString())
    }

    escreverArquivo() {

    }

    listar(id) {
        const dados = this.obterDadosArquivo()
        const dadosFiltrados = dados.find(item => id ? item.id == id : true)
        return dadosFiltrados
    }
}

module.exports = new Database()