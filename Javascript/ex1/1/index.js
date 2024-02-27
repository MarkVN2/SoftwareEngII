
let m
let username  = prompt("Qual o seu nome?")
let altura = prompt("Qual é a sua Altura? (em cm) ")/100
let peso = prompt("Qual o seu peso?")
let idade = prompt("Qual a sua idade?")

m = peso / altura**2
 
alert(`${username} possui índice de massa corporal igual a ${m}, sendo classificado como: ${estadoIMC(m)} e está na faixa etária de ${faixaEtaria(idade)}.`)


function estadoIMC(m) {
    return m < 16?  'Baixo peso grave' : m < 16.99?  'Baixo peso' : m < 18.49? 'Peso normal' : m < 24.99? 'Sobrepeso': m < 29.99? 'Obesidade grau I': m < 34.99? 'Obesidade grau II' : 'Obesidade grau III'
}

function faixaEtaria(idade){
    return idade < 15? 'Criança': idade < 30? 'Jovem' : idade < 60? 'Adulto' : 'Idoso' 
}

