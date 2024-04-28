const readline = require('readline');

const promissePergunta = (rl, pergunta) => {
    return new Promise(resolve => {
        rl.question(pergunta, (resposta) => {
            resolve(resposta);
        });
    });
}

const Indagador = function(perguntas) {
    return new Promise(async resolve => {
        let rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        let respostas = [];
        for(let i=0;i < perguntas.length;i++) {
            const resposta = await promissePergunta(rl, perguntas[i]);
            respostas.push(resposta);
        }
        rl.close();
        resolve(respostas);
    })
}

let quantidadeVitorias = 0;
let quantidadeDerrotas = 0;
let saldoRankeada = 0;
let nivelHeroi = "Ferro"

Indagador([
    'Digite a quantidade de vitórias: ',
    'Digite a quantidade de derrotas: '
 ]).then(respostas => {
        quantidadeVitorias = parseInt(respostas[0]);
        quantidadeDerrotas = parseInt(respostas[1]);
        saldoRankeada = quantidadeVitorias - quantidadeDerrotas;
        nivelHeroi = verificaNivelHeroi(saldoRankeada);
        console.log(`O Herói tem de saldo de ${saldoRankeada} está no nível de ${nivelHeroi}`);
    });

function verificaNivelHeroi(saldoRankeada){
    if(saldoRankeada <= 10) {
        return "Ferro"
    }else if(saldoRankeada > 10 && saldoRankeada <= 20){
        return "Bronze"
    }else if(saldoRankeada > 20 && saldoRankeada <= 50){
        return "Prata"
    }else if(saldoRankeada > 50 && saldoRankeada <= 80){
        return "Ouro"
    }else if(saldoRankeada > 80 && saldoRankeada <= 90){
        return "Diamante"
    }else if(saldoRankeada > 90 && saldoRankeada <= 100){
        return "Lendário"
    }else{
        return "Imortal"
    }
}
