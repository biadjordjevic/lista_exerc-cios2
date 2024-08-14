// Em uma festa de família alemã, 45 pessoas foram convidadas para beber. Para tanto, foram comprados 300 litros de chopp. Criar um programa que calcule a média de litros bebidos por pessoa, 
// considerando ainda a quantidade de chopp (litros) desperdiçado e a quantidade de chopp (litros) que sobrou. Esses dados devem ser digitados pelo usuário. 
// Caso não tenha havido desperdício e não tenha sobrado chopp, digitar 0 para ambos.  Ao final, mostrar a média de litros bebidos por pessoa na festa.
let chopp = 300
let pessoas =  45
let desperdicio
let sobra
let media

desperdicio = Number(prompt("houveram quantos litros de desperdício?"))
sobra = Number(prompt("quantos litros sobraram?"))

media = (chopp - desperdicio - sobra) / pessoas

alert("A média de chopp consumido por cada convidado foi de " +  media.toFixed(2) + " litros")