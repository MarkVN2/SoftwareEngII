let date = prompt("Data formato(dd/mm/yyyy)")

function undatefy(date){
    let dateundatefied = date.split('/')

    dateundatefied[1] = 
    dateundatefied[1]=='12'? ' de dezembro de ': 
    dateundatefied[1]=='11'? ' de novembro de ': 
    dateundatefied[1]=='10'? ' de outubro de ': 
    dateundatefied[1]=='09'? ' de setembro de ':  
    dateundatefied[1]=='08'? ' de agosto de ':  
    dateundatefied[1]=='07'? ' de julho de ':  
    dateundatefied[1]=='06'? ' de junho de ':
    dateundatefied[1]=='05'? ' de maio de ':
    dateundatefied[1]=='04'? ' de abril de ':
    dateundatefied[1]=='03'? ' de março de ':
    dateundatefied[1]=='02'? ' de fevereiro de ':' de janeiro de'

 
    return dateundatefied.join(' ')
}

alert(undatefy(date))