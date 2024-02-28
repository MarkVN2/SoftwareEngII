
let m
let username  = prompt("Qual o seu nome?")
let height = prompt("Qual é a sua Altura? (em cm) ")/100
let weight = prompt("Qual o seu peso?")
let age = prompt("Qual a sua idade?")

m = weight / height**2
 
alert(`${username} possui índice de massa corporal igual a ${m}, sendo classificado como: ${estadoIMC(m)} e está na faixa etária de ${faixaEtaria(age)}.`)


function estadoIMC(m) {
    return m < 16?  'Baixo peso grave' : m < 16.99?  'Baixo peso' : m < 18.49? 'Peso normal' : m < 24.99? 'Sobrepeso': m < 29.99? 'Obesidade grau I': m < 34.99? 'Obesidade grau II' : 'Obesidade grau III'
}

function faixaEtaria(age){
    return age < 15? 'Criança': age < 30? 'Jovem' : age < 60? 'Adulto' : 'Idoso' 
}

