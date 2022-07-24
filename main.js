const numbers = document.querySelectorAll(".num");
const displayEL = document.querySelector(".show")
const operationEl = document.querySelectorAll(".operation")
const solveEl = document.querySelector(".soln")
const delEl = document.querySelector(".del")
const theme1El = document.querySelector(".uno")
const theme2El = document.querySelector(".dos")
const theme3El = document.querySelector(".tres")
const tbEl = document.querySelector(".tb")
const contianerEl = document.querySelector(".contianer")
const resetEl = document.querySelector(".reload")
const calcEl = document.querySelector(".calc")
const thEl = document.querySelector(".theme")
const numEl = document.querySelector(".numbers")
let operation = "";
let no = 0;
let allno = "";
let number1 = "";
let number2 = '';
let answer = "";

theme1El.addEventListener("click", e=>{
    document.body.style.backgroundColor = "hsl(222, 26%, 31%)"
    displayEL.style.backgroundColor = "hsl(224, 36%, 15%)"
    displayEL.style.color = "hsl(0, 0%, 100%)"
    resetEl.style.backgroundColor = "hsl(225, 21%, 49%)"
    resetEl.style["boxShadow"] = " 0 2px 0 hsl(224, 28%, 35%)"
    delEl.style.backgroundColor = "hsl(225, 21%, 49%)"
    delEl.style["boxShadow"] = " 0 2px 0 hsl(224, 28%, 35%)"
    solveEl.style.backgroundColor = "hsl(6, 63%, 50%)"
    solveEl.style.color = "hsl(0, 0%, 100%)"
    solveEl.style["boxShadow"] = " 0 2px 0 hsl(6, 70%, 34%)"
    tbEl.style.backgroundColor = "hsl(223, 31%, 20%)"
    contianerEl.style.backgroundColor= "hsl(223, 31%, 20%)"
    thEl.style.color = "hsl(0, 0%, 100%)"
    calcEl.style.color = "hsl(0, 0%, 100%)"
    numEl.style.color = "hsl(0, 0%, 100%)"
    theme2El.style.opacity = "0"
    theme1El.style.opacity = "1"
    theme3El.style.opacity = "0"
    Array.from(numbers).forEach(numbers=>{
        numbers.style.backgroundColor = "hsl(30, 25%, 89%)"
    })
    Array.from(numbers).forEach(numbers=>{
        numbers.style.color = "hsl(221, 14%, 31%)"
    })
    Array.from(numbers).forEach(numbers=>{
       numbers.style["boxShadow"] = "0 2px 0 hsl(28, 16%, 65%)"
    })
    Array.from(operationEl).forEach(operationEl=>{
        operationEl.style.color = "hsl(221, 14%, 31%)"
    })
    Array.from(operationEl).forEach(operationEl=>{
        operationEl.style.backgroundColor = "hsl(30, 25%, 89%)"
    })
    Array.from(operationEl).forEach(operationEl=>{
        operationEl.style["boxShadow"] = "0 2px 0 hsl(28, 16%, 65%)"
    })
})
theme2El.addEventListener("click", e=>{
    document.body.style.backgroundColor = "hsl(0, 0%, 90%)"
    displayEL.style.backgroundColor = "hsl(0, 0%, 93%)"
    displayEL.style.color = "hsl(60, 10%, 19%)"
    resetEl.style.backgroundColor = "hsl(185, 42%, 37%)"
    resetEl.style["boxShadow"] = "0 2px 0 hsl(185, 58%, 25%)"
    delEl.style.backgroundColor = "hsl(185, 42%, 37%)"
    delEl.style["boxShadow"] = "0 2px 0 hsl(185, 58%, 25%)"
    solveEl.style.backgroundColor = "hsl(25, 98%, 40%)"
    solveEl.style["boxShadow"] = "0 2px 0 hsl(25, 99%, 27%)"
    tbEl.style.backgroundColor = "hsl(0, 5%, 81%)"
    contianerEl.style.backgroundColor= "hsl(0, 5%, 81%)"
    thEl.style.color = "hsl(60, 10%, 19%)"
    calcEl.style.color = "hsl(60, 10%, 19%)"
    numEl.style.color = "hsl(60, 10%, 19%)"
    theme2El.style.opacity = "1"
    theme1El.style.opacity = "0"
    theme3El.style.opacity = "0"
    Array.from(numbers).forEach(numbers=>{
        numbers.style.backgroundColor = "hsl(45, 7%, 89%)"
    })
    Array.from(numbers).forEach(numbers=>{
        numbers.style.color = "hsl(60, 10%, 19%)"
    })
    Array.from(numbers).forEach(numbers=>{
        numbers.style["boxShadow"] = "0 2px 0 hsl(35, 11%, 61%)"
    })
    Array.from(operationEl).forEach(operationEl=>{
        operationEl.style.color = "hsl(60, 10%, 19%)"
    })
    Array.from(operationEl).forEach(operationEl=>{
        operationEl.style.backgroundColor = "hsl(45, 7%, 89%)"
    })
    Array.from(operationEl).forEach(operationEl=>{
        operationEl.style["boxShadow"] = "0 2px 0 hsl(35, 11%, 61%)"
    })
    


})
theme3El.addEventListener("click", e=>{
    document.body.style.backgroundColor = "hsl(268, 75%, 9%)"
    displayEL.style.backgroundColor = "hsl(268, 71%, 12%)"
    displayEL.style.color = "hsl(52, 100%, 62%)"
    resetEl.style.backgroundColor = "hsl(281, 89%, 26%)"
    resetEl.style["boxShadow"] = "0 2px 0 hsl(285, 91%, 52%)"
    delEl.style.backgroundColor = "hsl(281, 89%, 26%)"
    delEl.style["boxShadow"] = "0 2px 0 hsl(285, 91%, 52%)"
    solveEl.style.backgroundColor = "hsl(176, 100%, 44%)"
    solveEl.style.color = "hsl(198, 20%, 13%)"
    solveEl.style["boxShadow"] = "0 2px 0 hsl(177, 92%, 70%)"
    tbEl.style.backgroundColor = "hsl(268, 71%, 12%)"
    contianerEl.style.backgroundColor= "hsl(268, 71%, 12%)"
    thEl.style.color = "hsl(52, 100%, 62%)"
    calcEl.style.color = "hsl(52, 100%, 62%)"
    numEl.style.color = "hsl(52, 100%, 62%)"
    theme2El.style.opacity = "0"
    theme1El.style.opacity = "0"
    theme3El.style.opacity = "1"
    Array.from(numbers).forEach(numbers=>{
        numbers.style.backgroundColor = "hsl(268, 47%, 21%)"
    })
    Array.from(numbers).forEach(numbers=>{
        numbers.style.color = "hsl(52, 100%, 62%)"
    })
    Array.from(operationEl).forEach(operationEl=>{
        operationEl.style.color = "hsl(52, 100%, 62%)"
    })
    Array.from(numbers).forEach(numbers=>{
        numbers.style["boxShadow"] = "0 2px 0 hsl(290, 70%, 36%)"
    })
    Array.from(operationEl).forEach(operationEl=>{
        operationEl.style.backgroundColor = "hsl(268, 47%, 21%)"
    })
    Array.from(operationEl).forEach(operationEl=>{
        operationEl.style["boxShadow"] = "0 2px 0 hsl(290, 70%, 36%)"
    })
})

