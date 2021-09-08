/*
1 - Aplicar atribuição via desestruturação
2 - Filtrar elementos que possuem "lars" no nome
3 - Criar o próprio método .filter
4 - Usar o método criado no 3º passo para filtrar elementos que possuem "lars" no nome
5 - Exibir os elementos filtrados do passo 2 e 4
*/

// .filter é o método usado para filtrar os dados
// Parecido com a cláusula WHERE do banco de dados

// O uso de chaves especifica o que deve ser importado do require
const { obterPessoas } = require('./for-in-of/service')

/* Atribuição via desestruturação (destructuring assignment) - Exemplo
const item = {
    nome: 'João',
    idade: 10
}
// Extrai o atributo nome para a variável nome
const { nome } = item
// Extrai o atributo nome para a variável nome e o atributo idade para a variável idade
const { nome, idade } = item
*/

async function main() {
    try {
        const { 
            results
        } = await obterPessoas('a')
        
        var familiaLars = results.filter( item => {
            // Essa função de callback precisa retornar um booleano
            // para informar se deve manter ou remover da lista
            // False -> remove da lista
            // True -> mantém na lista

            // .toLowerCase usado para evitar problemas de diferença entre letras maiúsculas e minúsculas
            // Se não encontrou 'lars', .indexOf retorna -1
            // Se encontrou 'lars', .indexOf retorna a posição no Array. Ou seja, >= 0
            const result = item.name.toLowerCase().indexOf('lars') !== -1
            return result
        })
        var names = familiaLars.map( pessoa => pessoa.name )

        // Exibe os nomes da familia Lars
        console.log(names)

        // Cria um filter personalizado
        Array.prototype.meuFilter = function (callback) {
            const lista = []
            for(index in this) {
                item = this[index]
                // O callback tem que retornar True ou False
                const result = callback(item, index, this)
                // 0, "", null, "undefined" === false
                if(!result)
                    continue

                lista.push(item)
            }
            return lista
        }
        
        // Usar o filter personalizado
        // Quando a function só tem uma instrução,
        // não é obrigatório usar as chaves e nem a usar return
        var familiaLars = results.meuFilter( (item, index, lista) =>
            item.name.toLowerCase().indexOf('lars') !== -1)
        
        var names = familiaLars.map( pessoa => pessoa.name )

        // Exibe os nomes da familia Lars
        console.log(names)

    } catch (error) {
        console.error(error)
    }
}

main()