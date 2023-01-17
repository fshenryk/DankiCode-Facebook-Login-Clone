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
*/

window.onload = function createOptions(){
    dateLoop(1, 31, 0)
    dateLoop(0, 11, 1)
    dateLoop(1913, 2023, 2)
}

function dateLoop(i, fim, indexFonte){
    var classeNascimento = document.getElementsByClassName("nascimento") 
    var stringMonths = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 
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