Array.from(numbers).forEach(numbers =>{
    numbers.addEventListener("click", e=>
    {
      no= e.target.innerText
        displaySreen()
    })
})
Array.from(operationEl).forEach(operationEl=>{
    operationEl.addEventListener("click", e=>{
        no= ""
        if ( number2 === ""){
            operation = e.target.innerText
        }
        else if ( number2 != ""){
            calculate()
            operation = e.target.innerText
        }
        return
    })
})
function displaySreen (){
    if (operation === ""){
        number1 = number1.concat(no)
        displayEL.value = number1
    }else if(operation != ""){
        number2 = number2.concat(no)
        displayEL.value = number2
    }
    return
}
function calculate(){
    if(operation==="-"){
        answer = parseFloat(number1) - parseFloat(number2)
    }
    else if(operation === "+"){
        answer = parseFloat(number1) + parseFloat(number2)
    }
    else if(operation === "/"){
        answer = parseFloat(number1) / parseFloat(number2)
    }
    else if(operation === "x"){
        answer = parseFloat(number1) * parseFloat(number2)
    }
    answer= answer.toString()
    displayEL.value = answer
    number1 = answer
    number2 = ""
}
solveEl.addEventListener("click", e=>{
    calculate()
    return
})

delEl.addEventListener("click", e=>{
    if(displayEL.value === number1){
        number1 = number1.slice(0,-1)
        displayEL.value = number1
    }
    else if(displayEL.value === number2){
        number2 = number2.slice(0,-1)
        displayEL.value = number2
    }
    else if(displayEL.value === answer){
        answer= answer.slice(0, -1)
        displayEL.value = answer
    }
})
