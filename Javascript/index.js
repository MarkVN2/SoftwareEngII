
const form = document.getElementById('form');

// Calculo do Índice de Massa Corporal
// M = peso (quilos) ÷ altura²
// “<Nome> possui índice de massa corporal igual a <m> , sendo classificado como:

var m
var name  
var altura
var peso
var idade




m = peso / altura**2

function estadoIMC(m) {
    return m < 16?  'Baixo peso grave' : m < 16.99?  'Baixo peso' : m < 18.49? 'Peso normal' : m < 24.99? 'Sobrepeso': m < 29.99? 'Obesidade grau I': m < 34.99? 'Obesidade grau II' : 'Obesidade grau III'
}

function faixaEtaria(idade){
    return idade < 15? 'Criança': idade < 30? 'Jovem' : idade < 60? 'Adulto' : 'Idoso' 
}

console.log(estadoIMC(18))


