/*
1 - Obter o usuário
2 - Obter o endereço a partir do id do usuário
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

obterUsuario()
// Para manipular o sucesso, usamos o método .then
// Para manipular o erro, usamos o método .catch
    .then(function exibeUsuario(usuario) {
        console.log(usuario);
        return usuario;
    })
    // O retorno do .then acima é enviado para o .then abaixo
    .then(function exibeEnderecoUsuario(usuario) {
        obterEnderecoUsuario(usuario.id)
            .then( (endereco) => {
                console.log(endereco);
            })
            .catch( (erro) => {
                console.error("Um erro ocorreu ao obter o endereço: ", erro);
            })
    })
    .catch(function exibeErro(erro) {
        console.error('Um erro ocorreu ao obter o usuário: ', erro);
    })
