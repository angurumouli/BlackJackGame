let myElements = []
const InputEl = document.getElementById("input-el")
const InputBtnEl=document.getElementById("input-btn")
const ulEl=document.getElementById("ul-el")

let div1El=document.getElementById("div1-el")


InputBtnEl.addEventListener("click",function (){
    myElements.push(InputEl.value)
    rederElements()
    InputEl.value=""

})

function rederElements() {
    let listItems=" "
    for(let i=0;i<myElements.length;i++){
        listItems+="<li><a href='#' <img src='mouli.jpg' target='_blank'>"+myElements[i]+"</a></li>"
    }
    ulEl.innerHTML=listItems

}

// for(let i=0;i<myElements.length;i++){
//     ulEl.innerHTML+="<li>"+myElements[i]+"</li>"

//     // const li = document.createElement("li")
//     // li.textContent=myElements[i]
//     // ulEl.append(li)
// }


////or using below code as well
// let listItems=" "
// for(let i=0;i<myElements.length;i++){
//     listItems+="<li>"+myElements[i]+"</li>"
// }
// ulEl.innerHTML=listItems

// InputBtnEl.addEventListener("click",function () {
    
// })

// div1El.innerHTML="<button onclick='buy()'>Buy!</button>"

// function buy() {
//     div1El.innerHTML+="<p>thanks for Buying!!</p>"
// }

// div1El.addEventListener("click",function () {
//     div1El.textContent="thanks for Buying!!"
// })

// for(let i=0;i<myElements.length;i++){
//     ulEl.innerHTML+="<li>"+myElements[i]+"</li>"
// }







//"www.x-master.com",
// "www.google.com",
// "www.www.com",
// "www.mouli.com",
// "www.mahi.com"
