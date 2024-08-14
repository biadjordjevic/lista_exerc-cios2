//  Uma cidade pretende apurar os votos de sua eleição. Faça um programa para ler o número total de eleitores. Em seguida o número de votos do candidato X, o número de votos do candidato Y, 
// total de votos brancos e total de votos nulos (a soma desses quatro, deve ser igual ao total de eleitores). 
// Calcular e escrever o percentual que cada um representa em relação ao total de eleitores. 
let candidatoX
let candidatoY
let votosBrancos
let votosNulos
let totalEleitores
let percentualX
let percentualY
let percentualB
let percentualN

 candidatoX = Number(prompt('Quantidade de votos no candidato X '))
 candidatoY = Number(prompt('Quantidade de votos candidato Y '))
 votosBrancos = Number(prompt('Quantidade de votos brancos '))
 votosNulos = Number(prompt('Quantidade de votos nulos'))

 totalEleitores = candidatoX + candidatoY + votosBrancos + votosNulos

 percentualX = 100*(candidatoX/totalEleitores) 
 percentualX = percentualX.toFixed(2)

 percentualY = 100*(candidatoY/totalEleitores) 
 percentualY = percentualY.toFixed(2)

 percentualB = 100*(votosBrancos/totalEleitores) 
 percentualB = percentualB.toFixed(2)

 percentualN = 100*(votosNulos/totalEleitores) 
 percentualN = percentualN.toFixed(2)

// pesquisei o "tofixed" na internet

 alert("As eleições tiveram" + totalEleitores + " eleitores. \n" + percentualX + "% votaram no candidato X; \n" 
 + percentualY + "% votaram no candidato Y; \n" + percentualB + "% dos votos foram brancos; \n" + percentualN + "% dos votos foram nulos." )