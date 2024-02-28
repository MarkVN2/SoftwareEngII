let date = prompt("Data formato(dd/mm/yyyy)")

function extensifyDate(date){
    let new_date = date.split('/')

    new_date[1] = 
    new_date[1]=='12'? ' de dezembro de ': 
    new_date[1]=='11'? ' de novembro de ': 
    new_date[1]=='10'? ' de outubro de ': 
    new_date[1]=='09'? ' de setembro de ':  
    new_date[1]=='08'? ' de agosto de ':  
    new_date[1]=='07'? ' de julho de ':  
    new_date[1]=='06'? ' de junho de ':
    new_date[1]=='05'? ' de maio de ':
    new_date[1]=='04'? ' de abril de ':
    new_date[1]=='03'? ' de março de ':
    new_date[1]=='02'? ' de fevereiro de ':' de janeiro de'
    //Fully Cursed Code
 

    return new_date.join(' ')
}

alert(extensifyDate(date))