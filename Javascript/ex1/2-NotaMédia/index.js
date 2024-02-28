const peso1 = 2
const peso2 = 5
const peso3 = 3

let nota1 = prompt("Digite a primeira nota (Atividade Pratica em Laboratorio): ")
let nota2 = prompt("Digite a segunda nota (Prova do semestre): ")
let nota3 = prompt("Digite a terceira nota (Trabalho teorico): ")

let media = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / 10

function classificarNota(media){
    return media > 10? 'Nota Excede Máxima': (9 < media && media <= 10)?   'A' : (8 < media &&  media <= 9)? 'B' : (7 < media && media <= 8)? 'C' : (6 < media && media <= 7)? 'D' : (5 < media && media <= 6)? 'E': 'F'
}
alert("A media do aluno é " + media + " e sua classificação é " + classificarNota(media))