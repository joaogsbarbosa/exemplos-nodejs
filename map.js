/*
1 - Criar vetor de títulos usando o .forEach
2 - Criar vetor de títulos usando o .map
3 - Criar um método personalizado de map que envia o elemento e índice ao callback
4 - Criar vetor de títulos com índice usando o método criado no passo 3
5 - Exibir vetor de títulos e vetor de títulos com índice
*/

const service = require('./util/service');

async function main() {
    try {
        const posts = await service.obterPosts();
        var titulos = [];

        // Iterar usando o método .forEach
        posts.forEach(post => {
            titulos.push(post.title);
        });

        // Usando o map
        // O método .map manipula todos os elementos da lista igualmente
        // e o retorno dessas iterações gera uma nova lista
        titulos = posts.map(post => {
            return post.title;
        });

        // Formato compacto usando o map (apenas 1 instrução)
        titulos = posts.map(post => post.title);

        // Exibe os títulos dos posts
        // As 3 formas de iteração acima retornam o mesmo resultado
        console.log(titulos);

        // Criando um novo método de map na classe Array
        // Esse método envia o elemento e o índice do elemento para a função de callback
        Array.prototype.meuMap = function (callback) {
            const novoArrayMapeado = [];
            for (let i=0; i<this.length; i++) {
                // Envia os elementos para a função de callback fazer as manipulações
                // this[index] acessa um elemento específico do array
                elemManipulado = callback(this[i], i)
                novoArrayMapeado.push(elemManipulado);

            }
            return novoArrayMapeado;
        }
        
        // Chama o novo método .meuMap
        titulosIndex = posts.meuMap( (post, indice) => {
            return `[${indice}] ${post.title}`;
        });

        // Exibe os títulos dos posts com índice
        console.log(titulosIndex);
    }
    catch (erro) {
        console.error('Ocorreu um erro', erro);
    }
}
main();
