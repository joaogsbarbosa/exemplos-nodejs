/*
1 - Testar o .reduce
2 - Criar um método de reduce chamado .meuReduce
3 - Testar o .meuReduce
*/

const { obterPessoas } = require("./util/service");

async function main() {
    try {
        const {
            results
        } = await obterPessoas('a');
        const pesos = results.map(item => parseInt(item.height));
        console.log('Pesos: ', pesos);
        // .reduce -> reduz todos os elementos de um array em um só
        // ex: [10, 10, 10] = 30
        const total = pesos.reduce( (acumulador, valorAtual, index) => {
            console.log('acumulador:', acumulador,
                ' valorAtual:', valorAtual, ' index:', index);
            return acumulador + valorAtual;
        })
        // É possível definir um número para ser o primeiro acumulador do reduce
        // Basta apenas informar no segundo parâmetro do método .reduce
        // Ex: [10,20,30].reduce( (a,b)=>a+b, 5)
        console.log('Total:', total);

        // Criando um método de reduce chamado .meuReduce
        Array.prototype.meuReduce = function(callback, valorInicial) {
            // Faz uma cópia do this para não afetar o array 
            copiaThis = [].concat(this);

            // Não recebeu um valorInicial
            if (valorInicial === undefined) {
                // Transforma o primeiro elemento do array no acumulador
                acumulador = copiaThis[0];
                // Remove do array o elemento que virou acumulador
                copiaThis.shift();
            }
            else { // Recebeu valorInicial
                acumulador = valorInicial;
            }

            for(valorAtual of copiaThis) {
                acumulador = callback(acumulador, valorAtual, this);
            }
            return acumulador;
        }

        // Usando o método .meuReduce
        const minhaLista = [
            ['João', 'Gabriel'],
            ['Node', 'Javascript'],
            ['Stack', 'Overflow']
        ];
        const total2 = minhaLista.meuReduce( (acumulador, valorAtual) => {
                return acumulador.concat(valorAtual);
            })
            .join(', ');
        
        console.log(total2)


    } catch (error) {
        console.error("Ocorreu um erro: ", error);
    }
}

main();
