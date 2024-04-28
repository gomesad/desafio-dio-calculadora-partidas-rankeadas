# DIO | Bootcamp Santander 2024

## Desafio Calculadora de Partidas Rankeadas

Este projeto é uma possível solução para o desafio proposto no Bootcamp Santander 2024 no curso Base em Lógica de Programação para Jogos.

## ✳️ Prremissas
- Node.js versão LTS ([download](https://nodejs.org/en/download))

## 🖥️ Executando o projeto
- Execute o comando `node src/index.js` no terminal

## 🔥O DESAFIO
 # Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

|SALDO DE VITÓRIAS|RANK|
|:-|:-|
|Se menor do que 10 | Ferro |
|Se entre 11 e 20 | Bronze |
|Se entre 21 e 50 | Prata |
|Se entre 51 e 80 | Ouro |
|Se entre 81 e 90 | Diamante |
|Se entre 91 e 100 | Lendário |
|Se maior ou igual a 101 | Imortal |

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"