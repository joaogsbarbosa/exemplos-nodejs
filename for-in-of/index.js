/*
1 - Usar o for
2 - Usar o for...in
3 - Usar o for...of
4 - Comparar a performance
*/

// usar o ./ quando for referenciar um módulo do projeto
const service = require('./service')

async function main() {
    try {
        // Dados de postagens recebidos de uma Web API
        const result = await service.obterPosts()

        // for
        var titulos = []
        console.time('for')
        for(let i=0; i<result.length; i++) {
            const post = result[i]
            titulos.push(post.title)
        }
        console.timeEnd('for')

        // for...in
        // Cada iteração retorna o index de cada elemento
        var titulos = []
        console.time('for...in')
        for(let i in result) {
            const post = result[i]
            titulos.push(post.title)
        }
        console.timeEnd('for...in')

        // for...of
        // Cada iteração retorna cada elemento
        var titulos = []
        console.time('for...of')
        for(let post of result) {
            titulos.push(post.title)
        }
        console.timeEnd('for...of')

    }
    catch (erro) {
        console.error('Ocorreu um erro:', erro);
    }
}

main()
