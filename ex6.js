//  Em uma fábrica de reciclagem de materiais, cada 10kg de plástico rendem R$2,00 cada 30kg de papel rendem R$3,00 e cada 50kg de metal rendem R$5,00. 
// Perguntar ao usuário a quantidade (kg) de cada material que deseja entregar na fábrica e mostrar o total que receberá em reais. 
let plastico
let papel
let metal
let valorPlastico
let valorPapel
let valorMetal
let total

plastico = Number(prompt("quanto KG de plástico?"))
papel = Number(prompt("quanto KG de papel?"))
metal  = Number(prompt("quanto KG de metal?"))

valorPlastico = plastico/ 10 * 2
valorPapel = plastico/ 30 * 3
valorMetal = metal/ 50 * 5
total = valorMetal + valorPapel + valorPlastico

alert("Ao todo, foram rendidos "  + total + " reais")
