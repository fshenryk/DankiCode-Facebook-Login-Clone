/*
//////////////////////////////////////---------------------------------

chamar todas quando a pagina carregar

----------------------------------------------

var classeNascimento = document.getElementsByClassName("nascimento")

window.onload = function(){
    toLoopDays(1, 31)
    toLoopMonths(0, 11)
    toLoopYears(1913, 2023)
}
------------------------------

separar em funções diferentes

------------------------------

function toLoopDays(i, j){
    for( i ; i <= j; i++){
        createOption(0, i);
    }
}

function toLoopMonths(i, j){
    for( i ; i <= j; i++){
        var stringMonths = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
        classeNascimento[1].innerHTML += `<option value="${stringMonths[i]}">${stringMonths[i]}</option>`;
    }
}

function toLoopYears(i, j){
    for( i ; i <= j; i++){
        createOption(2, i);
    }
}

function createOption(index, i){
    classeNascimento[index].innerHTML += `<option value="${i}">${i}</option>`;
}

/////////////////////////////////////////////----------------


uma função para criar numeros

os dias de 1 - 31
os meses de 1 - 12
os anos de 1 - 110

------------------------------------------

windown.onload = function createOptions(){
    optionLoop(31, 12, 110)
}

function optionLoop(dia, mes, ano){
    indexFonte = 0
    timesToLoop = ['dia', 'mes', 'ano']


    for( i ; i <= fim ; i++ ){
        classeNascimento[indexFonte].innerHTML += `<option value="${i}">${i}</option>`;
    }
    indexfonte++
}

--------------------------------------------

outra função para transformar os meses nas strings
e os anos em 1913 ate 2023

--------------------------------------------
function transformOptios(){
    var stringMonths = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']


    indexFonte = 1

}

/////////////////////////////////////////////////////------------------------------

// Uma função fazendo tudo

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

///////////////////////////////////////////////----------------------
*/

// Uma função pra cada

window.onload = function createOptions(){
    toLoopOptiosDays()
    toLoopOptiosMonths()
    toLoopOptiosYears()
}


function toLoopOptiosDays(){
nascimentoDia = document.getElementsByName('nascimento-dia')[0]   
    for(i = 1; i <= 31 ; i++ ){
        nascimentoDia.innerHTML += `<option value="${i}">${i}</option>`
    }
}

function toLoopOptiosMonths(){
    nascimentoMes = document.getElementsByName('nascimento-mes')[0] 
    stringMonths = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    
    for(i = 0; i <= 11; i++){
        nascimentoMes.innerHTML += `<option value="${stringMonths[i]}">${stringMonths[i]}</option>`
    }
}

function toLoopOptiosYears(){
    nascimentoAno = document.getElementsByName('nascimento-ano')[0]   
    for(i = 1913; i <= 2023 ; i++ ){
        nascimentoAno.innerHTML += `<option value="${i}">${i}</option>`
    }
}