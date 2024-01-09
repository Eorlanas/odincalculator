let firstnumber = ""
let secondnumber = ""
let firstnumberdec = ""
let secondnumberdec = ""
let firstfloat
let secondfloat
let operator = ""
let operation = ""
let result
let decimal = false
const operationh1 = document.getElementById("operation")
const numbuttons = document.getElementsByClassName("numbutton")
const opbuttons = document.getElementsByClassName("opbutton")
const operators = ["+", "-", "/", "*"]


for (button of numbuttons) {
    button.addEventListener("click", addnumber)    
};


for (button of opbuttons) {
    button.addEventListener("click", addoperator)
}

document.querySelector("#equal").addEventListener("click", calculate)
document.querySelector("#clear").addEventListener("click", clear)
document.querySelector("#dec").addEventListener("click", decimaltoggle)



function addnumber(){
    let a = event.target.textContent
    if (operator == ""){
        if (firstnumber == result){
            clear()
        }
        if (decimal == false){
            firstnumber += a
        }
        else{
            firstnumberdec += a
        }
    }
    else{
        if (decimal == true && secondnumber != ""){
            secondnumberdec += a
        }
        else{
            secondnumber += a
        }
    }
    updateoperation()
}


function addoperator(){
    let a = event.target.textContent
    if (operator != ""){
        calculate()
    }
    operator = event.target.textContent
    updateoperation()
    decimal = false
}


function clear(){
    firstnumber = ""
    firstnumberdec = ""
    secondnumber = ""
    secondnumberdec = ""
    operator = ""
    operationh1.textContent = ""
    decimal = false
}


function updateoperation(){
    let fullfirst 
    let fullsecond
    if (firstnumberdec != ""){
        fullfirst = firstnumber+"."+firstnumberdec
    }
    else{
        fullfirst = firstnumber
    }
    if (secondnumberdec != "" && secondnumber != ""){
        fullsecond = secondnumber+"."+secondnumberdec
    }
    else{
        fullsecond = secondnumber
    }
    operationh1.textContent = fullfirst+operator+fullsecond
}


function calculate(){
    handlestrings()
    if (operator == "" || secondnumber == ""){
        return
    } else if (operator == "+"){
        result = add().toFixed(5)
    } else if (operator == "*"){
        result = multiply().toFixed(5)
    } else if (operator == "-"){
        result = subtract().toFixed(5)
    } else if (operator == "/"){
        result = divide().toFixed(5)
    }
    operationh1.textContent = result
    firstnumber = result
    firstnumberdec = ""
    secondnumber = ""
    secondnumberdec = ""
    operator = ""
    decimal = false
}


function decimaltoggle(){
    decimal = true
    if (secondnumber == "" && operator != ""){
        operationh1.textContent+="0"
        secondnumber = "0"
    }
    if (firstnumber == result && operator == ""){
        return
    }
    else{
        operationh1.textContent+="."
    }
}

function add(){
    return parseFloat(firstnumber) + parseFloat(secondnumber)
}


function multiply(){
    return parseFloat(firstnumber) * parseFloat(secondnumber)
}


function subtract(){
    return parseFloat(firstnumber) - parseFloat(secondnumber)
}


function divide(){
    return parseFloat(firstnumber) / parseFloat(secondnumber)
}


function handlestrings(){
    firstnumber = parseFloat(firstnumber+"."+firstnumberdec)
    secondnumber = parseFloat(secondnumber+"."+secondnumberdec)
}