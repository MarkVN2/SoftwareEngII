
var rg_prices = {1:1.0,2:1.20,3:1.30}
var rg_discounts = {1:10,2:12,3:13}


let tracking
while ( tracking != true && tracking != false){
    tracking = prompt("Deseja rastreamento? (S/N) ")
    if (tracking == 'S'){
        tracking = true
    } else if (tracking == 'N'){
        tracking = false
    } else{
        alert("Opção inválida")
    }
}

let region
while (region != 1 && region != 2 && region != 3){
    region = prompt("Qual a região do cliente? (1-Sul, 2-Sudeste, 3-Centro-oeste)")
    if (region == 1){
        region = 1
    }
    else if (region == 2){
        region = 2
    }
    else if (region == 3){
        region = 3
    }
    else{
        alert("Opção inválida")
    }
} 

let liters_per_km = prompt("Custo por quilometro andado")


let  kilometers = prompt("Quilometros andados")
 

let qtn_parts = parseInt(prompt("Quantidade de Partes"))


function deliveryCostsPerKM(tracking,liters_per_km,kilometers){
    return delivery_price = liters_per_km * kilometers + (tracking? 200.0:0)
}

function deliveryCostsParts(parts,region){
    
    let delivery_price
    let rg_fixed_price = rg_prices[region]
    let rg_discount = rg_discounts[region]

    if (parts % 1000){
        let lmao = parts % 1000
        remaining_parts = parts - lmao*1000
        delivery_price = ((lmao*1000) * rg_fixed_price) + (remaining_parts * rg_fixed_price/100*rg_discount)
        
        return delivery_price 
    }
    else{
        delivery_price = parts * rg_fixed_price

        return delivery_price
    }

}
let delivery_cost_km = deliveryCostsPerKM(tracking,liters_per_km,kilometers)
let delivery_cost_parts = deliveryCostsParts(qtn_parts,region)
let total = delivery_cost_km + delivery_cost_parts

alert(`Taxa do rastreamento:${tracking?200:0} \n Valor de frete pelas peças: ${delivery_cost_parts} \n Valor do frete por quilômetro: ${delivery_cost_km} \n Valor total do frete: ${total}`)