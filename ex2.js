//  Desenvolva uma programação que peça ao usuário para digitar o ano do seu nascimento no formato (YYYY) e o ano atual também no formato (YYYY). 
// Em seguida mostre na tela qual a idade do usuário em anos, em meses, em dias e em semanas
let anoDeNasc
let anoAtual
let idadeAno
let idadeMeses
let idadeDias
anoDeNasc = Number(prompt('Digite o ano em que você nasceu: '))
anoAtual = Number(prompt('Digite o ano atual: '))
idadeAno = anoAtual - anoDeNasc
idadeMeses = idadeAno * 12
idadeDias = idadeAno * 365
alert("Você tem " + idadeAno + " anos, " + idadeMeses + " meses e " + idadeDias + " dias de idade")