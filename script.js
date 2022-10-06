let firstNumber = document.querySelector("#first-number");
let secondNumber = document.querySelector("#second-number");

let plus = document.querySelector("#plus");
let minus = document.querySelector("#minus");
let multiply = document.querySelector("#multiply");
let devide = document.querySelector("#devide");

let selector = document.querySelector("#selector");

let result = document.querySelector("#result-p");



//It was a mistake when I put parameters.
function plusFunc(){

    return Number(firstNumber.value) + Number(secondNumber.value);
}

function minusFunc(){

    return Number(firstNumber.value) - Number(secondNumber.value);
}

function multiplyFunc(){

    return Number(firstNumber.value) * Number(secondNumber.value);
}

function devideFunc(){

    return Number(firstNumber.value) / Number(secondNumber.value);
}

//You were reminded by Henrik to add this bellow line.
selector.addEventListener("input", calcResult)
firstNumber.addEventListener("input", calcResult)
secondNumber.addEventListener("input", calcResult)
function calcResult(){

    //Wrong: selector.value == "+"  
    //Correct: selector.selectedOptions.item(0).value == "+"
    if (selector.selectedOptions.item(0).value == "/" && secondNumber.value == "0" )
        {
            result.innerText = " Can not devide by 0";
        }
    else if(selector.selectedOptions.item(0).value == "+" && firstNumber.value !="" && secondNumber.value != ""){
        
        result.innerText = plusFunc();
    }

    else if(selector.selectedOptions.item(0).value == "-" && firstNumber.value !="" && secondNumber.value != ""){
    
        result.innerText = minusFunc();
    }

    else if(selector.selectedOptions.item(0).value == "*" && firstNumber.value !="" && secondNumber.value != ""){
        
        result.innerText = multiplyFunc();
    }

    else if (selector.selectedOptions.item(0).value == "/" && firstNumber.value !="" && secondNumber.value != "") {
        
        result.innerText = devideFunc();
    }

}

