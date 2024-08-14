// Criar um programa que calcule o IMC, no qual o usuário deve digitar o seu peso e altura, realizar o cálculo (peso / altura * altura) e mostrar o resultado na tela. 
let altura
let peso
let IMC

altura = Number(prompt("Digite sua altura: "))
peso = Number(prompt("Digite seu peso: "))
IMC = peso / (altura * altura)
IMC = IMC.toFixed(2);

alert("Seu IMC é de: " + IMC)
