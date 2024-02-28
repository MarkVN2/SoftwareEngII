let num1 = prompt("Primeiro Número")
let num2 = prompt("Segundo Número")
let calculation = prompt("Qual o tipo de operação? (soma ou subtração) ")


function calculate(num1,num2,calculation){
    return calculation=="soma"? num1 + num2 : calculation=="subtração"? num1 - num2: "nah i'd e^x"
}

alert("O Resultado é " + calculate(num1,num2,calculation))