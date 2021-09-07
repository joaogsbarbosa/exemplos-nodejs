/*
1 - Criar um evento
2 - Emitir um evento
3 - Exibir a emissão de um evento
4 - Capturar e exibir entrada de dados (teclado)
*/

const EventEmitter = require('events');

// MeuEmissor herda de EventEmitter
class MeuEmissor extends EventEmitter {
    // Não altera o comportamento da classe mãe
}

const meuEmissor = new MeuEmissor();
const nomeEvento = 'usuario:click';

// Cria um evento chamado 'usuario:click'
meuEmissor.on(nomeEvento, function (click) {
    // Executa toda vez que o evento é emitido
    console.log('Um usuário clicou', click);
})

// Simula a emissão do evento 'usuario:click'
meuEmissor.emit(nomeEvento, 'na barra de rolagem');
meuEmissor.emit(nomeEvento, 'no botão de ok');

// Simula a emissão do evento 'usuario:click' a cada 1000ms
setInterval(() => {
    meuEmissor.emit(nomeEvento, 'repetidamente');
}, 1000);

// Captura a entrada de dados do teclado e exibe
const stdin = process.openStdin();
stdin.addListener('data', function (value) {
    console.log(`Você digitou: ${value.toString().trim()}`);
})
// Se colocar o bloco acima dentro de uma Promise, ele vai funcionar
// uma única vez. Isso acontece porque a ideia da Promise é executar
// uma única vez.
