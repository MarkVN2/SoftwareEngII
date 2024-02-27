
let taxa_rastreamento = 200.0

let rastreamento = prompt("Deseja rastreamento? (S/N) ")

if (rastreamento == 'S'){
    rastreamento = true
} else if (rastreamento == 'N'){
    rastreamento = false
} else{
    alert("Opção inválida")
}

let regiao = prompt("Qual a região do cliente? (1-Sul, 2-Sudeste, 3-Centro-oeste)")

if (regiao == 1){
    regiao = 1
}
else if (regiao == 2){
    regiao = 2
}
else if (regiao == 3){
    regiao = 3
}
else{
    alert("Opção inválida")
}