const {
    deepStrictEqual
} = require('assert')

const database = require('./database')

const heroi1 = {
    id: 1,
    nome: 'Flash',
    poder: 'Speed'
}

describe('Manipulação de heróis', () => {

    it('Lista o herói de id 1 usando arquivos', async () => {

        const expected = heroi1
        const resultado = await database.listar(expected.id)
        deepStrictEqual(resultado, expected)
    })
})
