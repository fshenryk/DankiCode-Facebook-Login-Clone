
/*

var classeNascimento = document.getElementsByClassName("nascimento") 
var storagedMonths = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 
'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']


var toBeCreated = function(){
    if(classeNascimento.index != 1){
        return i
    }else{

    }
}
    //////--------

    window.onload = function createOptions(){
        toChooseHowMuch(1, 31, 0)
        toChooseHowMuch(0, 11, 1)
        toChooseHowMuch(1913, 2023, 2)
    }

    
    function toChooseHowMuch(começo, fim){
        for(i = começo; i <= fim; i++){
            
            toCreaterOptions(toBeCreated)
        }
        
    }
    
    toCreateOption(toBeCreated, fonte){
        classeNascimento[fonte].innerHTML += 
        `<option value="${toBeCreated}">${toBeCreated}</option>`;
    }
    
//////////-------------------------------------

*/
   


/*   
window.onload = function createOptions(){
    dateLoop(1, 31, 0)
    dateLoop(0, 11, 1)
    dateLoop(1913, 2023, 2)
}

function dateLoop(i, fim, fonte){
    var classeNascimento = document.getElementsByClassName("nascimento") 
    var stringMonths = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

    for(i ; i <= fim; i++ ){
        var value = ""
        if(fonte != 1 ){
            value = i
        }else{
            value = stringMonths[i]
        }
        classeNascimento[fonte].innerHTML += `<option value="${value}">${value}</option>`;
    }
}

///-------------

var classeNascimento = document.getElementsByClassName("nascimento")

window.onload = function(){
    toLoopDays(1, 31)
    toLoopMonths(0, 11)
    toLoopYears(1913, 2023)
}

function toLoopDays(i, j){
    for(i ; i <= j; i++){
        createOption(0, i);
    }
}

function toLoopMonths(i, j){
    for(i ; i <= j; i++){
        var stringMonths = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
        classeNascimento[1].innerHTML += `<option value="${stringMonths[i]}">${stringMonths[i]}</option>`;
    }
}

function toLoopYears(i, j){
    for(i ; i <= j; i++){
        createOption(2, i);
    }
}

function createOption(index, i){
    classeNascimento[index].innerHTML += `<option value="${i}">${i}</option>`;
}

///////----------------

*/
window.onload = function createOptions(){
    dateLoop(1, 31, 0)
    dateLoop(0, 11, 1)
    dateLoop(1913, 2023, 2)
}

function dateLoop(i, fim, fonte){
    var classeNascimento = document.getElementsByClassName("nascimento") 
    var stringMonths = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

    for(i ; i <= fim; i++ ){
        if(fonte != 1 ){
            value = i
        }else{
            value = stringMonths[i]
        }
        classeNascimento[fonte].innerHTML += `<option value="${value}">${value}</option>`;
    }
}