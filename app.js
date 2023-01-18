/*
///////////////////////////////////////////////////////////////////////////////////

// UMA FUNÇÃO FAZENDO TUDO

window.onload = function createOptions(){
    dateLoop(1, 31, 0)
    dateLoop(0, 11, 1)
    dateLoop(1913, 2023, 2)
}

function dateLoop(i, fim, indexFonte){
    classeNascimento = document.getElementsByClassName("nascimento") 
    stringMonths = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    
    for( i ; i <= fim; i++ ){
        if(indexFonte != 1 ){
            value = i
        }else{
            value = stringMonths[i]
        }
        classeNascimento[indexFonte].innerHTML += `<option value="${value}">${value}</option>`;
    }
}

////////////////////////////////////////////////////////////////////////////////
*/

// UMA FUNÇÃO PARA CADA  


window.onload = function createOptions(){
    toLoopOptionsDays()
    toLoopOptionsMonths()
    toLoopOptionsYears()
}


function toLoopOptionsDays(){
    for(i = 1; i <= 31 ; i++ ){
        document.getElementsByName('nascimento-dia')[0].innerHTML += 
        `<option value="${i}">${i}</option>`
    }
}

function toLoopOptionsMonths(){
    stringMonths = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    
    for(i = 0; i <= 11; i++){
        document.getElementsByName('nascimento-mes')[0].innerHTML += 
        `<option value="${stringMonths[i]}">${stringMonths[i]}</option>`
    }
}

function toLoopOptionsYears(){
    for(i = 1913; i <= 2023 ; i++ ){
        document.getElementsByName('nascimento-ano')[0].innerHTML +=
        `<option value="${i}">${i}</option>`
    }
}