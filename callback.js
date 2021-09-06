/*
1 - Obter uma venda
2 - Obter o cliente a partir do id da venda
3 - Obter o endereço a partir do id do cliente
*/

function obterVenda(callback) {
    setTimeout(() => {
        // Envia o dado da venda ao segundo parâmetro da função de callback
        return callback(null, {
            id: 1,
            produto: 'Cadeira',
            valor: 200
        })
    }, 1000);
}

function obterCliente(id, callback) {
    setTimeout(() => {
        if (id == 1) {
            return callback(null, {
                id: 3,
                nome: 'João'
            })
        }
        else {
            return callback(new Error('Id da venda inválido.'), null);
        }
    }, 1000);
}

function obterEndereco(id, callback) {
    setTimeout(() => {
        if (id == 3) {
            return callback(null, {
                rua: 'Tungstênio',
                numero: 35
            })
        }
        else {
            return callback(new Error('Id do endereço inválido.'), null);
        }
    }, 1000);
}

// Por convenção, o primeiro parâmetro da função de callback é o erro e o segundo é o sucesso
obterVenda(function resolveVenda(erro, venda) {
    // null || "" || 0 === false
    if (erro) {
        console.error('Houve um problema ao obter dados da venda: ', erro);
    }
    obterCliente(venda.id, function resolveCliente(erro, cliente) {
        if (erro) {
            console.error('Houve um erro ao obter o cliente: ', erro);
        }
        obterEndereco(cliente.id, function resolveEndereco(erro, endereco) {
            if (erro) {
                console.error('Houve um erro ao obter o endereço', erro);
            }
            // Exibe os dados
            console.log({
                venda,
                cliente,
                endereco
            })
        })
    })
})
