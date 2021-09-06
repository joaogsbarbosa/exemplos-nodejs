/*
1 - Obter usuário
2 - Obter telefone a partir do id do usuário
3 - Obter endereço a partir do id do usuário
4 - Executar os passos 2 e 3 de forma assíncrona (ao mesmo tempo)
5 - Exibir as informações obtidas
*/

function obterUsuario() {
    return new Promise( (resolve, reject) => {
        // Caso haja sucesso -> resolve(SUCESSO)
        // Caso haja erro -> reject(ERRO)
        setTimeout(() => {
            return resolve({
                id: 1,
                nome: "João"
            })
        }, 1000);
    })
}

function obterTelefone(id) {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            if (id == 1) {
                return resolve({
                    ddd: 11,
                    numero: 1199002
                })
            }
            else {
                return reject(new Error("Id de usuário inválido!"));
            }
        }, 1000);

    })
}

function obterEnderecoUsuario(id) {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            if (id == 1) {
                return resolve({rua : "Barro"});
            }
            else {
                return reject(new Error("Id de usuário inválido!"));
            }
        }, 1000);
    })
}

// 1º passo -> Adicionar a palavra async, que faz a função retornar uma Promise e permite usar o "await"
async function main() {
    try {
        // 2º passo -> Adicionar "await" antes da chamada da função
        // Com isso, o programa aguarda o retorno da função para continuar a execução
        const usuario = await obterUsuario();
        // O "Promise.all" executa todas as promises de uma única vez
        // Usar quando duas ou mais promises não dependem uma da outra, então elas podem executar ao mesmo tempo
        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEnderecoUsuario(usuario.id)
        ])
        const telefone = resultado[0];
        const endereco = resultado[1];
        console.log(`
            Nome: ${usuario.nome},
            Telefone: (${telefone.ddd}) ${telefone.numero}
            Endereço: ${endereco.rua}
        `)
    } catch (error) {
        console.error('Ocorreu um erro: ', error);
    }
}

main();
