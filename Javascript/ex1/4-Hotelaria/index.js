
let code = prompt("Codigo do Funcionario")
let turn = prompt ("Turno (M – matutino, V – vespertino ou N – noturno)").toUpperCase()
let workhours = prompt ("Horas de trabalho")
let category = prompt("Categoria (F – funcionário, G - gerente)").toUpperCase()
let minimun_wage = prompt('Salario Minímo do Estado')

let salary 
let pay_by_hour
let food_aid
// G - N - 6%
// G - M/V -  4%
// F - N - 2%
// F - M/V - 1%

if (category =='G' && turn=='N'){
    pay_by_hour = minimun_wage/100*6 
    salary = pay_by_hour * workhours
}
else if (category =='G' && turn=='M' || 'V'){
    pay_by_hour = minimun_wage/100*4 
    salary = pay_by_hour * workhours
}

if (category =='F' && turn=='N'){
    pay_by_hour = minimun_wage/100*2
    salary = pay_by_hour * workhours
}
else if (category =='F' && turn=='M' || 'V'){
    pay_by_hour = minimun_wage/100
    salary = pay_by_hour * workhours
}

if ( salary < 800){
    food_aid = salary/100*25
}
else if(salary < 1.200){
    food_aid = salary/100*20
}
else if(salary > 1.200){
    food_aid = salary/100*15
}

alert(
    `
    Código do Funcionario : ${code} 
    Horas trabalhadoas : ${workhours}hr
    Valor das horas trabalhada : R$${pay_by_hour}/hr
    Salário Inicial : R$${salary}
    Auxilio Alimentação: R$${food_aid}
    Salário Final: R$${salary + food_aid}    
    `
)