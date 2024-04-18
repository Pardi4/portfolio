let symbolValue = 1
let number1 = ""
let number2 = ""
document.getElementById("value").innerHTML = 0
function klik(value){
    if (value <=9){
        number1 += value    
    }else if(value == 10){
        number1 = ""
        number2 = 0
        document.getElementById("value2").innerHTML = ""
        document.getElementById("symbol").innerHTML = ""
    }else if(value = 11){
        number1 *= -1
    }
    document.getElementById("value").innerHTML = number1
}
function symbol(value){
    if (value == 1){
        symbolValue = 1
        document.getElementById("symbol").innerHTML = "+"
    }else if (value == 2){
        symbolValue = 2
        document.getElementById("symbol").innerHTML = "-"
    }else if (value == 3){
        symbolValue = 3
        document.getElementById("symbol").innerHTML = "×"
    }else{
        symbolValue = 4
        document.getElementById("symbol").innerHTML = "÷"
    }
    if (number1 != "" && number1){
        number2 = number1
        console.log(number2)
        document.getElementById("value2").innerHTML = number2
        number1 = ""
        document.getElementById("value").innerHTML = 0
    }
}
function rowna(){
    if (symbolValue == 1){
        number2 *= 1 
        number1 *= 1
        number2 += number1
    }else if (symbolValue == 2){
        number2 -= number1
    }else if (symbolValue == 3){
        number2 *= number1
    }else{
        number2 /= number1
    }
    if(number2 != null){
        console.log(number2)
        number2 = Math.round(number2 * 100) / 100
        number1 = number2
        number2 = ""
        document.getElementById("value").innerHTML = number1
        document.getElementById("value2").innerHTML = ""
        document.getElementById("symbol").innerHTML = ""
    }
}
