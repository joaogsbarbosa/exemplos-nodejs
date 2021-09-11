// Antes de rodar os testes, instalar as dependências
// Consultar o README.md
// Para rodar os testes, digitar no terminal:
// mocha tests.js

/*
1 - Simular as requisições com o pacote "nock"
2 - Fazer os testes unitários com o pacote "assert"
*/


// Pacote nock serve para mockar (simular) as requisições
const nock = require('nock');
// Pacote para fazer os testes unitários
const assert = require('assert');

const { obterNomePessoas } = require('./util/service');

describe('Star Wars Tests', function () {
    // Antes de rodar os testes
    this.beforeAll( () => {
        // Resposta que a requisição mockada deve retornar
        const response = {
            "count": 1,
            "next": null,
            "previous": null,
            "results": [
                {
                    "name": "R2-D2",
                    "height": "96",
                    "mass": "32",
                    "hair_color": "n/a",
                    "skin_color": "white, blue",
                    "eye_color": "red",
                    "birth_year": "33BBY",
                    "gender": "n/a",
                    "homeworld": "https://swapi.dev/api/planets/8/",
                    "films": [
                        "https://swapi.dev/api/films/1/",
                        "https://swapi.dev/api/films/2/",
                        "https://swapi.dev/api/films/3/",
                        "https://swapi.dev/api/films/4/",
                        "https://swapi.dev/api/films/5/",
                        "https://swapi.dev/api/films/6/"
                    ],
                    "species": [
                        "https://swapi.dev/api/species/2/"
                    ],
                    "vehicles": [],
                    "starships": [],
                    "created": "2014-12-10T15:11:50.376000Z",
                    "edited": "2014-12-20T21:17:50.311000Z",
                    "url": "https://swapi.dev/api/people/3/"
                }
            ]
        }
        // O nock captura toda requisição que é feita para uma URL
        // específica e devolve uma resposta padrão
        nock('https://swapi.dev/api/people')
        .get('/?search=r2-d2&format=json')
        .reply(200, response);
    });
    // Rodando o teste
    it('Busca o R2-D2 com o formato correto', async () => {
        // Retorno esperado 
        const esperado = [{
            nome: 'R2-D2'
        }];
        const nome = 'r2-d2';
        // A função obterNomePessoas faz uma requisição usando o pacote axios
        // Essa requisição é capturada pelo "nock", que simula a resposta da requisição
        const resultado = await obterNomePessoas(nome);
        // Testa se as variáveis são estritamente iguais
        assert.deepEqual(resultado, esperado);
    });
})
